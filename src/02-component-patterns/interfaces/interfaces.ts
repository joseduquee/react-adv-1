import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImage } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title:( Props: ProductTitleProps) => JSX.Element,
  Image:( Props: ProductImage) => JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}