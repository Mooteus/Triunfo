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

  test('05- Check if attribute 3 exist', () => {
    render(<Form />);
    const attribute = screen.getByTestId('attr3-input');
    expect(attribute).toBeInTheDocument();
  });

  test('06- Check if Image input exist', () => {
    render(<Form />);
    const image = screen.getByTestId('image-input');
    expect(image).toBeInTheDocument();
  });

  test('07- Check if rare input exist', () => {
    render(<Form />);
    const rare = screen.getByTestId('rare-input');
    expect(rare).toBeInTheDocument();
  });

  test('08- Check if Triunfo input exist', () => {
    render(<Form />);
    const triunfo = screen.getByTestId('triunfo-input');
    expect(triunfo).toBeInTheDocument();
  });

  test('09- Check if Save button exist', () => {
    render(<Form />);
    const saveButton = screen.getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();
  });
});
