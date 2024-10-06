from django.urls import path

from . import views
from .views import PostAll

urlpatterns = [
    path("index/", PostAll.as_view(), name="post-all"),
]
