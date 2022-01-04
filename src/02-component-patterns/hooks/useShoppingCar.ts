import { useState } from "react";
import { Product, ProductInCar } from "../interfaces/interfaces";


export const useShoppingCar = () => {

    const [shoppingCar, setShoppingCar] = useState<{
        [key: string]: ProductInCar;
      }>({});
    
      const onProductCountChange = ({
        count,
        product,
      }: {
        count: number;
        product: Product;
      }) => {
        setShoppingCar((oldShoppingCar) => {
          const productInCar: ProductInCar = oldShoppingCar[product.id] || {
            ...product,
            count: 0,
          };
    
          if (Math.max(productInCar.count + count, 0) > 0) {
            productInCar.count += count;
            return {
              ...oldShoppingCar,
              [product.id]: productInCar,
            };
          }
    
          //Borrar el producto
          const { [product.id]: toDelete, ...rest } = oldShoppingCar;
          return {
            ...rest,
          };
    
          //   if (count === 0) {
          //     const { [product.id]: toDelete, ...rest } = oldShoppingCar;
          //     return {
          //       ...rest,
          //     };
          //   }
    
          //   return {
          //     ...oldShoppingCar,
          //     [product.id]: { ...product, count },
          //   };
          // }
        });
      };

    return {
        shoppingCar,
        onProductCountChange,
    }

}