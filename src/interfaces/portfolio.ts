
export interface PortfolioOptionsI {
  version?: {
    name: 'Версия';
    value: string;
    link: boolean;
  };
  type?: {
    name: 'Тип';
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
  startDate?: Date | string;
  finishDate: Date | string;
  options: PortfolioOptionsI;
  previewLink?: string;
  previewImage?: string;
  previewImageSmall?: string;
  
  instruments: string[]; 
  info?: string;
}