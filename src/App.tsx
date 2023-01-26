import React, { ReactElement } from 'react';
import './App.css';
import TodosPage from './pages/todos';
import UsersPage from './pages/users';
import { Route, Routes } from 'react-router-dom';


const App = (): ReactElement => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UsersPage />} />
        <Route path='/users-todo' element={<TodosPage />} />
      </Routes>
    </div>
  );
}

export default App;
