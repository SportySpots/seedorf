from .prd import *  # noqa

MEDIA_URL = "https://sportyspots-stg.s3.amazonaws.com/"

CORS_ORIGIN_WHITELIST = [
    "training.sportyspots.com",
    "localhost:8000",
    "localhost:8080",
    "127.0.0.1:8000" "127.0.0.1:8080",
] + CORS_ORIGIN_WHITELIST
