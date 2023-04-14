export interface Metadata {
    nameclassback: string;
    namemodel: string;
    endpoint: string;
    mapping: {
        [key: string]: string;
    };
}


export interface Apiresponse {
    bigdomain: bigdomain[];
}
export interface bigdomain {
    
    name: string;
    subdomain?: subdomain[];
}
export interface subdomain {
    id: number;
  bigdomain_id: number;
    name: string;
    domain?: domain[];
}
export interface domain {
    
    name: string;
    value: number;

}
export interface endpoints{
    Metadata:string;
    endpointsave:string;
    subdomainname:string;
    domainname:string;
}
