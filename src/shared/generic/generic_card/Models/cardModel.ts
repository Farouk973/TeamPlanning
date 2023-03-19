import { Type } from "@angular/core";

export interface CardData {
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
  cardOptions?: CardOptions;
  component?:Type<any>;
  card?:Card;

}
export interface Card {
  id:string;
  body?: string;
  textbody: string;


}

export interface ButtonOptions {
    title: string;
    bootstrapClass: string;
  }
  
  export interface CardOptions {
    title: string;
    subtitle: string;
    color: string;
    buttons?: ButtonOptions[];
  }