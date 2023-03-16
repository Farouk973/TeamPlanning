export interface Stepper {
  steps: Step[];
}
interface Step {
  title: string;
  order: string;
  content: any;
  action :
    [
      {
        label: string,
      }
    ]
}


