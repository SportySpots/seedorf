import scrapy
from urllib.parse import urlparse, parse_qs, urljoin

from ..items import Spot


class PlayAdvisorSpider(scrapy.Spider):
    name = "play_advisor"
    start_urls = [
        "https://playadvisor.co/zoeken/?_sft_speelplektype=sport-fitness&_sf_s=&_sft_land=nederland",
    ]

    def parse(self, response):

        for spot in response.css("article"):
            item = Spot()
            item["id"] = spot.css("article::attr(id)").re_first(r"post-(\d*)")
            item["label"] = spot.css("article header.entry-header h2.entry-title a::text").get()
            item["sports"] = spot.xpath("@class").re(r"speelplektype-(\S*)")

            # Get additional details
            spot_detail_url = spot.css("article header.entry-header h2.entry-title a::attr(href)").get()
            request = scrapy.Request(spot_detail_url, callback=self.parse_spot_details,)
            request.meta["item"] = item
            yield request

        # Paginate over search results
        next_page = response.css("nav .nav-links a.next::attr(href)").get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)

    def parse_spot_details(self, response):
        item = response.meta["item"]

        # Add lat and lng
        # REF: href="https://maps.google.com?daddr=51.9419762,5.8667076"
        google_maps_url = response.css("div#speelplek-location > a::attr(href)").get()
        parsed_google_maps_url = urlparse(google_maps_url)
        parsed_query_string = parse_qs(parsed_google_maps_url.query)
        daddr = parsed_query_string["daddr"][0]
        lat, lng = daddr.split(",")
        item["lat"] = lat
        item["lng"] = lng

        # Add images
        item["images"] = list()
        main_image_url = response.css("div.post-thumb img::attr(src)").get()
        item["images"].append(main_image_url)
        gallery_images_urls = response.css("div.gallery-image img::attr(src)").getall()
        item["images"].extend(gallery_images_urls)

        # Add spot address
        item["attributes"] = list()
        address = response.css("div#speelplek-location p::text").get() or ""
        city = response.css("div#speelplek-location p a::text").get() or ""
        item["attributes"].append({"attribute_name": "formatted_address", "value": f"{address} {city}"})

        # REF: https://playadvisor.co/speelplek/outdoor-fitness-toestellen/skatebaan-in-burgemeester-t-veldpark/?_sft_speelplektype=sport-fitness&_sf_s&_sft_land=nederland
        item["attributes"].append(
            {"attribute_name": "url", "value": urljoin(response.url, urlparse(response.url).path),}
        )
        yield item
