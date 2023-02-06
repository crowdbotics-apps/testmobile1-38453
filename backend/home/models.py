from django.conf import settings
from django.db import models
class Test(models.Model):
    'Generated Model'
    name = models.TextField()
    age = models.IntegerField(null=True,blank=True,)
