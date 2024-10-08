import { useState } from 'react';
import { MOCK_FAQS } from './mock';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  const [items, setItems] = useState(MOCK_FAQS);

  const onRemove = (id) => {
    const index = items.find((item) => item.id === id);
    items.splice(index, 1);
    setItems(items);
  };

  return (
    <div className="flex gap-3 flex-col">
      {items.map((item) => (
        <FAQItem item={item} onRemove={onRemove} canRemove={items.length > 1} />
      ))}
    </div>
  );
};
