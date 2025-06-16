import React, { useState } from 'react';

function InputComponent() {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập dữ liệu..."
        style={{ marginRight: '8px' }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div>Giá trị nhập: {value}</div>
    </div>
  );
}

export default InputComponent;
