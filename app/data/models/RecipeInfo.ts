export class RecipeInfo {
    id: string;
    Name: string;
    Description: string;
    Ingredients: string;
    Instructions: string;
    ImageURL: string;

    constructor(imageURL: string) {
        this.ImageURL = imageURL;
    }
}