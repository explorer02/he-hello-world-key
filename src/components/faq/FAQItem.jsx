import { useState } from 'react';

export const FAQItem = ({ item, onRemove, canRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      id={`faq-${item.id}`}
      data-testid={`faq-${item.id}`}
      style={{
        border: '1px solid grey',
        borderRadius: '8px',
        padding: '12px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            paddingRight: '8px',
            flex: 'none',
          }}
        >
          <button
            data-testid="expand"
            style={{
              fontSize: '20px',
              lineHeight: '20px',
              width: '16px',
            }}
            onClick={() => setIsExpanded(true)}
          >
            {isExpanded ? '-' : '+'}
          </button>
        </div>

        <div style={{ flex: 1 }}>
          <div>{item.heading}</div>
        </div>

        {canRemove ? (
          <div style={{ flex: 'none' }}>
            <button
              data-testid="cross"
              style={{
                border: '1px solid grey',
                background: 'silver',
                width: '24px',
                height: '24px',
                borderRadius: '100%',
                top: '8px',
                right: '8px',
              }}
              onClick={onRemove}
            >
              X
            </button>
          </div>
        ) : null}
      </div>
      {isExpanded ? (
        <div style={{ padding: '0 20px' }}>{item.description}</div>
      ) : null}
    </div>
  );
};
