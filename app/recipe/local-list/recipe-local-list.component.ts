import { Component, OnInit } from '@angular/core';
import { Core } from "../../core";
import { DataLayer, RecipeInfo } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-local-list',
  templateUrl: './recipe-local-list.component.html',
  styleUrls: ['./recipe-local-list.component.scss']
})
export class RecipeLocalListComponent implements OnInit {

  constructor(private core: Core, private DL: DataLayer) {}
  
    public onItemTap(args) {
      this.DL.Recipe = Object.assign({}, this.DL.RecipesLocal[args.index]);
      this.LoadDetail();
    }
  
    public Add() {
      this.DL.Recipe = null;
      this.LoadDetail();
    }
  
    private LoadDetail() {
      this.DL.LoadComponent("recipe-local-detail");
    }
  
    ngOnInit() { 
      this.DL.TITLE = "Local Recipe List";
    }
  }