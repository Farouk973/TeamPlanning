import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Actionpanel extends NXMGenericComponent {
 endpoint : string;
 formEditData : string ;
 items? : ActionPannelItem[];
 actions ? : GridAction[];
title? :string


}

export interface ActionPannelItem {
 actionTitle : string ;
 endpoint : string;
 formEditData : string ;
}

export interface GridAction {
  actionThtitle : string;
  Compoment?: any;
}



