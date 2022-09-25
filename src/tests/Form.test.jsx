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

  test('03- Check if attribute 1 exist', () => {
    render(<Form />);
    const attribute = screen.getByTestId('attr1-input');
    expect(attribute).toBeInTheDocument();
  });

  test('04- Check if attribute 2 exist', () => {
    render(<Form />);
    const attribute = screen.getByTestId('attr2-input');
    expect(attribute).toBeInTheDocument();
  });
});
