from django.http import HttpResponse
from django.template import loader

from .models import Article


# Create your views here.
def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    article_list = Article.objects.all()
    template = loader.get_template("my_app/index.html")
    context = {
        "article_list": article_list,
    }
    return HttpResponse(template.render(context, request))
