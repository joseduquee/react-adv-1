import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

//este onChange viene del productCar en el shoppingPage
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  const isMounted = useRef(false);


  const increaseBy = (valueNum: number): void => {
    
    let newValue = Math.max(counter + valueNum, 0);
    
    if(initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter(newValue);
    //de esta forma no sera nunca menor que 0
    onChange && onChange({ count: newValue, product });
  };
  
  useEffect(() => { 
    if( !isMounted.current ) return;  
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  
  const reset = () => {
    setCounter( initialValues?.count || value);
  }
  
  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
  };
};
