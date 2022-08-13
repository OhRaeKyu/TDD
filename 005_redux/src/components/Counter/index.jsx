import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../../modules/counterModule';

export default React.memo(function Counter() {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.counter);

  const handleIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const handleDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <div>
      <p>{number}</p>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
});
