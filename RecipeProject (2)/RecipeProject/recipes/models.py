from django.db import models

from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    author = models.TextField(max_length=100)
    category = models.CharField(max_length=100)
    ratings = models.IntegerField()
    description = models.CharField(max_length=500)
    #created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
