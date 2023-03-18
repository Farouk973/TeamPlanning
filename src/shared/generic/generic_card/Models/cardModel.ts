import { Type } from "@angular/core";

export interface CardData {
  primaryLabel?: string;
  endpoint?: string;
  primaryColor?: string;
  textbody: string;
  showEditButton?: boolean;
  showBody?: boolean;
  showFooterAction?:boolean;
  showDropdownMenu?: boolean;
  showCardActions?: boolean;
  showFooter?: boolean;
  showIconAction?:boolean;
  cardOptions?: CardOptions;
  component?:Type<any>;
  card:Card;

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