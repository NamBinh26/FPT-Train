import Header from './Components/Header';
import Footer from './Components/Footer';
import InputComponent from './Components/InputComponent';
import ButtonComponent from './Components/ButtonComponent';

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Form Nhập</h2>
        <InputComponent />
        <ButtonComponent />
        {/* Thêm input và button trực tiếp */}
        <input type="text" placeholder="Nhập dữ liệu..." style={{marginRight: '8px'}} />
        <button>Gửi</button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
