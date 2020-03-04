from .prd import *  # noqa

MEDIA_URL = "https://sportyspots-stg.s3.amazonaws.com/"

CORS_ORIGIN_WHITELIST = [
    "https://training.sportyspots.com",
    "http://localhost:8000",
    "http://localhost:8080",
    "http://127.0.0.1:8000",
] + CORS_ORIGIN_WHITELIST
