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
  const { getActiveCatagory, catagories } = props;
  const [value, setValue] = useState(0);
  useEffect(() => {
    getActiveCatagory(value + 1);
    console.log(catagories.activeCatagory);
  }, [value]);

  return (
    <div className='w-[60%]'>
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
        <BottomNavigationAction label='cart' icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </div>
  );
}

const mapStateToProps = (state) => ({
  catagories: state.catagories,
});

const mapDispatchToProps = {
  getActiveCatagory,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
