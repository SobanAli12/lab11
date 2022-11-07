import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});
test('T2', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("Hello World");
});

test('T3', () => {
  render(<App />);
  const linkElement = screen.getByTestId("task3");
  expect(linkElement).toBeInTheDocument("Item 1");
});