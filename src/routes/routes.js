//import react router dom
import { Switch, Route } from "react-router-dom";

//import component private routes
import PrivateRoute from "./PrivateRoutes";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from '../pages/admin/Login';

//import view admin Dashboard
import Dashboard from '../pages/admin/dashboard/Index';

//import view admin categories Index
import CategoriesIndex from '../pages/admin/categories/Index';

//import view admin category Create
import CategoryCreate from '../pages/admin/categories/Create';

//import view admin category Edit
import CategoryEdit from '../pages/admin/categories/Edit';

//import view admin places Index
import PlacesIndex from '../pages/admin/places/Index';

//import view admin places Create
import PlaceCreate from '../pages/admin/places/Create';

//import view admin places Edit
import PlaceEdit from '../pages/admin/places/Edit';

//import view admin sliders Index
import SlidersIndex from '../pages/admin/sliders/Index';

//import view admin slider Create
import SliderCreate from '../pages/admin/sliders/Create';

//import view admin users Index
import UsersIndex from '../pages/admin/users/Index';

//import view admin user Create
import UserCreate from '../pages/admin/users/Create';

//import view admin user Edit
import UserEdit from '../pages/admin/users/Edit';

//=======================================================================
//WEB
//=======================================================================

//import view web Home
import Home from '../pages/web/home/Index';

//import view web category Show
import WebCategoryShow from '../pages/web/categories/Show';

//import view web place Index
import WebPlaceIndex from '../pages/web/places/Index';

//import view web place Show
import WebPlaceShow from '../pages/web/places/Show';

//import view web place Direction
import WebPlaceDirection from '../pages/web/places/Direction';

//import view web maps
import MapsIndex from '../pages/web/maps/Index';

//import view web search
import WebSearch from '../pages/web/search/Index';

function Routes() {
    return (
        <Switch>

            {/* route "/adminlogin" */}
            <Route exact path="/admin/login">
                <Login /> 
            </Route>

            {/* private route "/admin/dashboard" */}
            <PrivateRoute exact path="/admin/dashboard">
                <Dashboard /> 
            </PrivateRoute>

            {/* private route "/admin/categories" */}
            <PrivateRoute exact path="/admin/categories">
                <CategoriesIndex /> 
            </PrivateRoute>

            {/* private route "/admin/categories/create" */}
            <PrivateRoute exact path="/admin/categories/create">
                <CategoryCreate /> 
            </PrivateRoute>

            {/* private route "/admin/categories/edit/:id" */}
            <PrivateRoute exact path="/admin/categories/edit/:id">
                <CategoryEdit /> 
            </PrivateRoute>

            {/* private route "/admin/places" */}
            <PrivateRoute exact path="/admin/places">
                <PlacesIndex /> 
            </PrivateRoute>

            {/* private route "/admin/places/create" */}
            <PrivateRoute exact path="/admin/places/create">
                <PlaceCreate /> 
            </PrivateRoute>

            {/* private route "/admin/places/edit/:id" */}
            <PrivateRoute exact path="/admin/places/edit/:id">
                <PlaceEdit /> 
            </PrivateRoute>

            {/* private route "/admin/sliders" */}    
            <PrivateRoute exact path="/admin/sliders">
                <SlidersIndex />
            </PrivateRoute>

            {/* private route "/admin/sliders/create" */}  
            <PrivateRoute exact path="/admin/sliders/create">
                <SliderCreate />
            </PrivateRoute>

            {/* private route "/admin/users" */}    
            <PrivateRoute exact path="/admin/users">
                <UsersIndex />
            </PrivateRoute>

            {/* private route "/admin/users/create" */}    
            <PrivateRoute exact path="/admin/users/create">
                <UserCreate />
            </PrivateRoute>

            {/* private route "/admin/users/edit/:id" */}
            <PrivateRoute exact path="/admin/users/edit/:id">
                <UserEdit /> 
            </PrivateRoute>

            {/* route "/" */} 
            <Route exact path="/">
                <Home />
            </Route>

            {/* private route "/category/:slug" */}
            <Route exact path="/category/:slug">
                <WebCategoryShow />
            </Route>

            {/* private route "/places" */}
            <Route exact path="/places">
                <WebPlaceIndex />
            </Route>

            {/* private route "/places/:slug" */}
            <Route exact path="/places/:slug">
                <WebPlaceShow />
            </Route>

            {/* private route "/places/:slug/direction" */}
            <Route exact path="/places/:slug/direction">
                <WebPlaceDirection />
            </Route>

            {/* private route "/maps" */}
            <Route exact path="/maps">
                <MapsIndex />
            </Route>

            {/* private route "/maps" */}
            <Route exact path="/search">
                <WebSearch />
            </Route>

        </Switch>
    )
}

export default Routes