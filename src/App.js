import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GetProductComponent from './components/GetProductComponent';
import AddProductComponent from './components/AddProductComponent';
import SignUpComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import MakePaymentComponent from './components/MakePaymentComponent';
import FooterComponent from './components/FooterComponent';


function App() {
 
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          {/* <header className="App-header">
            <h1>Bookish</h1>
          </header> */}
          
          <Routes>
            <Route path='/' element={<GetProductComponent/>} />
            <Route path='/addproduct' element={<AddProductComponent/>} />
            <Route path='/signup' element={<SignUpComponent/>} />
            <Route path='/signin' element={<SignInComponent/>} />
            <Route path='/makepayment' element={<MakePaymentComponent />} />
          </Routes>
        </div>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;