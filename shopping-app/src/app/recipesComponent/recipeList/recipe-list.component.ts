import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';//imports recipe to utilise array of recipes

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test description for the recipe', 'https://th.bing.com/th/id/OIP.2NBaWNO2F9V5wXwA8ftOuwHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'),
    new Recipe('Steak Recipe', 'Description for the steak recipe', 'https://th.bing.com/th/id/OIP.Y9JT709sakFUcfUuKkTMJwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7')
  ];//creating two new test Recipe objects within the recipes array that only contains Recipe objects
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  constructor(){}
}
