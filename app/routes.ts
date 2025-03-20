import LandingPage from './landing';
import CustomersPage from './(dashboard)/customers/page';
import ProductsPage from './(dashboard)/page';
import LoginPage from './login/page';

// Add your routes here
const routes = {
  '/': LandingPage,
  '/page': ProductsPage, // Adjust the path if necessary
  '/customers': CustomersPage,
  '/login': LoginPage,
};

export default routes;