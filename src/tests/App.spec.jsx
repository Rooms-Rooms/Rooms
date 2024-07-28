import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders Rooms App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Rooms App/i);
  expect(linkElement).toBeInTheDocument();
});
