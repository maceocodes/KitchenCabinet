import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = {
    id: 1,
    recipeName: 'hotwings',
    cuisine: 'american'
  };

  recipes: Recipe[];

  getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  selectedRecipe: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

}


