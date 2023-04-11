import { Route } from "react-router-dom";
import Container from './Container';
import { ROUTES } from "./constants";



// Could you consider React.lazy() for code splitting?
// And for simple Domain routes, this should return an array of routes instead.
function Routes() {
    return [
        <Route key={ROUTES.ROOT} path={ROUTES.ROOT} exact>
            <Container />
        </Route>
    ]
}

export default Routes;