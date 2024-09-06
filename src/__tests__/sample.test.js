import App from '../App';
import { act, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('should remove FAQ item when the cross button is clicked on card', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-1');

  const cross = await within(faqItem).findByTestId('cross');

  userEvent.click(cross);

  expect(screen.queryByTestId('faq-1')).not.toBeInTheDocument();
});

test('should expand FAQ content when the + button is clicked and collapse it when the - button is clicked', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-2');

  const expand = await within(faqItem).findByTestId('expand');

  userEvent.click(expand);

  screen.getByText(/Once your order has shipped/i);

  userEvent.click(expand);

  expect(
    screen.queryByText(/Once your order has shipped/i)
  ).not.toBeInTheDocument();
});

test('should not expand the next FAQ item after the current FAQ is deleted', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-2');

  const expand = await within(faqItem).findByTestId('expand');
  const cross = await within(faqItem).findByTestId('cross');

  userEvent.click(expand);

  userEvent.click(cross);

  expect(
    screen.queryByText(/Yes, we offer international shipping/i)
  ).not.toBeInTheDocument();

  expect(
    screen.queryByText(/How can I track my order?/i)
  ).not.toBeInTheDocument();
});

test('should retain the expanded state of an FAQ item when a different FAQ item is deleted', async () => {
  render(<App />);

  const faqItem2 = screen.getByTestId('faq-2');

  const expand2 = await within(faqItem2).findByTestId('expand');

  const faqItem3 = screen.getByTestId('faq-3');

  const cross3 = await within(faqItem3).findByTestId('cross');

  userEvent.click(expand2);

  userEvent.click(cross3);

  screen.getByText(/Once your order has shipped/i);
});
