export interface Config {
    endpoint?: string;
    metadata?: string;
    formdata?:string;
    formeditdata?:string;
    formendpoint?:string;
    pageSize: number;
    allowedSortColumns: string[];
    title: string;
    icon : string;
  }