import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import PageNotFound from "./pages/home/pageNotFound/PageNotFound";
import Footer from "./pages/footer/Footer";
import Login from "./pages/login/login/Login";
import Register from "./pages/login/register/Register";
import AuthProvider from "./context/authpovider/AuthProvider";
import Navigation from "./pages/home/navigation/Navigation";
import Explore from "./explore/Explore";
import PurchaseModal from "./pages/home/home/purchase/PurchaseModal";
import PrivateRoute from "./pages/login/privateRoute/PrivateRoute";
import Deshboard from "./pages/deshboard/deshboard/Deshbord";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/purchaseModal">
              <PurchaseModal></PurchaseModal>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/deshboard">
              <Deshboard></Deshboard>
            </Route>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
