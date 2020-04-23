import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs'; //HTTPClient methods return RxJS Observables
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //method to return mock Recipes
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES); //returns Observable<Recipe[]> emitting single value(array of mock recipes)
  }

  //inject MessageService into HeroService which is injected into the RecipeComponent
  constructor(private messageService: MessageService) { }
}


