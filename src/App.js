import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//All pages options
import { HomePage } from './components/homePage';
import { ViewCars } from './components/viewCars';
import { AddCar } from './components/addCar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { EditCars } from './components/editCars';

//Main App
class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Nav bar */}
        <div className="App">
          <Navbar bg="danger" variant="dark">
            <Container>
              <Navbar.Brand href="/">Cars</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/viewCars">View Cars</Nav.Link>
                <Nav.Link href="/addCar">Add Cars</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/viewCars' element={<ViewCars></ViewCars>}></Route>
            <Route path='/addCar' element={<AddCar></AddCar>}></Route>
            <Route path='/editCars/:id' element={<EditCars></EditCars>}></Route>
          </Routes>
          {/* used  for comments */}
        </div>
      </Router>
    );
  }
}

export default App;
