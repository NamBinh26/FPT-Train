import React from 'react';

function SearchBrand({ onSave, value }) {
  return (
    <div style={{background: '#e3f2fd', padding: '12px', borderRadius: '8px', margin: '8px 0', display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 350}}>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <span style={{marginRight: '8px', color: '#1976d2'}}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20"><path d="M8.5 2a6.5 6.5 0 015.18 10.5l3.16 3.16a1 1 0 01-1.42 1.42l-3.16-3.16A6.5 6.5 0 118.5 2zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" /></svg>
        </span>
        <input
          type="text"
          placeholder="Nhập tên muốn tìm kiếm"
          style={{flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #1976d2'}}
          value={value}
          onChange={e => onSave({ type: 'Tìm kiếm', value: e.target.value })}
        />
      </div>
      <div style={{marginTop: '8px', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
        <strong>Kết quả tìm kiếm:</strong> {value}
      </div>
    </div>
  );
}

export default SearchBrand;
