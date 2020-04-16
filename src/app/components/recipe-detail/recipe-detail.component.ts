import { Component, OnInit, Input } from '@angular/core'; //note Input for @input on line 10
import { Recipe } from '../../recipes';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe; //receives and displays recipe object via the recipe property. Makes recipes property abailable for binding by external components

  constructor() { }

  ngOnInit(): void {
  }

}
