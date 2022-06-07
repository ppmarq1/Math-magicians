import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quote';
import NavBar from './components/navbar';
import Home from './components/home';

class RenderPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default RenderPage;
