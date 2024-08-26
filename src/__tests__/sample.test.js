import App from '../App';
import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('should delete faq on clicking cross button', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-1');

  const cross = await within(faqItem).findByTestId('cross');

  act(() => {
    userEvent.click(cross);
  });

  expect(() => screen.getByTestId('faq-1')).toThrow();
});
