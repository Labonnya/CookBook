import { Injectable } from '@angular/core';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  updateRecipe: Recipe = new Recipe();

  recipes: Recipe[] = [
    {
      name: 'Chicken Fry',
      ingredients: 'chicken, oil, chili, salt',
      details: 'Put oil and fry the chicken.',
     
    },
    {
      name: 'Spaghetti Bolognese',
      ingredients: 'spaghetti, ground beef, onion, garlic, tomato sauce',
      details: 'Cook spaghetti, brown beef, and make sauce.',
     
    },

    { "name": "Spaghetti Bolognese",
     "ingredients": "spaghetti, ground beef, tomato sauce, onion, garlic, olive oil, salt, black pepper", 
     "details": "Cook spaghetti and combine with the bolognese sauce made with ground beef, tomato sauce, onion, and garlic.",  },
     
    { "name": "Thai Red Curry",
     "ingredients": "chicken breast, red curry paste, coconut milk, green beans, bamboo shoots, bell pepper, fish sauce, brown sugar", "details": "Cook chicken breast and vegetables in a red curry sauce made with coconut milk, red curry paste, fish sauce, and brown sugar. Serve over rice.",},  
     
     { "name": "Margherita Pizza", 
     "ingredients": "pizza dough, tomato sauce, mozzarella cheese, basil leaves, olive oil",
      "details": "Top pizza dough with tomato sauce, mozzarella cheese, and basil leaves. Bake until cheese is melted and crust is crispy.", },];

      getRecipe(): Recipe[]{
        return this.recipes; 
      }

      addRecipe(Recipe: any){
        this.recipes.push(Recipe);
      }

    setNewRecipe(recipe: Recipe){
      this.updateRecipe=recipe;
    }

    getNewRecipe(): Recipe{
      return this.updateRecipe;
    }

    deleteRecipe(deleteRecipe: Recipe): Recipe[] {
      this.recipes = this.recipes.filter((recipe) => deleteRecipe.name != recipe.name);
      return this.recipes;
    }
  
}
