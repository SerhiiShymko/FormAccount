import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import OrdersPage from 'pages/OrdersPage';
import CreateOrderPage from 'pages/CreateOrderPage';
import SingleOrderPage from 'pages/SingleOrderPage';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="create" element={<CreateOrderPage />}></Route>
          <Route path="orders" element={<OrdersPage />}></Route>
          <Route path="orders/:orderId" element={<SingleOrderPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
