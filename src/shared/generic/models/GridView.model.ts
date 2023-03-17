import { Actionpanel } from "./ActionPanel.model";

export interface GridView {
    endpoint: string;
    metadata: string;
    formdata: string;
    actionPanel?: Actionpanel;
    allowedSortColumns: string[];
  }
