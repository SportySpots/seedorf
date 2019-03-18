from allauth.account.views import confirm_email as registration_confirm_email
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from graphene_django.views import GraphQLView
from rest_framework.documentation import include_docs_urls
from rest_framework.permissions import AllowAny
from rest_framework.schemas import get_schema_view as drf_get_schema_view
from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token
from rest_framework_nested import routers
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls

from seedorf.core.views import apple_app_site_association
from seedorf.games.views import GameDetailView, GameListView
from seedorf.games.viewsets import GameRsvpStatusNestedViewset, GameViewSet
from seedorf.graphql.schema import schema
from seedorf.sports.viewsets import GameSportNestedViewSet, SportViewSet, SpotSportsNestedViewSet
from seedorf.spots.viewsets import (
    GameSpotNestedViewSet,
    SpotAddressNestedViewSet,
    SpotSportAmenitesNestedViewSet,
    SpotSportImagesNestedViewSet,
    SpotSportOpeningTimesNestedViewSet,
    SpotViewSet,
)
from seedorf.users.views import (
    confirm_magic_link_view,
    create_magic_link_view,
    registration_null_view,
    registration_status_view,
)
from seedorf.users.viewsets import (
    GameUserNestedViewSet,
    UserProfileNestedViewSet,
    UserProfileSportNestedViewSet,
    UserProfileSpotNestedViewSet,
    UserViewSet,
)

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

# Sport urls
# ------------------------------------------------------------------------------
# /api/sports/
router.register(r"sports", SportViewSet)

# User urls
# ------------------------------------------------------------------------------
# /api/users/
router.register(r"users", UserViewSet)
users_router = routers.NestedDefaultRouter(router, r"users", lookup="user")
# /api/users/<uuid>/profile
users_router.register(r"profile", UserProfileNestedViewSet, base_name="user-profile")
users_profile_router = routers.NestedDefaultRouter(users_router, r"profile", lookup="profile")
# /api/users/<uuid>/profile/<uuid>/sports/
users_profile_router.register(r"sports", UserProfileSportNestedViewSet, base_name="user-profile-sports")
# /api/users/<uuid>/profile/<uuid>/spots/
users_profile_router.register(r"spots", UserProfileSpotNestedViewSet, base_name="user-profile-spots")

# Spots urls
# ------------------------------------------------------------------------------
# /api/spots/
router.register(r"spots", SpotViewSet)
spots_router = routers.NestedDefaultRouter(router, r"spots", lookup="spot")
# /api/spots/<uuid>/address
spots_router.register(r"address", SpotAddressNestedViewSet, base_name="spot-address")
# /api/spots/<uuid>/sports
spots_router.register(r"sports", SpotSportsNestedViewSet, base_name="spot-sports")

# /api/spots/<uuid>/sports/<uuid>/images
spot_sports_images_router = routers.NestedDefaultRouter(spots_router, r"sports", lookup="sport")
spot_sports_images_router.register(r"images", SpotSportImagesNestedViewSet, base_name="spot-sport-images")

# /api/spots/<uuid>sports/<uuid>/amenities
spot_sports_amenities_router = routers.NestedDefaultRouter(spots_router, r"sports", lookup="sport")
spot_sports_amenities_router.register(r"amenities", SpotSportAmenitesNestedViewSet, base_name="spot-sport-amenities")

# /api/spots/<uuid>/sports/<uuid>/opening-times
spot_sports_opening_times_router = routers.NestedDefaultRouter(spots_router, r"sports", lookup="sport")
spot_sports_opening_times_router.register(
    r"opening-times", SpotSportOpeningTimesNestedViewSet, base_name="spot-sport-opening-times"
)

# Game urls
# ------------------------------------------------------------------------------
# /api/games/
router.register(r"games", GameViewSet)
games_router = routers.NestedDefaultRouter(router, r"games", lookup="game")
# /api/games/<uuid>/organizer
games_router.register(r"organizer", GameUserNestedViewSet, base_name="game-organizer")
# /api/games/<uuid>/rsvps
games_router.register(r"rsvps", GameRsvpStatusNestedViewset, base_name="game-rsvps")
# /api/games/<uuid>/sport
games_router.register(r"sport", GameSportNestedViewSet, base_name="game-sport")
# /api/games/<uuid>/spot
games_router.register(r"spot", GameSpotNestedViewSet, base_name="game-spot")


urlpatterns = [
    # Django Admin, use {% url 'admin:index' %}
    # ------------------------------------------------------------------------------
    path(settings.ADMIN_URL, admin.site.urls),
    # SportySpots
    # ------------------------------------------------------------------------------
    path("dashboard/", TemplateView.as_view(template_name="pages/dashboard_home.html")),
    path("register/", TemplateView.as_view(template_name="pages/login_register.html")),
    path("login/", TemplateView.as_view(template_name="pages/login_register.html")),
    path("password-reset/", TemplateView.as_view(template_name="pages/password_reset.html")),
    path("confirm-email/", TemplateView.as_view(template_name="pages/confirm_email.html")),
    path("games/<uuid:uuid>/", GameDetailView.as_view(), name="web-game-detail"),
    path("games/", GameListView.as_view(), name="web-game-list"),
    # Wagtail
    # ------------------------------------------------------------------------------
    re_path(r"^cms/", include(wagtailadmin_urls)),
    re_path(r"^documents/", include(wagtaildocs_urls)),
    re_path(r"^pages/", include(wagtail_urls)),
    # Anymail
    # ------------------------------------------------------------------------------
    path("anymail/", include("anymail.urls")),
    # Authentication / Registration
    # ------------------------------------------------------------------------------
    # REF: https://github.com/blakey22/rest_email_signup
    path(
        "api/auth/registration/email-verification-sent/", registration_null_view, name="account_email_verification_sent"
    ),
    re_path(
        r"^api/auth/registration/confirm-email/(?P<key>[-:\w]+)/$",
        registration_confirm_email,
        name="account_confirm_email",
    ),
    path("api/auth/registration/status/", registration_status_view, name="account_confirm_status"),
    path("api/auth/create-magic-link/", csrf_exempt(create_magic_link_view), name="account_create_magic_link"),
    path("api/auth/confirm-magic-link/", csrf_exempt(confirm_magic_link_view), name="account_confirm_magic_link"),
    re_path(
        r"^api/auth/password-reset/confirm/"
        r"(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$",
        registration_null_view,
        name="password_reset_confirm",
    ),
    path("api/auth/token-refresh/", refresh_jwt_token, name="token-refesh"),
    path("api/auth/token-verify/", verify_jwt_token, name="token-verify"),
    path("api/auth/", include("rest_auth.urls")),
    path(
        "api/auth/registration/",
        include(("rest_auth.registration.urls", "rest_auth.registration"), namespace="rest-auth-registration"),
    ),
    path("api/accounts/", include("allauth.urls")),
    # REST API
    # ------------------------------------------------------------------------------
    path("api/", include(router.urls), name="api-core"),
    path("api/", include(users_router.urls), name="api-users"),
    path("api/", include(spots_router.urls), name="api-spots"),
    path("api/", include(games_router.urls), name="api-games"),
    path("api/", include(users_profile_router.urls), name="api-user-profile"),
    path("api/", include(spot_sports_images_router.urls), name="api-spot-sports-images"),
    path("api/", include(spot_sports_amenities_router.urls), name="api-spot-sports-amenities"),
    path("api/", include(spot_sports_opening_times_router.urls), name="api-spot-sports-opening-times"),
    # GraphQL API
    # ------------------------------------------------------------------------------
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema)), name="graphql"),
    # TODO: Choose one of the api documentation tools below
    # DRF schema
    # ------------------------------------------------------------------------------
    path("schema/", drf_schema_view),
    path("docs/", include_docs_urls(title="SportySpots API Docs", permission_classes=(AllowAny,))),
    # Swagger
    # ------------------------------------------------------------------------------
    re_path(r"^swagger(?P<format>\.json|\.yaml)$", schema_view.without_ui(cache_timeout=None), name="schema-json"),
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=None), name="schema-swagger-ui"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=None), name="schema-redoc"),
    # Apple ios deeplinking - app site association
    # ------------------------------------------------------------------------------
    path("apple-app-site-association/?", apple_app_site_association, name="apple-app-site-association"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path("400/", TemplateView.as_view(template_name="400.html")),
        path("403/", TemplateView.as_view(template_name="403_csrf.html")),
        path("404/", TemplateView.as_view(template_name="404.html")),
        path("500/", TemplateView.as_view(template_name="500.html")),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [url(r"^__debug__/", include(debug_toolbar.urls))] + urlpatterns

# If non of the above matches, pass it on to wagtail
urlpatterns += [re_path(r"", include(wagtail_urls))]
