import Header from './Components/Header';
import Footer from './Components/Footer';
import ButtonComponent from './Components/ButtonComponent';
import React from 'react';

function App() {
  // Phương thức liên hệ
  const handleContact = () => {
    alert('Liên hệ: Số điện thoại 0123456789 hoặc email: example@email.com');
  };
  // Phương thức tìm kiếm
  const handleSearch = () => {
    alert('Chức năng tìm kiếm sẽ được thực hiện ở đây!');
  };
  return (
    <div>
      <Header />
      <main>
        <h2>Form Nhập</h2>
        <div style={{ display: 'flex', gap: 24, margin: '24px 0' }}>
          <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={handleContact} title="Liên hệ">
            <svg width="32" height="32" fill="#1976d2" viewBox="0 0 24 24"><path d="M2.003 5.884l2-3.5A2 2 0 016.342 1h7.317a2 2 0 011.74 1.384l2 3.5A2 2 0 0118 7.118V15a2 2 0 01-2 2H4a2 2 0 01-2-2V7.118a2 2 0 01.003-.234zM4 3l-2 3.5V15a4 4 0 004 4h8a4 4 0 004-4V6.5L16 3H4zm6 3a2 2 0 100 4 2 2 0 000-4z"/></svg>
            <span style={{ marginLeft: 8 }}>Liên hệ</span>
          </span>
          <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={handleSearch} title="Tìm kiếm">
            <svg width="32" height="32" fill="#388e3c" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 001.41-1.41l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <span style={{ marginLeft: 8 }}>Tìm kiếm</span>
          </span>
        </div>
        <ButtonComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
