import { IconButton } from '@mui/material';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Cart(props) {
  const { cart, total} = props;
  return (
    <div>
      <table className='bg-white p-4 border-2 border-red-300'>
        <tr className='border-red-300 '>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>item total</th>
          <th></th>
        </tr>
        {cart.map((item, indx) => {
          return (
            <tr >
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
        <tr><td className='px-8 py-3'>Total : {total}$ </td></tr>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
  total:state.cart.totalPrice
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
