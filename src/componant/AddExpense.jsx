import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
const AddExpense = () => {
  const { AddExpense } = useContext(ExpenseContext);
  const [input, setInput] = useState({
    title: "",
    name: "",
    category: "",
    description: "",
    amount: 0,
    type: "",
  });
  const handleChange = (field, e) => {
    setInput((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddExpense(input);
    setInput({
      title: "",
      name: "",
      category: "",
      description: "",
      amount: 0,
      type: "",
    });
  };
  return (
    <Container className="card p-4 shadow">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={input.title}
                onChange={(e) => handleChange("title", e)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={input.description}
                onChange={(e) => handleChange("description", e)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                name="amount"
                value={input.amount}
                onChange={(e) => handleChange("amount", e)}
                min="0"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={input.category}
                onChange={(e) => handleChange("category", e)}
                required
              >
                <option value="">Select Category</option>
                <option value="general">General Expenses</option>
                <option value="Electric">Electrical</option>
                <option value="grocery">Grocery</option>
                <option value="Traveling">Traveling</option>
                <option value="home-Expense">Home Expense</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Expense Type</Form.Label>
              <Form.Select
                name="type"
                value={input.type}
                onChange={(e) => handleChange("type", e)}
                required
              >
                <option value="">Select Expense Type</option>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        {/* Submit Button */}
        <Button className="mt-3 w-100" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};
export default AddExpense;
