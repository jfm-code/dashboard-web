from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('charts_api.urls')),  # include the API routes from charts_api directory
]
