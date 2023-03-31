export interface endpoints{
    Metadata:string;
    endpointsave:string;
    subdomainname:string;
    domainname:string;
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
    rate:number;
    count?: number;
   
}
export interface popup{
    endpoint:string;
}
