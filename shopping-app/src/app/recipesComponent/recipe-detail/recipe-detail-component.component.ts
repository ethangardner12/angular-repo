import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail-component.component.html',
  styleUrl: './recipe-detail-component.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor() { }

  ngOnInit() {

  }
}
