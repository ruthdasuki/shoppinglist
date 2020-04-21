import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a text', 'https://unsplash.com/photos/6MT4_Ut8a3Y'),
    new Recipe('A test recipe', 'This is a text', 'https://unsplash.com/photos/6MT4_Ut8a3Y')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
