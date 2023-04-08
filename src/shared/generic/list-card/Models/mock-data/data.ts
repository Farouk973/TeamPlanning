import { BehaviorSubject } from "rxjs";
import { CardData } from "../cardModel";


export const mockCardData: CardData={
    endpoint: new BehaviorSubject<string>('api/Service'),
    primaryColor: '#00b2d91a',
    labelColor: '#00B2D9',
    minHeight:"105px",
    maxHeight:"105px",
    showEditButton: false,
    nbHours:0,
    nbResources:0,
    
    showBody: false,
    showFooterAction: false,
    showDropdownMenu: false,
    showCardActions: false,
    showFooter: false,
    showIconAction: false,
    editing:false
    
  };
  
