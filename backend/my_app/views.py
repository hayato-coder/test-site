from django.shortcuts import render

from .models import Article


# Create your views here.
def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    article_list = Article.objects.all()
    context = {
        "article_list": article_list,
    }
    return render(request, "my_app/index.html", context)
