export class Film {

  // interface ou une class ==> un type de données
  id!:number; // ! obligatoire
  title!: string;
  year!: string;
  desc!:string;
  url!: string;
  avatar?:string; // ? optionnel

}
