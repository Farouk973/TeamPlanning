import { Type } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

export interface CardData {
  endpoint?: BehaviorSubject<string>;
  updateEndpoint?:string;
  deleteEndpoint?:string;
  primaryLabel?: string;
  primaryLabelName?:string;
  id?: string;
  primaryColor?: string;
  labelColor?: string;
  textbody?: string;
  textbodyName?:string;
  minHeight?:string;
  maxHeight?:string;
  textLabel?:string;
  bodyTitle?:string;
  bodyTitleName?:string;
  nbResources?:string;
  nbHours?:string;
  showEditButton?: boolean;
  showBody?: boolean;
  showFooterAction?:boolean;
  showDropdownMenu?: boolean;
  showCardActions?: boolean;
  showFooter?: boolean;
  showIconAction?:boolean;
  editing?:boolean;
  component?:Type<any>;
  card?:Card;
 
}
export interface Card {
  id:string;
  body?: string;
  textbody: string;


}
export interface labelPrimary {
  data:string
  name:string

}

