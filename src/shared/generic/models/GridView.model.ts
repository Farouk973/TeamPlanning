import { Actionpanel } from "./ActionPanel.model";
import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface GridView extends NXMGenericComponent {
    endpoint: string;
    metadata: string;
    formdata: string;
    actionPanel?: Actionpanel;
    allowedSortColumns: string[];
    actions? : GridAction[]
    pagination? : boolean
  }

  export interface GridAction {
    actionThtitle : string;
    actionButtonTitle : string ;
    Compoment?: any;
   }