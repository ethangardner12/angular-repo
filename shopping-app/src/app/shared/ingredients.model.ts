export class Ingredient {
    constructor(public name: string, public amount: number) {}
}
//creates an object of Ingredient when given correct params
//different, more efficient way of doing it compared to recipe model
//in the shared folder as it is not necessarily going to be just used in the shopping list section of the app