from django.shortcuts import render , HttpResponse

def demo(request):
    return HttpResponse("demo recommendations")