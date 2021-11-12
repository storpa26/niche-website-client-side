import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './Pages/HomePage/Homepage/Homepage';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Homepage></Homepage>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Homepage></Homepage>
            <Footer></Footer>

          </Route>
          <Route exact path="/shop">
            <Header></Header>
            <Footer></Footer>

          </Route>
          <Route exact path="/inventory">
            <Header></Header>
            <Footer></Footer>

          </Route>
          <PrivateRoute exact path="/reviews">
            <Header></Header>
            <Footer></Footer>

          </PrivateRoute>
          <Route exact path="/login">
            <Header></Header>
            <Login></Login>
            <Footer></Footer>

          </Route>
          <Route exact path="/register">
            <Header></Header>
            <Register></Register>
            <Footer></Footer>

          </Route>
        </Switch>

      </Router>
    </AuthProvider>

  );
}

export default App;
