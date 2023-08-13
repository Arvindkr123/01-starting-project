import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting"
import userEvent from '@testing-library/user-event';

describe('Greeting compoent', () => {
    test('render the hello world text', () => {
        // Arrange
        render(<Greeting />)
        // Act
        // ....nothing
        // asserts
        const helloWorldElement = screen.getByText('hello world!')
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders good to see if the button was not clicked', () => {
        // Arrange
        render(<Greeting />);
        // Actions
        const outputElement = screen.getByText('good tp see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    })

    test('render changed if was clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        // asserts
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render good to see you if the button was clicked ! ', () => {
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        // asserts
        const outputElement = screen.queryByText("good to see you", { exact: 'false' });
        expect(outputElement).toBeNull();
    })


})