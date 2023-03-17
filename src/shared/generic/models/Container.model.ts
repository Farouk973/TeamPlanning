import { Containerinfo } from "./ContainerInfo.model";
import { GridView } from "./GridView.model";
import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Container extends NXMGenericComponent {
 containerInfo : Containerinfo;
 gridView : GridView;
}
