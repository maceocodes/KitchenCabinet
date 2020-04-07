import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = {
    id: 1,
    name: 'hotwings'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
