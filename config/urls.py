from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views import defaults as default_views
from graphene_django.views import GraphQLView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework.permissions import AllowAny
from allauth.account.views import confirm_email as registration_confirm_email

from seedorf.games.viewsets import GameViewSet, RSVPViewset
from seedorf.sports.viewsets import SportViewSet
from seedorf.spots.viewsets import SpotViewSet
from seedorf.users.viewsets import UserViewSet, GroupViewSet
from seedorf.users.views import registration_null_view, registration_complete_view

schema_view = get_schema_view(title='SportySpots API')

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

router.register(r'games', GameViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'rsvps', RSVPViewset)
router.register(r'sports', SportViewSet)
router.register(r'spots', SpotViewSet)
router.register(r'users', UserViewSet)
# router.register(r'reactions', ReactionViewSet)
# router.register(r'locations', LocationViewSet)

urlpatterns = [
    # Django Admin, use {% url 'admin:index' %}
    url(settings.ADMIN_URL, admin.site.urls),

    # Your stuff: custom urls includes go here

    # Authentication / Registration
    # REF: https://github.com/blakey22/rest_email_signup
    url(r'^api/auth/registration/email-verification-sent/',
        registration_null_view, name='account_email_verification_sent'),
    url(r'^api/auth/registration/confirm-email/(?P<key>[-:\w]+)/$',
        registration_confirm_email, name='account_confirm_email'),
    url(r'^api/auth/registration/status/$',
        registration_complete_view, name='account_confirm_complete'),
    url(r'^api/auth/registration/',
        include('rest_auth.registration.urls', namespace='rest_auth_registration')),


    url(r'^api/auth/password-reset/confirm/'
        r'(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        registration_null_view,
        name='password_reset_confirm'),

    url(r'^api/auth/token-refresh/', refresh_jwt_token),
    url(r'^api/auth/token-verify/', verify_jwt_token),
    url(r'^api/auth/', include('rest_auth.urls', namespace='rest_auth')),

    # url(r'^api/accounts/', include('allauth.urls', namespace='allauth')),
    # url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^api/api-token-auth/', obtain_jwt_token),

    # REST API
    url(r'^api/', include(router.urls)),

    # GraphQL API
    url(r'^graphql$', GraphQLView.as_view(graphiql=True), name='graphql'),

    # Other
    url(r'^schema/$', schema_view),
    url(r'^docs/', include_docs_urls(title='SportySpots API Docs', permission_classes=(AllowAny,))),

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
