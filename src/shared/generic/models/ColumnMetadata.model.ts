export interface ColumnMetadata {
  name: string;
  type: string;
  format: string;
  maxLength?: number;
  minLength?: number;
  minimum?: number;
  maximum?: number;
  references?: string[] | null;
  description?: string ;
}
