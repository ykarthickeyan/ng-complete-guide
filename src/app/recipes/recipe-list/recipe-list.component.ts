import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test recipe', 'Test recipe for description', 'https://dukanindia.in/home/wp-content/uploads/2021/12/71MXQSUfHaS._SL1280_.jpg')
  ];

  ngOnInit(): void {
   
  }

}
