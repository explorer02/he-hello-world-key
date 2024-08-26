import { useState } from 'react';
import { MOCK_FAQS } from './mock';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  const [items, setItems] = useState(MOCK_FAQS);

  const onRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          canRemove={items.length > 1}
        />
      ))}
    </div>
  );
};
