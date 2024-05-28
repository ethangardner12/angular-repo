export class Recipe {
  public name: string;//name of recipe
  public description: string;//description of recipe
  public imagePath: string; //url for image from web

  constructor(name: string, desc: string, imgPath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }//creates an object of Recipe when given correct params
}