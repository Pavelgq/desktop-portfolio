import { ReactNode } from "react";

export const ItemTypes = {
  Window: "div",
};

export type PalletViewI = 'Table' | 'Tile';


export interface ModalDataI {
  title: string;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface LeetCodeRes {
  data: {
    matchedUser: {
      username: string,
      submitStats: {
        acSubmissionNum: {
            difficulty: "All" | "Easy" | "Medium" | "Hard",
            count: number,
            submissions: number
          }[]
      }
    }
  }
}