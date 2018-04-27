from allauth.account.views import confirm_email as registration_confirm_email
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views import defaults as default_views
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from graphene_django.views import GraphQLView
from rest_framework.documentation import include_docs_urls
from rest_framework.permissions import AllowAny
from rest_framework.schemas import get_schema_view as drf_get_schema_view
from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token
from rest_framework_nested import routers

from seedorf.games.viewsets import GameViewSet, RSVPViewset
from seedorf.graphql.schema import schema
from seedorf.sports.viewsets import SportViewSet
from seedorf.spots.viewsets import SpotViewSet, SpotAmenityViewSet, SpotImageViewSet, SpotOpeningTimeViewSet, \
    SpotSportViewSet, SpotAddressViewSet
from seedorf.users.views import registration_null_view, registration_complete_view
from seedorf.users.viewsets import UserViewSet, GroupViewSet

drf_schema_view = drf_get_schema_view(title='SportySpots API')

schema_view = get_schema_view(
    openapi.Info(
        title="SportySpots API",
        default_version='v1',
        description="SportySpots API description",
        terms_of_service="https://www.sportyspots.com/policies/terms/",
        contact=openapi.Contact(email="admin@sportyspots.com"),
        license=openapi.License(name="MIT License"),
    ),
    validators=['flex', 'ssv'],
    public=True,
    permission_classes=(AllowAny,),
)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

router.register(r'games', GameViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'rsvps', RSVPViewset)
router.register(r'sports', SportViewSet)
router.register(r'spots', SpotViewSet)
router.register(r'users', UserViewSet)

spots_router = routers.NestedDefaultRouter(router, r'spots', lookup='spot')
spots_router.register(r'address', SpotAddressViewSet, base_name='spot-address')
spots_router.register(r'amenities', SpotAmenityViewSet, base_name='spot-amenities')
spots_router.register(r'images', SpotImageViewSet, base_name='spot-images')
spots_router.register(r'opening-times', SpotOpeningTimeViewSet, base_name='spot-opening-times')
spots_router.register(r'sports', SpotSportViewSet, base_name='spot-sports')

games_router = routers.NestedDefaultRouter(router, r'games', lookup='game')
games_router.register(r'organizer', UserViewSet, base_name='game-organizer')
games_router.register(r'rsvps', RSVPViewset, base_name='game-rsvps')
games_router.register(r'sport', SportViewSet, base_name='game-sport')
games_router.register(r'spot', SpotViewSet, base_name='game-spot')


urlpatterns = [
                  # Django Admin, use {% url 'admin:index' %}
                  url(settings.ADMIN_URL, admin.site.urls),

                  # Your stuff: custom urls includes go here

                  # Authentication / Registration
                  # REF: https://github.com/blakey22/rest_email_signup
                  url(r'^api/auth/registration/email-verification-sent/',
                      registration_null_view,
                      name='account_email_verification_sent'
                      ),

                  url(r'^api/auth/registration/confirm-email/(?P<key>[-:\w]+)/$',
                      registration_confirm_email,
                      name='account_confirm_email'
                      ),

                  url(r'^api/auth/registration/status/$',
                      registration_complete_view,
                      name='account_confirm_complete'
                      ),

                  url(r'^api/auth/password-reset/confirm/'
                      r'(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
                      registration_null_view,
                      name='password_reset_confirm'
                      ),

                  url(r'^api/auth/token-refresh/', refresh_jwt_token, name='token-refesh'),
                  url(r'^api/auth/token-verify/', verify_jwt_token, name='token-verify'),

                  url(r'^api/auth/', include('rest_auth.urls', namespace='rest-auth')),
                  url(r'^api/auth/registration/',
                      include('rest_auth.registration.urls', namespace='rest-auth-registration')
                      ),

                  url(r'^api/accounts/', include('allauth.urls', namespace='allauth')),
                  # url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
                  # url(r'^api/api-token-auth/', obtain_jwt_token),

                  # REST API
                  url(r'^api/', include(router.urls), name='api-core'),
                  url(r'^api/', include(spots_router.urls), name='api-spots'),
                  url(r'^api/', include(games_router.urls), name='api-games'),


                  # GraphQL API
                  url(r'^graphql$',
                      GraphQLView.as_view(graphiql=True, schema=schema),
                      name='graphql'),

                  # TODO: Choose one of the api documentation tools below
                  # DRF schema
                  url(r'^schema/$', drf_schema_view),
                  url(r'^docs/', include_docs_urls(title='SportySpots API Docs', permission_classes=(AllowAny,))),

                  # Swagger
                  url(r'^swagger(?P<format>\.json|\.yaml)$',
                      schema_view.without_ui(cache_timeout=None),
                      name='schema-json'),
                  url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=None), name='schema-swagger-ui'),
                  url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=None), name='schema-redoc'),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(r'^400/$', default_views.bad_request, kwargs={'exception': Exception('Bad Request!')}),
        url(r'^403/$', default_views.permission_denied, kwargs={'exception': Exception('Permission Denied')}),
        url(r'^404/$', default_views.page_not_found, kwargs={'exception': Exception('Page not Found')}),
        url(r'^500/$', default_views.server_error),
    ]
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [
                          url(r'^__debug__/', include(debug_toolbar.urls)),
                      ] + urlpatterns
