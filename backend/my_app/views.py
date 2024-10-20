from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Article


# Create your views here.
class PostAll(APIView):
    def get(self, request):
        article = Article.objects.all()
        res_list = [
            {"id": a.id, "title": a.title, "content": a.content} for a in article
        ]
        return Response(res_list)
