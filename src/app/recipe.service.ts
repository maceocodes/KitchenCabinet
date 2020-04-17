import { Injectable } from '@angular/core';
import { Recipe } from './recipes';
import { RECIPES } from './mock-recipes';


@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  constructor() { }
}

getRecipes(); Recipe[] {
  return RECIPES;
};
