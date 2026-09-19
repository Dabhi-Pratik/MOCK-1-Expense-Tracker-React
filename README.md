# 💰 MOCK-1 Expense Tracker – React

A responsive **Expense Tracker web application** built using **React.js**. This project was developed as a React mock/practical project to demonstrate my understanding of React components, Context API, state management, forms, CRUD operations, and responsive UI design.

The application allows users to add, view, and delete expense records while maintaining the expense data using React state and Context API.

## 🚀 Live Demo

🔗 **Live Website:**
https://mock-1-expense-tracker-react.vercel.app

🔗 **GitHub Repository:**
https://github.com/Dabhi-Pratik/MOCK-1-Expense-Tracker-React

---

## 📌 About The Project

The **Expense Tracker** is a React-based application designed to manage daily expense records.

I created this project to practice building a complete React application using reusable components and centralized state management.

The application provides a simple interface where users can:

* Add new expenses
* Enter expense details through a form
* View all added expenses
* Delete existing expenses
* Categorize expenses
* Specify whether an expense is debit or credit
* Manage expense data using React Context API
* Display expense information in a structured table

The project focuses on implementing the core concepts of React rather than using a backend database.

---

## ✨ Features

### ➕ Add Expense

Users can add a new expense by entering details such as:

* Expense title
* Name
* Category
* Description
* Amount
* Expense type

The entered information is stored in the application's React state.

### 📋 Expense List

All available expenses are displayed in a structured table.

The table contains information such as:

| Field       | Description                      |
| ----------- | -------------------------------- |
| ID          | Unique identifier of the expense |
| Title       | Title of the expense             |
| Name        | Name associated with the expense |
| Category    | Expense category                 |
| Description | Details about the expense        |
| Amount      | Expense amount                   |
| Type        | Debit/Credit                     |

### 🗑️ Delete Expense

Users can remove an expense from the expense list using the delete functionality.

The delete operation updates the React state and immediately reflects the changes in the UI.

### 🔄 Context API

I used **React Context API** to manage expense-related data globally.

Instead of passing the expense list and functions through multiple components using props, the `ExpenseContext` provides shared access to:

* Expense list
* Add Expense function
* Delete Expense function
* Expense state management

### ⚛️ React State Management

The application uses React's state management concepts to handle dynamic expense data.

I implemented:

* `useState`
* `useContext`
* `useReducer`

The `useReducer` hook is used to manage expense-related actions in a centralized way.

### 🧩 Reusable Components

The application is divided into multiple React components to keep the project organized and maintainable.

Components are responsible for individual tasks such as:

* Adding expenses
* Displaying expense data
* Managing expense state

### 📱 Responsive UI

The interface is designed to work across different screen sizes and provide a clean user experience.

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

### React Concepts

* React Functional Components
* `useState`
* `useContext`
* `useReducer`
* React Context API
* Props
* Event Handling
* Conditional Rendering
* Form Handling
* Array Methods
* CRUD Operations

### Development Tools

* **Vite**
* **npm**
* **Visual Studio Code**
* **Git**
* **GitHub**

### Deployment

* **Vercel**

---

## 📂 Project Structure

```text
MOCK-1-Expense-Tracker-React/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AddExpense.jsx
│   │   └── ExpenseData.jsx
│   │
│   ├── context/
│   │   └── ExpenseContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> The exact file structure may change as the project is further developed.

---

## 🔄 Application Workflow

The basic workflow of the application is:

```text
User
  │
  ▼
Add Expense Form
  │
  ▼
Enter Expense Details
  │
  ▼
Add Expense
  │
  ▼
Expense Context
  │
  ▼
Expense State
  │
  ▼
Expense List
  │
  ├── View Expense
  │
  └── Delete Expense
```

---

## 🧠 How I Built The Project

### 1. Created the React Application

I started the project using **Vite** to create a fast React development environment.

The project was structured into reusable components instead of keeping all the code inside a single component.

### 2. Created Expense Context

I created an `ExpenseContext` to manage expense-related information.

The context provides a centralized location for managing the expense list and expense operations.

Conceptually:

```text
ExpenseContext
      │
      ├── expenseList
      │
      ├── AddExpense()
      │
      └── handleDelete()
```

This allows different components to access the same expense data without unnecessary prop drilling.

### 3. Created Add Expense Form

I created an `AddExpense` component containing form fields for entering expense information.

The form maintains input values and updates them when the user enters data.

The expense object contains properties such as:

```javascript
{
  id: 1,
  title: "Expense",
  name: "Pizza",
  category: "General Expenses",
  description: "General Expenses",
  amount: 300,
  type: "debit"
}
```

### 4. Added Expense Data

When the user submits the form, the entered information is converted into an expense object and added to the expense list.

The application then updates the UI automatically using React's state management.

### 5. Displayed Expense Data

I created an `ExpenseData` component to display the expense records.

The component receives the expense list through `ExpenseContext` and dynamically renders each expense using JavaScript array methods.

### 6. Implemented Delete Functionality

A delete operation was implemented to remove individual expenses from the list.

When the user clicks the delete button, the corresponding expense is removed and React re-renders the updated list.

---

## 🔧 State Management

One of the main purposes of this project was to practice React state management.

The application uses:

```text
React Component
      │
      ▼
ExpenseContext
      │
      ▼
useReducer
      │
      ▼
Expense State
      │
      ├── Add Expense
      │
      └── Delete Expense
```

Using Context API makes the expense data accessible to components without passing it manually through multiple levels.

---

## 📊 Expense Data Model

Each expense is represented as an object.

```javascript
{
  id: Number,
  title: String,
  name: String,
  category: String,
  description: String,
  amount: Number,
  type: String
}
```

### Example

```javascript
{
  id: 1,
  title: "Food",
  name: "Pizza",
  category: "General Expenses",
  description: "Dinner",
  amount: 300,
  type: "debit"
}
```

---

## 📦 Installation

To run this project locally, first clone the repository:

```bash
git clone https://github.com/Dabhi-Pratik/MOCK-1-Expense-Tracker-React.git
```

Move into the project directory:

```bash
cd MOCK-1-Expense-Tracker-React
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available on the local development server provided by Vite.

---

## 🖥️ Usage

### Step 1

Open the application.

### Step 2

Go to the **Add Expense** section.

### Step 3

Enter the required information:

```text
Title
Name
Category
Description
Amount
Type
```

### Step 4

Submit the form.

### Step 5

The new expense will appear in the expense list.

### Step 6

Use the **Delete** button to remove an expense.

---

## 🎯 Learning Objectives

Through this project, I practiced and improved my understanding of:

* React component architecture
* Functional components
* React Hooks
* `useState`
* `useContext`
* `useReducer`
* Context API
* Form handling
* Controlled components
* Event handling
* CRUD operations
* Dynamic rendering
* JavaScript array methods
* State updates
* Component communication
* Reusable React components
* Project structure
* Vite development environment
* Git and GitHub
* Vercel deployment

---

## 🔮 Future Improvements

The project can be further improved by adding:

* ✏️ Edit expense functionality
* 🔍 Search expenses
* 🏷️ Category-based filtering
* 📅 Date-wise expense tracking
* 📊 Expense charts and analytics
* 💰 Total income and expense calculation
* 💾 LocalStorage support
* 🔐 User authentication
* 🗄️ Backend API
* ☁️ Database integration
* 📱 Improved mobile interface
* 📤 Export expenses to CSV/PDF

---

## 🌐 Deployment

The project is deployed using **Vercel**.

### Live Application

https://mock-1-expense-tracker-react.vercel.app

The source code is available on GitHub:

https://github.com/Dabhi-Pratik/MOCK-1-Expense-Tracker-React

---

## 👨‍💻 Developer

**Pratik Dabhi**

IT Engineering Student | Frontend / Full-Stack Developer

### GitHub

https://github.com/Dabhi-Pratik

---

## ⭐ Project

If you find this project useful or interesting, feel free to explore the repository and check out the implementation.

---

## 📄 License

This project is created for **learning, practice, and educational purposes**.
