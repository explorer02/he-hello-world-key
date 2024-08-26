import App from '../App';
import { act, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('should delete faq on clicking cross button', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-1');

  const cross = await within(faqItem).findByTestId('cross');

  act(() => {
    userEvent.click(cross);
  });

  expect(() => screen.getByTestId('faq-1')).toThrow();
});

test('should expand faq on clicking + & collapse on -', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-2');

  const expand = await within(faqItem).findByTestId('expand');

  act(() => {
    userEvent.click(expand);
  });

  screen.getByText(/Once your order has shipped/i);

  act(() => {
    userEvent.click(expand);
  });

  expect(() => screen.getByText(/Once your order has shipped/i)).toThrow();
});

test('should expand faq on clicking + & next item should not expand on deletion', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-2');

  const expand = await within(faqItem).findByTestId('expand');
  const cross = await within(faqItem).findByTestId('cross');

  act(() => {
    userEvent.click(expand);
  });

  act(() => {
    userEvent.click(cross);
  });

  expect(() =>
    screen.getByText(/Yes, we offer international shipping/i)
  ).toThrow();
});

test('expand state should not change on different element deletion', async () => {
  render(<App />);

  const faqItem2 = screen.getByTestId('faq-2');

  const expand2 = await within(faqItem2).findByTestId('expand');

  const faqItem3 = screen.getByTestId('faq-3');

  const cross3 = await within(faqItem3).findByTestId('cross');

  act(() => {
    userEvent.click(expand2);
  });

  act(() => {
    userEvent.click(cross3);
  });

  screen.getByText(/Once your order has shipped/i);
});
