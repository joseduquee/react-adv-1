import { useState } from "react";
import { Product, ProductInCar } from "../interfaces/interfaces";

export const useShoppingCar = () => {
  const [shoppingCar, setShoppingCar] = useState<{
    [key: string]: ProductInCar;
  }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => 
  {
    console.log({ count });
    
    setShoppingCar((oldShoppingCar) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCar;
        return {
          ...rest,
        };
      }

      return {
        ...oldShoppingCar,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCar,
    onProductCountChange,
  };
};
