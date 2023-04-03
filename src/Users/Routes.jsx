import { Route } from "react-router-dom";
import Container from './Container';
import { ROUTES } from "./constants";

function Routes() {
    return (
        <Route path={ROUTES.ROOT} exact>
            <Container/>
        </Route>
    )
}

export default Routes;