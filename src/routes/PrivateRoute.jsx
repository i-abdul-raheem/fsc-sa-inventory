import { AuthService } from "../services";
import { Login } from "../pages";

const isAuthenticated = AuthService.isAuthenticated();

const privateRoute = (Component) => isAuthenticated ? <Component /> : <Login />;

export default privateRoute;
