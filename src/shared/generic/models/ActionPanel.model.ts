import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Actionpanel extends NXMGenericComponent {
 endpoint : string;
 formEditData : string ;
 items? : ActionPannelItem[];
title? :string

 
}

export interface ActionPannelItem {
 actionTitle : string ;
 endpoint : string;
 formEditData : string ;
}



