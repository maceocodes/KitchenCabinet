import { Injectable } from '@angular/core';
import { Recipe } from '../../recipes';
import { RECIPES } from '../../mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //return mock heroes
  getRecipes(): Recipe[] { 
    return RECIPES;
  }
  constructor() { }
}
