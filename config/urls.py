from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views import defaults as default_views
from django.views.generic import TemplateView
from rest_framework import routers
from graphene_django.views import GraphQLView
from rest_framework.schemas import get_schema_view

from seedorf.users.viewsets import UserViewSet, GroupViewSet
from seedorf.games.viewsets import GameViewSet, RSVPViewset

schema_view = get_schema_view(title='SportySpots API')

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

# router.register(r'sports', SportViewSet)
# router.register(r'spots', SpotViewSet)
# router.register(r'reactions', ReactionViewSet)
# router.register(r'locations', LocationViewSet)
router.register(r'games', GameViewSet)
router.register(r'rsvps', RSVPViewset)

urlpatterns = [

    url(r'^$', TemplateView.as_view(template_name='pages/home.html'), name='home'),

    # Django Admin, use {% url 'admin:index' %}
    url(settings.ADMIN_URL, admin.site.urls),

    # User management
    # url(r'^users/', include('seedorf.users.urls', namespace='users')),
    url(r'^accounts/', include('allauth.urls')),

    # Your stuff: custom urls includes go here
    url(r'^api/schema/$', schema_view),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^graphql$', GraphQLView.as_view(graphiql=True), name='graphql'),

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
