export interface Stepper {
  steps: Step[];
}
interface Step {
  title: string;
  order: string;
  content: string;
  action :
    [
      {
        label: string,
      }
    ]
}


