import {NXMGenericComponent} from "./NXMGenericComponent.model";
import {StepperOrientation} from "@angular/cdk/stepper";

export class Stepper implements NXMGenericComponent{
  steps: Step[];
  next : action;
  back : action;
  validate: action;
  delete: action;
  valueDuration: number;
  orientation: StepperOrientation;
}
class Step {
  title: string;
  order: number;
  contentType: string;
  content: NXMGenericComponent;
  contentforUpdate: NXMGenericComponent;
  input:boolean;
}

class action {
  label: string;
  endpoint :string;
  style : string;

}
