export interface SearchBarModel {
    endpoint: string;
    placeholder: string;
    searchQuery: string;
    onSubmit: () => void;
  }