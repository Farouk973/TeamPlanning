import { Actionpanel } from "./ActionPanel.model";

export interface CardGridView {
    endpoint: string;
    metadata: string;
    formdata: string;
    actionPanel?: Actionpanel;
    cardtitle: string;
    carddescription: string;
    width: number;
    height: number;

    
    
  }
