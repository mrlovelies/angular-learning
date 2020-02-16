import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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
    ),
    new Recipe(
      "Mac and cheese",
      "Creamiest mac and cheese",
      "https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
