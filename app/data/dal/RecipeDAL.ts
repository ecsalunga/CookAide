import { RecipeInfo, DataLayer } from "../";
import firebase = require("nativescript-plugin-firebase");

export class RecipeDAL {
    PATH: string = "/recipe/items";

    constructor(private DL: DataLayer) { }

    public Load() {
        this.LoadOnline();
        this.LoadLocal();
    }
    
    public LoadOnline() {
        this.DL.Recipes = new Array<RecipeInfo>();
        firebase.query(fb => {
            let item:RecipeInfo = fb.value;
            item.id = fb.key;
            this.DL.ngZone.run(() => {
                let exists = this.DL.Recipes.find(i => i.id == item.id);
                if(exists == null)
                    this.DL.Recipes.push(item)
                else {
                    this.DL.Recipes = this.DL.Recipes.filter(i => i.id != exists.id)
                    this.DL.Recipes.push(item);
                }

                this.DL.Recipes.sort((item1, item2) => item1.Name.localeCompare(item2.Name));
            });
        },
        this.PATH,
            { orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'Name'
            }
        });
    }

    public LoadLocal() {
        this.DL.RecipesLocal = new Array<RecipeInfo>();
        let recipes = this.DL.DATA_FS_DOCUMENT.getFile("recipes.json");
        
        recipes.readText().then(content => {
          if(content != null && content.length > 0)
            this.DL.RecipesLocal = <Array<RecipeInfo>>JSON.parse(content);
        });
    }

    public Save(item: RecipeInfo) {
        if(!item.id)
            firebase.push(this.PATH, item);
        else
            firebase.update(this.PATH + "/" + item.id, item);
    }

    public SaveLocal(item: RecipeInfo) {
        let exists = this.DL.RecipesLocal.find(i => i.id == item.id);
        if(exists == null)
            this.DL.RecipesLocal.push(item)
        else {
            this.DL.RecipesLocal = this.DL.RecipesLocal.filter(i => i.id != exists.id)
            this.DL.RecipesLocal.push(item);
        }

        this.DL.RecipesLocal.sort((item1, item2) => item1.Name.localeCompare(item2.Name));
        let recipes = this.DL.DATA_FS_DOCUMENT.getFile("recipes.json");
        recipes.writeText(JSON.stringify(this.DL.RecipesLocal));
    }
}