import sys

import os
from allauth.account.views import confirm_email as registration_confirm_email
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views import defaults as default_views
from django.views.decorators.csrf import csrf_exempt
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from graphene_django.views import GraphQLView
from rest_framework.documentation import include_docs_urls
from rest_framework.permissions import AllowAny
from rest_framework.schemas import get_schema_view as drf_get_schema_view
from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token
from rest_framework_nested import routers

from seedorf.apple.views import apple_app_site_association
from seedorf.games.viewsets import GameViewSet, GameRsvpStatusNestedViewset
from seedorf.graphql.schema import schema
from seedorf.sports.viewsets import SportViewSet, SpotSportsNestedViewSet, GameSportNestedViewSet
from seedorf.spots.viewsets import (
    SpotViewSet,
    GameSpotNestedViewSet,
    SpotAddressNestedViewSet,
    SpotSportImagesNestedViewSet,
    SpotSportAmenitesNestedViewSet,
    SpotSportOpeningTimesNestedViewSet,
)
from seedorf.users.views import registration_null_view, registration_complete_view
from seedorf.users.viewsets import UserViewSet, GameUserNestedViewSet, UserProfileNestedViewSet

drf_schema_view = drf_get_schema_view(title="SportySpots API")

schema_view = get_schema_view(
    openapi.Info(
        title="SportySpots API",
        default_version="v1",
        description="SportySpots API description",
        terms_of_service="https://www.sportyspots.com/policies/terms/",
        contact=openapi.Contact(email="admin@sportyspots.com"),
        license=openapi.License(name="MIT License"),
    ),
    validators=["flex", "ssv"],
    public=True,
    permission_classes=(AllowAny,),
)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

# Top level urls
router.register(r"users", UserViewSet)  # /api/users/
router.register(r"spots", SpotViewSet)  # /api/spots/
router.register(r"games", GameViewSet)  # /api/games/
router.register(r"sports", SportViewSet)  # /api/sports/

# User urls
users_router = routers.NestedDefaultRouter(router, r"users", lookup="user")
users_router.register(r"profile", UserProfileNestedViewSet, base_name="user-profile")  # /api/users/<uuid>/profile

# users_profile_router = routers.NestedDefaultRouter(users_router, r'profile', lookup='profile')
# users_profile_router.register(r'sports', UserProfileSportNestedViewset, base_name='user-profile-sports')
# users_profile_router.register(r'sports', UserProfileSpotNestedViewset, base_name='user-profile-spots')

# Spots urls
spots_router = routers.NestedDefaultRouter(router, r"spots", lookup="spot")
spots_router.register(r"address", SpotAddressNestedViewSet, base_name="spot-address")  # /api/spots/<uuid>/address
spots_router.register(r"sports", SpotSportsNestedViewSet, base_name="spot-sports")  # /api/spots/<uuid>/sports

spot_sports_images_router = routers.NestedDefaultRouter(spots_router, r"sports", lookup="sport")
spot_sports_images_router.register(
    r"images", SpotSportImagesNestedViewSet, base_name="spot-sport-images"
)  # /api/sports/<uuid>/images

spot_sports_amenities_router = routers.NestedDefaultRouter(spots_router, r"sports", lookup="sport")
spot_sports_amenities_router.register(
    r"amenities", SpotSportAmenitesNestedViewSet, base_name="spot-sport-amenities"
)  # /api/sports/<uuid>/amenities

spot_sports_opening_times_router = routers.NestedDefaultRouter(spots_router, r"sports", lookup="sport")
spot_sports_opening_times_router.register(
    r"opening-times", SpotSportOpeningTimesNestedViewSet, base_name="spot-sport-opening-times"
)  # /api/sports/<uuid>/opening-times

# Game urls
games_router = routers.NestedDefaultRouter(router, r"games", lookup="game")
games_router.register(r"organizer", GameUserNestedViewSet, base_name="game-organizer")  # /api/games/<uuid>/organizer
games_router.register(r"rsvps", GameRsvpStatusNestedViewset, base_name="game-rsvps")  # /api/games/<uuid>/rsvps
games_router.register(r"sport", GameSportNestedViewSet, base_name="game-sport")  # /api/games/<uuid>/sport
games_router.register(r"spot", GameSpotNestedViewSet, base_name="game-spot")  # /api/games/<uuid>/spot


urlpatterns = [
    # Django Admin, use {% url 'admin:index' %}
    url(settings.ADMIN_URL, admin.site.urls),
    url(r"^anymail/", include("anymail.urls")),
    # Your stuff: custom urls includes go here
    # Authentication / Registration
    # REF: https://github.com/blakey22/rest_email_signup
    url(
        r"^api/auth/registration/email-verification-sent/",
        registration_null_view,
        name="account_email_verification_sent",
    ),
    url(
        r"^api/auth/registration/confirm-email/(?P<key>[-:\w]+)/$",
        registration_confirm_email,
        name="account_confirm_email",
    ),
    url(r"^api/auth/registration/status/$", registration_complete_view, name="account_confirm_complete"),
    url(
        r"^api/auth/password-reset/confirm/"
        r"(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$",
        registration_null_view,
        name="password_reset_confirm",
    ),
    url(r"^api/auth/token-refresh/", refresh_jwt_token, name="token-refesh"),
    url(r"^api/auth/token-verify/", verify_jwt_token, name="token-verify"),
    url(r"^api/auth/", include("rest_auth.urls", namespace="rest-auth")),
    url(r"^api/auth/registration/", include("rest_auth.registration.urls", namespace="rest-auth-registration")),
    url(r"^api/accounts/", include("allauth.urls", namespace="allauth")),
    # url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^api/api-token-auth/', obtain_jwt_token),
    # REST API
    url(r"^api/", include(router.urls), name="api-core"),
    url(r"^api/", include(users_router.urls), name="api-users"),
    url(r"^api/", include(spots_router.urls), name="api-spots"),
    url(r"^api/", include(games_router.urls), name="api-games"),
    url(r"^api/", include(spot_sports_images_router.urls), name="api-spot-sports-images"),
    url(r"^api/", include(spot_sports_amenities_router.urls), name="api-spot-sports-amenities"),
    url(r"^api/", include(spot_sports_opening_times_router.urls), name="api-spot-sports-opening-times"),
    # GraphQL API
    url(r"^graphql$", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema)), name="graphql"),
    # TODO: Choose one of the api documentation tools below
    # DRF schema
    url(r"^schema/$", drf_schema_view),
    url(r"^docs/", include_docs_urls(title="SportySpots API Docs", permission_classes=(AllowAny,))),
    # Swagger
    url(r"^swagger(?P<format>\.json|\.yaml)$", schema_view.without_ui(cache_timeout=None), name="schema-json"),
    url(r"^swagger/$", schema_view.with_ui("swagger", cache_timeout=None), name="schema-swagger-ui"),
    url(r"^redoc/$", schema_view.with_ui("redoc", cache_timeout=None), name="schema-redoc"),
    # Apple ios deeplinking - app site association
    url(r"^apple-app-site-association/?$", apple_app_site_association, name="apple-app-site-association"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

print(os.environ.items())

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(r"^400/$", default_views.bad_request, kwargs={"exception": Exception("Bad Request!")}),
        url(r"^403/$", default_views.permission_denied, kwargs={"exception": Exception("Permission Denied")}),
        url(r"^404/$", default_views.page_not_found, kwargs={"exception": Exception("Page not Found")}),
        url(r"^500/$", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [url(r"^__debug__/", include(debug_toolbar.urls))] + urlpatterns
