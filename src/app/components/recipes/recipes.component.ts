import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes';
import { RECIPES } from '../../mock-recipes';

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

  recipes = RECIPES;

  selectedRecipe: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


