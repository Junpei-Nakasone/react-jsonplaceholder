import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import UsersPage from './pages/users';
import FetchUsers from './components/users';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() =>{
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = [{
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  }];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  // await act(async () => {
  //   render(<UsersPage />, container);
  // });

  const linkElement = screen.getByText(/All userstest:/i);
  expect(linkElement).toBeInTheDocument();

  // expect(container.querySelector("li").textContent).toBe(fakeUser.name);
  // expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  // expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});


test('renders learn react link', () => {
  render(<UsersPage />);
  const linkElement = screen.getByText(/loading.../i);
  expect(linkElement).toBeInTheDocument();
});

// test('awaiting', async () => {
//   render(<UsersPage />);
//   await waitFor(() => expect(FetchUsers).toBeCalled());
// })
