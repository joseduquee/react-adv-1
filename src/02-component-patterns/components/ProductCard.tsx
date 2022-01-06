import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext, CSSProperties } from "react";
import { InitialValues, OnChangeArgs, Product, ProductCarHandlers, ProductContextProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCarHandlers ) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });


  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div 
        className={`${ styles.productCard} ${ className }`}
        style={ style }
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy, 
          reset
        })}
      </div>
    </Provider>
  );
};

