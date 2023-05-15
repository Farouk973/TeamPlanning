import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class Form implements NXMGenericComponent {
  metaData : string;
  endpoint : string ;
  Object? : any;
  title?:string;
  Options?: Map<string,string>;
}
