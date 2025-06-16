import React from 'react';

function DevelopBrand({ onSave, value }) {
  return (
    <div style={{background: '#e8f5e9', padding: '12px', borderRadius: '8px', margin: '8px 0', display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 350}}>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <span style={{marginRight: '8px', color: '#388e3c'}}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l11.985-8.713h-23.97zm0 2.574l-12-8.713v13.426h24v-13.426zm0-15.287l-12 8.713 12 8.713 12-8.713z"/></svg>
        </span>
        <input
          type="email"
          placeholder="Nhập email người cần tìm..."
          style={{flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #388e3c'}}
          value={value}
          onChange={e => onSave({ type: 'Email', value: e.target.value })}
        />
      </div>
      <div style={{marginTop: '8px', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
        <strong>Email:</strong> {value}
      </div>
    </div>
  );
}

export default DevelopBrand;
