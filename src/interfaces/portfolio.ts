
export interface PortfolioOptionsI {
 licence: {
   name: 'Лицензия';
   value: string;
   link: boolean;
 };
  codeLink?: {
   name: 'Исходный код';
   value: string;
   link: boolean;
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
  info?: string;
}
