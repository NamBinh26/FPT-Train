import React, { useState } from 'react';

function InputComponent() {
  const [value, setValue] = useState('');

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.5 2a6.5 6.5 0 015.18 10.5l3.16 3.16a1 1 0 01-1.42 1.42l-3.16-3.16A6.5 6.5 0 118.5 2zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Nhập dữ liệu..."
        style={{ marginRight: '8px', paddingLeft: '32px', height: '32px' }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div>Giá trị nhập: {value}</div>
    </div>
  );
}

export default InputComponent;
