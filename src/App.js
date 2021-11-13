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
import Shop from './Pages/Shop/Shop';
import OrderPage from './Pages/OrderPage/OrderPage';
import MyOrders from './Pages/Shared/MyOrders/MyOrders';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import Reviews from './Pages/Shared/Reviews/Reviews';
import Payment from './Pages/Payment/Payment';
import AddReviews from './Pages/AddReviews/AddReviews';
import About from './Pages/About/About';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';
import ManageAllOrders from './Pages/Admin/ManageAllOrders/ManageAllOrders';
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
            <Shop></Shop>
            <Footer></Footer>

          </Route>

          <Route exact path="/reviews">
            <Header></Header>
            <Reviews></Reviews>
            <Footer></Footer>
          </Route>
          <Route exact path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>

          <PrivateRoute exact path="/addreviews">
            <Header></Header>
            <AddReviews></AddReviews>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute exact path="/manageallorders">
            <Header></Header>
            <ManageAllOrders></ManageAllOrders>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute exact path="/addproduct">
            <Header></Header>
            <AddProduct></AddProduct>
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
          <PrivateRoute exact path="/shop/:carId">
            <Header></Header>
            <OrderPage></OrderPage>
            <Footer></Footer>

          </PrivateRoute>
          <PrivateRoute exact path="/myorders">
            <Header></Header>
            <MyOrders></MyOrders>
            <Footer></Footer>
          </PrivateRoute>

          {/* Admin Routes */}
          <PrivateRoute exact path="/addadmin">
            <Header></Header>
            <MakeAdmin></MakeAdmin>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute exact path="/payment">
            <Header></Header>
            <Payment></Payment>
            <Footer></Footer>
          </PrivateRoute>

        </Switch>

      </Router>
    </AuthProvider>

  );
}

export default App;
