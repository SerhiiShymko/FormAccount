import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrdersById } from 'api';

const SingleOrderPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrderById() {
      try {
        const fetchedOrder = await fetchOrdersById(orderId);
        setOrder(fetchedOrder);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrderById();
  }, [orderId]);

  return <div>{order && <div>{order.regNumber}</div>}</div>;
};

export default SingleOrderPage;
