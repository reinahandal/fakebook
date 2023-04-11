import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import UsersRoutes from "./Users/Routes";
import PostsRoutes from './Posts/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ROUTES } from "./Users/constants";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  }
})

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route path="/" exact>
            <Redirect to={ROUTES.ROOT} />
          </Route>
          <UsersRoutes key={"UsersRoutes"} />
          <PostsRoutes key={"PostsRoutes"} />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
