// Router Component는 어떤 라우터들을 보여줄지 다루는 Component 이다 
import propTypes from "prop-types";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed} />
    </>
)

const LoggedOutRoutes = () =>(
    <>
        <Route exact path="/" component={Auth} />
    </>
)

const AppRouter = ({ isLoggedIn }) => (
    <Router>
        <Switch>
            {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </Switch>
    </Router>
)

AppRouter.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
}

export default AppRouter;