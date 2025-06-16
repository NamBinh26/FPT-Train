import Header from './Components/Header';
import Footer from './Components/Footer';
import InputComponent from './Components/InputComponent';
import ButtonComponent from './Components/ButtonComponent';
import SearchBrand from './Components/BrandA';
import PhoneBrand from './Components/BrandB';
import DevelopBrand from './Components/DevelopBrand';
import TestBrand from './Components/TestBrand';
import React, { useState } from 'react';

function App() {
  const [infoDraft, setInfoDraft] = useState({});
  const [infoList, setInfoList] = useState([]);

  // Lưu tạm từng trường
  const handleDraft = (info) => {
    setInfoDraft(prev => ({ ...prev, [info.type]: info.value }));
  };

  // Lưu tất cả vào bảng khi nhấn nút
  const handleSaveAll = () => {
    const entries = Object.entries(infoDraft);
    if (entries.length > 0) {
      setInfoList(prev => [...prev, infoDraft]);
      setInfoDraft({});
    }
  };

  return (
    <div>
      <Header />
      <main style={{display: 'flex', alignItems: 'flex-start'}}>
        <div style={{flex: 1}}>
          <h2>Form Nhập</h2>
          <SearchBrand onSave={info => handleDraft({ type: 'Tìm kiếm', value: info.value })} value={infoDraft['Tìm kiếm'] || ''} />
          <PhoneBrand onSave={info => handleDraft({ type: 'Số điện thoại', value: info.value })} value={infoDraft['Số điện thoại'] || ''} />
          <DevelopBrand onSave={info => handleDraft({ type: 'Email', value: info.value })} value={infoDraft['Email'] || ''} />
          <TestBrand onSave={info => handleDraft({ type: 'Địa chỉ', value: info.value })} value={infoDraft['Địa chỉ'] || ''} />
          <button onClick={handleSaveAll} style={{marginTop: 16, padding: '8px 20px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Lưu thông tin</button>
        </div>
        <div style={{flex: 1, marginLeft: 32}}>
          {infoList.length > 0 && (
            <div>
              <h3>Danh sách thông tin đã nhập</h3>
              <table style={{borderCollapse: 'collapse', width: '100%', maxWidth: 600}}>
                <thead>
                  <tr style={{background: '#1976d2', color: '#fff'}}>
                    <th style={{border: '1px solid #1976d2', padding: 8}}>Tìm kiếm</th>
                    <th style={{border: '1px solid #1976d2', padding: 8}}>Số điện thoại</th>
                    <th style={{border: '1px solid #1976d2', padding: 8}}>Email</th>
                    <th style={{border: '1px solid #1976d2', padding: 8}}>Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>
                  {infoList.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{border: '1px solid #1976d2', padding: 8}}>{item['Tìm kiếm'] || ''}</td>
                      <td style={{border: '1px solid #1976d2', padding: 8}}>{item['Số điện thoại'] || ''}</td>
                      <td style={{border: '1px solid #1976d2', padding: 8}}>{item['Email'] || ''}</td>
                      <td style={{border: '1px solid #1976d2', padding: 8}}>{item['Địa chỉ'] || ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
