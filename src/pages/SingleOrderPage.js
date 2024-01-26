import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchOrdersById } from 'api';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SingleOrderPage = () => {
  const location = useLocation();

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

  const backLinkHref = location?.state?.from ?? '/orders';

  return (
    <div>
      <div>
        <Link to={backLinkHref}>
          <AiOutlineArrowLeft />
          Back
        </Link>
      </div>
      {order && <div>{order.regNumber}</div>}
    </div>
  );
};

export default SingleOrderPage;
