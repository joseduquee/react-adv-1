import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties
}

// el img con las comillas significia que la imagen sera opcional
export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext( ProductContext );

  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img 
      className={`${styles.productCard} ${className}`} 
      src={imgToShow} 
      alt="product img" 
      style={ style }
    />
  );
};
