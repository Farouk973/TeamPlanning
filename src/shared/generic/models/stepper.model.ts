import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class Stepper implements NXMGenericComponent{
  steps: Step[];
  next : action;
  back : action;
  end: action;
  valueDuration: number;
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
  endpoint :string

}
