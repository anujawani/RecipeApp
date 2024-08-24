from django.db import models

from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    category = models.CharField(max_length=100)
    ratings = models.IntegerField()
    author = models.CharField(max_length=100)
    #created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
