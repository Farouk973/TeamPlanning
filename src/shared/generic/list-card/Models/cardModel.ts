import { Type } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

export interface CardData {
  endpoint?: BehaviorSubject<string>;
  primaryLabel?: string;
  id?: string;
  primaryColor?: string;
  labelColor?: string;
  textbody?: string;
  minHeight?:string;
  maxHeight?:string;
  textLabel?:string;
  bodyTitle?:string;
  nbResources?:string;
  nbHours?:string;
  showEditButton?: boolean;
  showBody?: boolean;
  showFooterAction?:boolean;
  showDropdownMenu?: boolean;
  showCardActions?: boolean;
  showFooter?: boolean;
  showIconAction?:boolean;
  component?:Type<any>;
  card?:Card;
 
}
export interface Card {
  id:string;
  body?: string;
  textbody: string;


}

