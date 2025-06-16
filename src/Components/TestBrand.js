import React from 'react';

function TestBrand({ onSave, value }) {
  return (
    <div style={{background: '#fffde7', padding: '12px', borderRadius: '8px', margin: '8px 0', display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 350}}>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <span style={{marginRight: '8px', color: '#fbc02d'}}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </span>
        <input
          type="text"
          placeholder="Nhập địa chỉ người cần tìm..."
          style={{flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #fbc02d'}}
          value={value}
          onChange={e => onSave({ type: 'Địa chỉ', value: e.target.value })}
        />
      </div>
      <div style={{marginTop: '8px', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
        <strong>Địa chỉ:</strong> {value}
      </div>
    </div>
  );
}

export default TestBrand;
