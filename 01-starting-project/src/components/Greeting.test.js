import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import '@testing-library/jest-dom';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		//Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const helloWorldElement = screen.getByText('Hello World');
		expect(helloWorldElement).toBeInTheDocument();
	});


  test('does not render "good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //Assert
    const outPutElement = screen.queryByText('good to see you', { exact: false });
    expect(outPutElement).toBeNull();
  })
});
