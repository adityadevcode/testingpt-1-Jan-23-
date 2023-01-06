import {render, screen, cleanup} from '@testing-library/react';
import Todo from './Todo';

// cleanup unmounts react trees that were mounted with render
test('should render todo component', () => {
    render(<Todo/>);
    // create a variable and include testid
const todoElement = screen.getByTestId("todo");
// makesure to check todoElement in the dom (document)
expect (todoElement).toBeInTheDocument();
})

test('text should render todo component', () => {
    render(<Todo/>);
    const todoElement = screen.getByTestId("todo");
    expect (todoElement).toHaveTextContent("Hello World");
})

test('test', () => {
    expect(true).toBe(true);
})