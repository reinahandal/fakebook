import { Route } from "react-router-dom";
import Container from "./Container";
import { ROUTE } from './constants';
import PostOverviewRoutes from './PostOverview/Routes';
import CreatePost from "./components/CreatePost";

function Routes(){
    return [
        <Route key={ROUTE.ROOT} path={ROUTE.ROOT}>
            <Container/>
            <Route path={ROUTE.NEW} exact>
                <CreatePost/>
            </Route>
        </Route>,
        <PostOverviewRoutes key={"PostOverviewRoutes"}/>
    ]
}

export default Routes;