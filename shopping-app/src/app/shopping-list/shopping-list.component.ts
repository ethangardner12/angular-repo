import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient ('Apples',5),
    new Ingredient ('Bananas',3)
  ];
  //creating two new test Ingredient objects within the ingredients array that only contains Ingredient objects

  constructor() { }
  ngOnInit() {

  }
}
