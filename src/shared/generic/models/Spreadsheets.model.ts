import {NXMGenericComponent} from "./NXMGenericComponent.model";


export class Spreadsheets implements NXMGenericComponent{

  columnHeaderEndpoint: string;
  rowHeaderEndpoint: string;
  mappingNameColumnHeader: string;
  mappingNameRowHeader: string;
  nameCaseIntersection: string;
  postEndpoint: string
  inputType:string;

}
