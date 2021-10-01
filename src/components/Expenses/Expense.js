import React , {useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filterdItems=props.items.filter(item=>{
      return item.date.getFullYear().toString() === filteredYear;

    });


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdItems} />
      <ExpensesList items={filterdItems} onDeleteItem={props.onDelete} />
    </Card>
  );
}

export default Expenses;
