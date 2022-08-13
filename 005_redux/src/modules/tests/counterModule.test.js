import { increase, decrease, counterReducer } from '../counterModule';

describe('counter module', () => {
  describe('action creator', () => {
    it('should create INCREASE action', () => {
      expect(increase()).toEqual({ type: 'counter/INCREASE' });
    });

    it('should create DECREASE action', () => {
      expect(decrease()).toEqual({ type: 'counter/DECREASE' });
    });
  });

  describe('reducer', () => {
    const initState = {
      number: 0,
    };

    it('should have initial state', () => {
      const state = counterReducer(undefined, {});
      expect(state).toEqual(initState);
    });

    it('should handle INCREASE action', () => {
      const state = counterReducer(initState, increase());
      expect(state.number).toBe(1);
    });

    it('should handle DECREASE action', () => {
      const state = counterReducer(initState, decrease());
      expect(state.number).toBe(-1);
    });
  });
});
