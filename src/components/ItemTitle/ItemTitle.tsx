import { ItemTitleProps } from "./ItemTitle.props";

export const ItemTitle = ({ text }: ItemTitleProps) => {
  const editTitle = (text: string) => {
    return text;
  };
  return <span>{editTitle(text)}</span>;
};
