import { Component, OnInit } from '@angular/core';
import { Core } from "../../core";
import { DataLayer, RecipeInfo } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private core: Core, private DL: DataLayer) {}

  public onItemTap(args) {
    this.DL.Recipe = Object.assign({}, this.DL.Recipes[args.index]);
    this.core.LoadComponent("recipe-detail");
  }

  public LoadComponent(selector: string) {
    this.core.LoadComponent(selector);
  }

  public Add() {
    this.DL.Recipe = null;
    this.LoadComponent("recipe-detail");
  }

  ngOnInit() { 
    this.DL.TITLE = "Recipe List";
  }
}
