import {NXMGenericComponent} from "./NXMGenericComponent.model";
import {StepperOrientation} from "@angular/cdk/stepper";

export class Stepper implements NXMGenericComponent{
  steps: Step[];
  next : action;
  back : action;
  end: action;
  valueDuration: number;
  orientation: StepperOrientation;
}
class Step {
  title: string;
  order: string;
  contentType: string;
  content: NXMGenericComponent;
  input:boolean;
}

class action {
  label: string;
  endpoint :string;
  style : string;

}
