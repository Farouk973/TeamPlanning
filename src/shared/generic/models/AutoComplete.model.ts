import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class AutoComplete implements NXMGenericComponent{
  label: string;
  input: Input;
  optionEndpoint: string;
  saveInputInBase: boolean;
  assignInputToItem: boolean;
  sourceEndpoint:string
}
class Input {
  type : string;
  ariaLabel: string;
  placeholder:{
    search: string;
    addText: string;
  }
}
