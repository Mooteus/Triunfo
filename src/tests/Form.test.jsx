import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Test Form component', () => {
  test('01- Check if name input exist', () => {
    render(<Form />);
    const name = screen.getByTestId('name-input');
    expect(name).toBeInTheDocument();
  });

  test('02- Check if description input exist', () => {
    render(<Form />);
    const description = screen.getByTestId('description-input');
    expect(description).toBeInTheDocument();
  });
});
