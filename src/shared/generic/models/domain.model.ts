export interface endpoints{
    Metadata:string;
    endpointsave:string;
}
export interface Apiresponse{
    bigdomain:bigdomain[];
}
export interface bigdomain{
    name:string;
    subdomain?:subdomain[];
}
export interface subdomain{
    name:string;
    domain:domain[];
}
export interface domain{
    name:string;
    rate:string;
    popup:popup;
}
export interface popup{
    endpoint:string;
}
