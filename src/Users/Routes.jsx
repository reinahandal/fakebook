import { Route } from "react-router-dom";
import Container from './Container';
import { ROUTE } from "./constants";

function Routes() {
    return [
        <Route key={ROUTE.ROOT} path={ROUTE.ROOT} exact>
            <Container/>
        </Route>
    ]
}

export default Routes;