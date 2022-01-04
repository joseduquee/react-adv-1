import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

//este onChange viene del productCar en el shoppingPage
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number): void => {
    
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    //de esta forma no sera nunca menor que 0
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
