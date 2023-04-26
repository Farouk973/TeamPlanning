export class Permission {
    title!: string;

    description!: string;

    visibility!: boolean;

    path!: string;
    
    iconUrl!: string;

    items!: PermissionItems[];
}

export class PermissionItems {
    name!: string;
    path!: string;
}