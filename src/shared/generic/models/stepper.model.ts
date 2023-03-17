import {InputsType} from "ng-dynamic-component";
import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class Stepper implements NXMGenericComponent{
  steps: Step[];
}
export class Step {
  title: string;
  order: string;
  contentType: string;
  content: NXMGenericComponent;
  action :
    [
      {
        label: string,
      }
    ]
}

