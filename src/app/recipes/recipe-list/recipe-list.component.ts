import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Mac and cheese",
      "Creamiest mac and cheese",
      "https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg"
    ),
    new Recipe(
      "Mac and cheese",
      "Creamiest mac and cheese",
      "https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg"
    ),
    new Recipe(
      "Mac and cheese",
      "Creamiest mac and cheese",
      "https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
