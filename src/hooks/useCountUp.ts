import { useState, useEffect } from 'react';

export const useCountUp = function (maxNum: number): number {
  const [countUpValue, setCountUpValue] = useState(0);

  const FPS = 144;
  const duration = 2000;
  const frameTime = Math.round(1000 / FPS);
  const totalSteps = duration * (FPS / 1000);

  useEffect(() => {
    let step = 0;

    const handler = setInterval(() => {
      const currentNum = Math.round(
        maxNum * (1 - Math.pow(2, -10 * (step / totalSteps)))
      );

      setCountUpValue(currentNum);
      step++;

      if (step === totalSteps) {
        setCountUpValue(maxNum);
        clearInterval(handler);
      }
    }, frameTime);
  }, [maxNum, frameTime, totalSteps]);

  return countUpValue;
};
