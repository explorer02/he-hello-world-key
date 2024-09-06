import { useState } from 'react';

export const FAQItem = ({ item, onRemove, canRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      id={`faq-${item.id}`}
      data-testid={`faq-${item.id}`}
      className="border-gray-400 border rounded-lg p-3"
    >
      <div className="flex">
        <div className="flex-none pr-2">
          <button
            data-testid="expand"
            className="text-xl leading-5 w-4"
            onClick={() => setIsExpanded(true)}
          >
            {isExpanded ? '-' : '+'}
          </button>
        </div>

        <div className="flex-1">
          <div>{item.heading}</div>
        </div>

        {canRemove ? (
          <div className="flex-none">
            <button
              data-testid="cross"
              className="border border-gray-400 bg-slate-200 w-6 h-6 rounded-full top-2 right-2"
              onClick={onRemove}
            >
              X
            </button>
          </div>
        ) : null}
      </div>
      {isExpanded ? <div className="px-5 py-0">{item.description}</div> : null}
    </div>
  );
};
