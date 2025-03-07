// __tests__/NoteForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import NoteForm from '../components/NoteForm';

test('renders NoteForm and submits data', () => {
  render(<NoteForm />);
  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: 'Test Note' },
  });
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/note added/i)).toBeInTheDocument();
});

