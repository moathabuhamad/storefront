import { IconButton } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { removeItem } from '../store/cart';

const SimpleCart = (props) => {
  return (
    <div className=' font-semibold text-white bg-transparent rounded-md shadow-black shadow-md p-3 fixed right-0 top-[47px]'>
      {props.cart.map((item, index) => {
        return (
          <div key={index} >
            <p>
              {item.name} {item.quantity}
              <IconButton onClick={() => props.removeItem(item.id)}>
                <RemoveCircleIcon className='bg-red' />
              </IconButton>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

const mapDispatchToProps = { removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
