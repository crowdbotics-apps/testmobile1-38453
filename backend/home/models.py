from django.conf import settings
from django.db import models
class Test(models.Model):
    'Generated Model'
    name = models.TextField()
    age = models.IntegerField(null=True,blank=True,)
class Customer(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    email = models.EmailField(max_length=254,)
