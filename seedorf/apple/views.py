from django.http import HttpResponse

file = """{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "FD94WWSEG4.com.sportyspots.ios",
                "paths": [ "/games/*" ]
            }
        ]
    }
}"""


def apple_app_site_association(request):
    response = HttpResponse(file, content_type='application/json')
    response['Content-Disposition'] = 'attachment; filename="apple-app-site-association"'
    return response
