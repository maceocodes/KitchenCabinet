import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 2, recipeName: 'Baked Spaghetti', cuisine: 'italian' },
      { id: 3, recipeName: 'Fish Tacos', cuisine: 'mexican' },
      { id: 4, recipeName: 'Shepherds Pie', cuisine: 'casserole' },
      { id: 5, recipeName: 'buffalo wings', cuisine: 'american' },
      { id: 6, recipeName: 'chicken fried rice', cuisine: 'asian' },
      { id: 7, recipeName: 'fried catfish', cuisine: 'seafood' },
      { id: 8, recipeName: 'grilled salmon', cuisine: 'american' },
      { id: 9, recipeName: 'hashbrown casserole', cuisine: 'american' },
      { id: 10, recipeName: 'dirty rice', cuisine: 'american' },
    ];
    return {recipes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 1;
  }
}