from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('chatbot/', include('chatbot.urls')),
    path('signup/', include('signup.urls')),
    path('login/', include('login.urls')),
    path('board/', include('board.urls')),
    path('rain/', include('rain.urls')),
    path('waterlevel/', include('waterlevel.urls')),
    path('terms/', include('terms.urls')),
    path('detect/', include('detect.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
