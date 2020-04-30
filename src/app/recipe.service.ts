import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs'; //HTTPClient methods return RxJS Observables
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  //inject MessageService into HeroService which is injected into the RecipeComponent
  constructor(private messageService: MessageService) { }

  //method to return mock Recipes
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES); //returns Observable<Recipe[]> emitting single value(array of mock recipes)
  }



  getRecipe(id: number): Observable<Recipe> {
    this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    return of(RECIPES.find(recipe => recipe.id ===id));
  } 
}




