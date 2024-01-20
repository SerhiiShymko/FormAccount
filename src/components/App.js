import { Toaster } from 'react-hot-toast';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import OrdersPage from 'pages/OrdersPage';
import CreateOrderPage from 'pages/CreateOrderPage';
import SingleOrderPage from 'pages/SingleOrderPage';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* <Route path="/" element={<HomePage />}></Route> */}
          <Route path="create" element={<CreateOrderPage />}></Route>
          <Route path="orders" element={<OrdersPage />}></Route>
          <Route path="orders/:orderId" element={<SingleOrderPage />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};
