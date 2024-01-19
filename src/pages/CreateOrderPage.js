import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BookForm } from 'components/BookForm/BookForm';
import { createOrder } from 'api';

const CreateOrderPage = () => {
  const addOrder = async newOrder => {
    try {
      await createOrder(newOrder);
      toast.success('Order create');
    } catch (error) {
      toast.error('Error');
    }
  };

  return (
    <div>
      <div>
        <Link to="/orders">
          <AiOutlineArrowLeft />
          Back
        </Link>
      </div>
      <BookForm onAdd={addOrder} />
    </div>
  );
};

export default CreateOrderPage;
