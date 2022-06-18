import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Home from '@mui/icons-material/Home';
import { connect } from 'react-redux';
import { getActiveCatagory } from '../store/catagories';
import { useEffect, useState } from 'react';
import { getCatagoriesFromAPI } from '../store/catagories';
import { getProductsFromAPI } from '../store/products';
function NavBar(props) {
  const {
    getCatagoriesFromAPI,
    getActiveCatagory,
    getProductsFromAPI,
    catagories,
    cart,
  } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {
    getCatagoriesFromAPI(value + 1);
  }, [value]);

  return (
    <div className='flex items-center w-auto justify-between'>
      <BottomNavigation
        showLabels
        value={99}
        className='w-full h-12 flex bg-transparent'
      >
        <BottomNavigationAction href='/' label={'Home'} icon={<Home />} />
        <BottomNavigationAction
          href='/cart'
          label={`cart(${cart.numberOfItems})`}
          icon={<ShoppingCartIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

const mapStateToProps = (state) => ({
  catagories: state.catagories,
  cart: state.cart,
});

const mapDispatchToProps = {
  getActiveCatagory,
  getCatagoriesFromAPI,
  getProductsFromAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
