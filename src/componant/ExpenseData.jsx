import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Table, Button, Container } from "react-bootstrap";
const ExpenseData = () => {
  const { expenseList, handleDelete } = useContext(ExpenseContext);
  return (
    <Container className="mt-4">
      <div className="card shadow p-3">
        <h3 className="mb-3">Expense List</h3>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.length > 0 ? (
              expenseList.map((e, index) => (
                <tr key={e.id}>
                  <td>{index + 1}</td>
                  <td>{e.title}</td>
                  <td>{e.name}</td>
                  <td>{e.category}</td>
                  <td>{e.description}</td>
                  <td>₹{e.amount}</td>
                  <td>
                    <span
                      className={
                        e.type === "debit"
                          ? "badge bg-danger"
                          : "badge bg-success"
                      }
                    >
                      {e.type}
                    </span>
                  </td>
                  <td>
                    <Button variant="warning" size="sm">
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No expenses found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default ExpenseData;
