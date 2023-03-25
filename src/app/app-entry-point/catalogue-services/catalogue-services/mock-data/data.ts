import { CardData } from "src/shared/generic/list-card/Models/cardModel";


export const mockCardData: CardData={
    endpoint: "https://localhost:5001/api/service",
    primaryColor: '#00b2d91a',
    labelColor: '#00B2D9',
    minHeight:"105px",
    maxHeight:"105px",
    showEditButton: false,
    showBody: false,
    showFooterAction: false,
    showDropdownMenu: false,
    showCardActions: false,
    showFooter: false,
    showIconAction: false,
  
  };
  export const CommonCssBehaviours={
    primaryColor: '#00b2d91a',
    labelColor: '#00B2D9',

  }
  export const categoryData: CardData[]=[{
   ...CommonCssBehaviours,
   primaryLabel: 'Sport'
    
  
  },
  {
    ...CommonCssBehaviours,
    primaryLabel: 'Travel'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Health'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Love'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Fashion'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Technology'
     
   
   }
  
  ];
