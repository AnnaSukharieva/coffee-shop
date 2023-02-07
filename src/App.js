import './App.scss';
import Main from './components/main-page/main-page';
import Store from './components/store/store';
import { BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/our-coffe' element={<Store />} />

      </Routes>
    </Router>
  );
}

export default App;
