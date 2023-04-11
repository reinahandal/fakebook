import { Route } from "react-router-dom";
import Container from "./Container";
import { ROUTES } from './constants';
import PostOverviewRoutes from './PostOverview/Routes';
import CreatePost from "./components/CreatePost";

function Routes() {
    return [
        <Route key={ROUTES.USER} path={ROUTES.USER}>
            <Container />
            <Route path={ROUTES.NEW} exact>
                <CreatePost />
            </Route>
        </Route>,
        <PostOverviewRoutes key="PostOverviewRoutes" />
    ]
}

export default Routes;