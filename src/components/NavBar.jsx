import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DevicesIcon from '@mui/icons-material/Devices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';
import { getActiveCatagory } from '../store/catagories';
import { useEffect, useState } from 'react';


function NavBar(props) {
  const { getActiveCatagory, catagories, cart } = props;
  const [value, setValue] = useState(0);
  useEffect(() => {
    getActiveCatagory(value + 1);
  }, [value]);


  return (
    <div className='flex items-center w-auto justify-between'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='w-full h-12 flex bg-transparent'
      >
        <BottomNavigationAction label='food' icon={<FastfoodIcon />} />
        <BottomNavigationAction label='cloths' icon={<CheckroomIcon />} />
        <BottomNavigationAction label='electronics' icon={<DevicesIcon />} />
      </BottomNavigation>
      <BottomNavigation
        showLabels
        value={99}
        className='w-full h-12 flex bg-transparent'
      >
        <BottomNavigationAction
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
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
