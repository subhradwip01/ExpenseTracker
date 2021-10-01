import Expenses from "./components/Expenses/Expense";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseslist,setNewExpense] =useState(expenses)

  const addExpenseHandler=(newExpense)=>{
    setNewExpense((prevExpenses)=>{
      return ([newExpense,...prevExpenses])
    })
  }

  const deleteHandaler = (expenseId) => {
    setNewExpense((prevExpense) => {
      const updatedExpense = prevExpense.filter(
        (expense) => expense.id !== expenseId
      );
      return updatedExpense;
    });
  };


  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2",{},"lets get started"),
  //   React.createElement(Expenses , {items:expenses} )
  // )

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenseslist} onDelete={deleteHandaler} />
    </div>
  );
}



export default App;
