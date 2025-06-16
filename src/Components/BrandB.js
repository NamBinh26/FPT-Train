import React from 'react';

function PhoneBrand({ onSave, value }) {
  return (
    <div style={{background: '#fff3e0', padding: '12px', borderRadius: '8px', margin: '8px 0', display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 350}}>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <span style={{marginRight: '8px', color: '#ff9800'}}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884l2-3.5A2 2 0 016.342 1h7.317a2 2 0 011.74 1.384l2 3.5A2 2 0 0118 7.118V15a2 2 0 01-2 2H4a2 2 0 01-2-2V7.118a2 2 0 01.003-.234zM4 3l-2 3.5V15a4 4 0 004 4h8a4 4 0 004-4V6.5L16 3H4zm6 3a2 2 0 100 4 2 2 0 000-4z" /></svg>
        </span>
        <input
          type="tel"
          placeholder="Nhập số điện thoại..."
          style={{flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ff9800'}}
          value={value}
          onChange={e => onSave({ type: 'Số điện thoại', value: e.target.value })}
        />
      </div>
      <div style={{marginTop: '8px', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
        <strong>Số điện thoại:</strong> {value}
      </div>
    </div>
  );
}

export default PhoneBrand;
