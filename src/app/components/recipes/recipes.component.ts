import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = {
    id: 1,
    recipeName: 'hotwings',
    cuisine: 'american',
  };

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes()
  }

  //retrieve recipes from service
  getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }



}


