import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenseList: [],
  AddExpense: () => {},
  handleDelete: () => {},
});

const initialValue = {
  expenseList: [
    {
      id: 1,
      title: "expense",
      name: "pizza",
      category: "General Expenses",
      description: "general Expenses",
      amount: 300,
      type: "debit",
    },
  ],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const input = action.payload;

      const newExpense = {
        id: new Date().getTime(),
        title: input.title,
        name: input.name,
        description: input.description,
        category: input.category,
        amount: input.amount,
        type: input.type,
      };

      return {
        ...state,
        expenseList: [...state.expenseList, newExpense],
      };
    }

    case "delete": {
      const id = action.payload;

      const remainList = state.expenseList.filter((e) => e.id !== id);

      return {
        ...state,
        expenseList: remainList,
      };
    }
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialValue);

  const AddExpense = (input) => {
    dispatch({ type: "add", payload: input });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const values = {
    expenseList: state.expenseList,
    AddExpense,
    handleDelete,
  };

  return (
    <>
      <ExpenseContext.Provider value={values}>
        {children}
      </ExpenseContext.Provider>
    </>
  );
};

export default ExpenseContextProvider;
