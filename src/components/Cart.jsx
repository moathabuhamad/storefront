import { IconButton } from '@mui/material';
import { connect } from 'react-redux';
import { removeItem, clearCart } from '../store/cart';
import { incrementProduct } from '../store/products';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Cart(props) {
  const { cart, total } = props;
  return (
    <div>
      <table className='bg-white p-4 border-2 border-red-300'>
        <thead>
          <tr className='border-red-300 '>
            <th className='px-8 py-3'>Product</th>
            <th className='px-8 py-3'>Quantity</th>
            <th className='px-8 py-3'>Price</th>
            <th className='px-8 py-3'>item total</th>
            <th className='px-8 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, indx) => {
            return (
              <tr key={indx}>
                <td className='px-8 py-3'>{item.name}</td>
                <td className='px-8 py-3'>{item.quantity}</td>
                <td className='px-8 py-3'>{item.price}</td>
                <td className='px-8 py-3'>{item.price * item.quantity}</td>
                <td>
                  {' '}
                  <IconButton
                    onClick={() => {
                      props.removeItem(item.id);
                      props.incrementProduct(item.id);
                    }}
                  >
                    <RemoveCircleIcon className='bg-red' />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className='px-8 py-3'>Total : {total}$ </td>
          </tr>
        </tfoot>
      </table>

      <form className='grid grid-cols-2 gap-2 my-2'>
        <input type='text' placeholder='Firstname' />
        <input type='text' placeholder='Lastname' />
        <input type='email' placeholder='email' />
        <input type='number' placeholder='Mobile Number' />
        <input type='number' placeholder='Credit Card Number' />
        <input type='text' placeholder='Address' />
        <button
          type='submit'
          className='bg-white'
          onClick={() => {
            props.clearCart();
          }}
        >
          Checkout
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
  total: state.cart.totalPrice,
});

const mapDispatchToProps = {
  removeItem,
  incrementProduct,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
