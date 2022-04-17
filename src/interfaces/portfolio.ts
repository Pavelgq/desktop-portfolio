
export interface PortfolioOptionsI {
 licence: {
   name: 'Лицензия';
   value: string;
 };
  codeLink?: {
   name: 'Исходный код';
   value: string;
 };
}

export interface PortfolioItemI {
  id: number;
  name: string;
  description: string;
  finishDate: Date;
  options: PortfolioOptionsI;
  previewLink?: string;
  previewImage?: string;
  
  instruments: string[]; 
}
