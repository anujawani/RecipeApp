from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Recipe
import json

def index(request):
    return render(request, 'index.html')

class RecipeListView(View):
    def get(self, request):
        recipes = list(Recipe.objects.values())
        return JsonResponse(recipes, safe=False)

    @csrf_exempt
    def post(self, request):
        try:
            data = json.loads(request.body)
            recipe = Recipe(
                title=data['title'],
                author=data['author'],
                category=data['category'],
                ratings=data['ratings'],
                ingredients=data['ingredients'],
                instructions=data['instructions']
            )
            recipe.save()
            return JsonResponse({'inserted': True, 'id': recipe.id}, status=201)
        except KeyError as e:
            return JsonResponse({'error': f'Missing key: {str(e)}'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

class RecipeDetailView(View):
    def get(self, request, pk):
        try:
            recipe = Recipe.objects.get(pk=pk)
            return JsonResponse({
                'id': recipe.id,
                'title': recipe.title,
                'author': recipe.author,
                'ratings': recipe.ratings,
                'category': recipe.category,
                'ingredients': recipe.ingredients,
                'instructions':recipe.instructions
            })
        except Recipe.DoesNotExist:
            return JsonResponse({'error': 'Recipe not found'}, status=404)
