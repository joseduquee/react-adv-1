import { useState } from "react";


export const useProduct = ()=> {
  
    const [counter, setCounter] = useState(0);

  const increaseBy = ( value: number ): void => {
    setCounter((prev) => Math.max(prev + value, 0));
    //de esta forma no sera nunca menor que 0
  };

  return {
      counter,
      increaseBy
  }

};

