import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

import { Core } from "./core";
import { DataLayer, DataAccess } from "./data";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
    @ViewChild('viewChild', {read: ViewContainerRef})
    viewChild: ViewContainerRef;

    constructor(public core: Core, public DA: DataAccess, public DL: DataLayer) { }

    public Online() {
        this.DL.LoadComponent("recipe-list");
    }

    public LoadTest() {
        this.DL.LoadComponent("test");
    }

    ngOnInit() {
        this.DA.Load();
        this.core.viewChild = this.viewChild;
        this.DL.TITLE = "Home";
    }
}