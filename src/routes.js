import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/admin/header";
import Nav from "./components/admin/nav";
import DashBoard from "./pages/admin/dashboard";

import List from "./pages/admin/product";
import AddFormProduct from "./pages/admin/product/add";
import EditFormProduct from "./pages/admin/product/edit";
import DetailProduct from "./pages/admin/product/detail";

import ListCate from "./pages/admin/category";
import AddFormCategory from "./pages/admin/category/add";
import EditFormCategory from "./pages/admin/category/edit";

import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";

const Routes = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav></Nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route exact path="/">
                  <DashBoard {...props}/>
                </Route>
                <Route exact path="/signin">
                  <Signin {...props}/>
                </Route>
                <Route exact path="/signup">
                  <Signup {...props}/>
                </Route>
                <Route exact path="/product">
                  <List {...props} />
                </Route>
                <Route exact path="/product/add">
                  <AddFormProduct {...props} />
                </Route>
                <Route exact path="/product/:id/edit">
                  <EditFormProduct {...props} />
                </Route>
                <Route exact path="/product/:id/detail">
                  <DetailProduct {...props} />
                </Route>

                <Route exact path="/category">
                  <ListCate {...props} />
                </Route>
                <Route exact path="/category/add">
                  <AddFormCategory {...props} />
                </Route>
                <Route exact path="/category/:id/edit">
                  <EditFormCategory {...props} />
                </Route>
              </Switch>
            </main>
            
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Routes;
