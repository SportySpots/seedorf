from seedorf.users import schema


def RequestExposerMiddleware(get_response):
    def middleware(request):
        schema.exposed_request = request
        response = get_response(request)
        return response

    return middleware
