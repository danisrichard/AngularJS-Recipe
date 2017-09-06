export class Recipe{
  public name;
  public description;
  public imagePath;

  constructor(name,desciption,image){
      this.name = name;
      this.description = desciption;
      this.imagePath = image;
  }
}

//objektumot hoztunk létre , olyan mint JAVA-ban , konstruktorban 
//állítjuk be z értékeket, és .ts (tyepscript) a típus és nem .java