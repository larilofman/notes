import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Note from './index';

test('renders content', () => {
  const testString = 'Testiteksti';

  const note = {
    text: testString,
    id: 0,
  };

  const mockHandler = jest.fn();

  const component = render(
    <Note note={note} deleteNote={mockHandler} />,
  );

  expect(component.container).toHaveTextContent(testString);
});

test('clicking delete button calls event handler', () => {
  const testString = 'Testiteksti';

  const note = {
    text: testString,
    id: 0,
  };

  const mockHandler = jest.fn();

  const component = render(
    <Note note={note} deleteNote={mockHandler} />,
  );

  const deleteButton = component.getByText('Delete');
  fireEvent.click(deleteButton);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
