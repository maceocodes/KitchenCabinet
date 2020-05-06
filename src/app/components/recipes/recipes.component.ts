import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes()
  }
 
  //retrieve recipes from service
  getRecipes(): void {
    this.recipeService.getRecipes()
     .subscribe(recipes => this.recipes = recipes);
  }

  add(recipeName: string): void {
    recipeName = recipeName.trim();
    if (!recipeName) { return; }
    this.recipeService.addRecipe({ recipeName } as Recipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
      });
  }
}



 
