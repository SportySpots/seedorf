# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Spot(scrapy.Item):
    id = scrapy.Field(serializer=int)
    label = scrapy.Field(serializer=str)
    description = scrapy.Field(serializer=str)
    lat = scrapy.Field()
    lng = scrapy.Field()
    sports = scrapy.Field(default=[])
    images = scrapy.Field(default=[])
    attributes = scrapy.Field()


SPORT_MAPPING_SPORTYSPOTS = {
    "fitness": "7d5cac64-e9aa-4889-9f3c-803bcc93462c",
    "beachvolley": "672e593a-ac57-432a-b718-63d26074db1c",
    "basketball": "0619c38d-4b21-4663-ba23-b49f682f50a2",
    "soccer": "2e9c614d-632f-4386-a9f5-0d514cb56c15",
    "jeudeboules": "327bee89-789c-4e18-9a50-1f01c2d36a2f",
    "skate": "3662531a-957c-4eef-974e-7d4a09d428ea",
    "tennis": "8ef143ce-22d5-4155-9e3a-8d2b5d5fdd5c",
    "others": "512a417f-f8fd-4637-b1ed-860747c60799",
}

SPORT_MAPPING_AMSTERDAM_OPEN_API = {
    "FITNESS": "fitness",
    "BEACHVOLLEY": "beachvolley",
    "BASKETBAL": "basketball",
    "VOETBAL": "soccer",
    "JEUDEBOULES": "jeudeboules",
    "SKATE": "skate",
    "TENNIS": "tennis",
    "OVERIG": "others",
}

SPORT_MAPPING_OPEN_STREET_MAPS = {
    "9pin": None,
    "10pin": None,
    "american_football": None,
    "aikido": None,
    "archery": None,
    "athletics": None,
    "australian_football": None,
    "badminton": None,
    "bandy": None,
    "baseball": None,
    "basketball": "basketball",
    "beachvolleyball": "beachvolleyball",
    "billiards": None,
    "bmx": None,
    "bobsleigh": None,
    "boules": None,
    "bowls": None,
    "boxing": None,
    "bullfighting": None,
    "canadian_football": None,
    "canoe": None,
    "chess": None,
    "cliff_diving": None,
    "climbing": None,
    "climbing_adventure": None,
    "cockfighting": None,
    "cricket": None,
    "crossfit": None,
    "croquet": None,
    "curling": None,
    "cycling": None,
    "darts": None,
    "dog_racing": None,
    "equestrian": None,
    "fencing": None,
    "field_hockey": None,
    "free_flying": None,
    "futsal": None,
    "gaelic_games": None,
    "golf": None,
    "gymnastics": None,
    "handball": None,
    "hapkido": None,
    "horseshoes": None,
    "horse_racing": None,
    "ice_hockey": None,
    "ice_skating": None,
    "ice_stock": None,
    "judo": None,
    "karate": None,
    "karting": None,
    "kitesurfing": None,
    "korfball": None,
    "krachtbal": None,
    "lacrosse": None,
    "martial_arts": None,
    "model_aerodrome": None,
    "motocross": None,
    "motor": None,
    "multi": None,
    "netball": None,
    "obstacle_course": None,
    "orienteering": None,
    "paddle_tennis": None,
    "padel": None,
    "parachuting": None,
    "pelota": None,
    "racquet": None,
    "rc_car": None,
    "roller_skating": None,
    "rowing": None,
    "rugby_league": None,
    "rugby_union": None,
    "running": None,
    "sailing": None,
    "scuba_diving": None,
    "shooting": None,
    "skateboard": None,
    "soccer": None,
    "sumo": None,
    "surfing": None,
    "swimming": None,
    "table_tennis": None,
    "table_soccer": None,
    "taekwondo": None,
    "tennis": None,
    "toboggan": None,
    "volleyball": None,
    "water_polo": None,
    "water_ski": None,
    "weightlifting": None,
    "wrestling": None,
    "yoga": None,
}

SPORT_MAPPING_PLAY_ADVISOR = {}
