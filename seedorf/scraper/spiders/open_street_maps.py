import scrapy
from urllib.parse import urlparse, parse_qs, urljoin
import json
from ..items import Spot


class PlayAdvisorSpider(scrapy.Spider):
    name = "open_street_maps"

    def start_requests(self):
        # REF: https://wiki.openstreetmap.org/wiki/NL:Kaartelementen#Sports
        # REF: https://wiki.openstreetmap.org/wiki/Key:sport

        sports = [
            "9pin",
            "10pin",
            "american_football",
            "aikido",
            "archery",
            "athletics",
            "australian_football",
            "badminton",
            "bandy",
            "baseball",
            "basketball",
            "beachvolleyball",
            "billiards",
            "bmx",
            "bobsleigh",
            "boules",
            "bowls",
            "boxing",
            "bullfighting",
            "canadian_football",
            "canoe",
            "chess",
            "cliff_diving",
            "climbing",
            "climbing_adventure",
            "cockfighting",
            "cricket",
            "crossfit",
            "croquet",
            "curling",
            "cycling",
            "darts",
            "dog_racing",
            "equestrian",
            "fencing",
            "field_hockey",
            "free_flying",
            "futsal",
            "gaelic_games",
            "golf",
            "gymnastics",
            "handball",
            "hapkido",
            "horseshoes",
            "horse_racing",
            "ice_hockey",
            "ice_skating",
            "ice_stock",
            "judo",
            "karate",
            "karting",
            "kitesurfing",
            "korfball",
            "krachtbal",
            "lacrosse",
            "martial_arts",
            "model_aerodrome",
            "motocross",
            "motor",
            "multi",
            "netball",
            "obstacle_course",
            "orienteering",
            "paddle_tennis",
            "padel",
            "parachuting",
            "pelota",
            "racquet",
            "rc_car",
            "roller_skating",
            "rowing",
            "rugby_league",
            "rugby_union",
            "running",
            "sailing",
            "scuba_diving",
            "shooting",
            "skateboard",
            "soccer",
            "sumo",
            "surfing",
            "swimming",
            "table_tennis",
            "table_soccer",
            "taekwondo",
            "tennis",
            "toboggan",
            "volleyball",
            "water_polo",
            "water_ski",
            "weightlifting",
            "wrestling",
            "yoga",
        ]
        for sport in sports:
            yield scrapy.FormRequest(
                url="https://overpass-api.de/api/interpreter",
                method="POST",
                formdata={
                    "data": f"""[out:json];
                                area["ISO3166-1"="NL"][admin_level=2];
                                node
                                  [leisure=pitch][sport={sport}]
                                  (area);
                                out;
                             """
                },
                callback=self.parse,
            )

    def parse(self, response):
        api_response = json.loads(response.body_as_unicode())
        spots = api_response["elements"]

        for spot in spots:
            item = Spot()
            item["id"] = spot["id"]
            item["label"] = spot["tags"].get("name", "")
            item["description"] = spot["tags"].get("description", "")
            item["lat"] = spot["lat"]
            item["lng"] = spot["lon"]
            item["sports"] = [
                spot["tags"]["sport"],
            ]

            yield item
