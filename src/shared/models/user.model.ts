import {Picture} from "./picture.model";

export class User {
  id!:string
  avatar!: Picture;
  firstName: string;
  lastName: string;
  email: string;
}
