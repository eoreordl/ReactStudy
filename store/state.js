import create from 'zustand';

const useCalculatorStore = create((set) => ({
  expression: '',
  history: [],
  handleButtonClick: (label) => {
    set((state) => {
      if (label === '=') {
        try {
          const result = eval(state.expression).toString();
          const newHistory = [result, ...state.history.slice(0, 2)];
          return { expression: result, history: newHistory };
        } catch (error) {
          return { expression: 'Error', history: state.history };
        }
      } else if (label === 'C') {
        return { expression: '', history: state.history };
      } else {
        return { expression: state.expression + label, history: state.history };
      }
    });
  },
}));

export { useCalculatorStore };