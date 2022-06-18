import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ActiveCatagory from './ActiveCatagory';
import { connect } from 'react-redux';
import { increment } from '../store/cart';
import { addItem } from '../store/cart';
import SimpleCart from './SimpleCart';
import { decrementProduct } from '../store/products';
import { When } from 'react-if';
import { useEffect } from 'react';
import { getCatagoriesFromAPI } from '../store/catagories';
import { getProductsFromAPI } from '../store/products';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DevicesIcon from '@mui/icons-material/Devices';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const Hero = (props) => {
  const [value, setValue] = React.useState(0);

  const { getProductsFromAPI, getCatagoriesFromAPI } = props;
  useEffect(() => {
    getProductsFromAPI();
    getCatagoriesFromAPI(value + 1);
  }, [getProductsFromAPI, value]);

  return (
    // Container
    <div className='flex flex-col items-center py-10 px-6 w-full h-full'>
      <SimpleCart />
      <div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className='w-full h-12 flex bg-white my-4 rounded-md'
        >
          <BottomNavigationAction label='food' icon={<FastfoodIcon />} />
          <BottomNavigationAction label='cloths' icon={<CheckroomIcon />} />
          <BottomNavigationAction label='electronics' icon={<DevicesIcon />} />
        </BottomNavigation>
      </div>
      <ActiveCatagory />
      <div className='flex flex-wrap px-6'>
        {props.products?.map((item, index) => {
          if (item.catagoryId === props.active?.id) {
            return (
              <Card
                key={index}
                className='shadow-md shadow-black flex w-60 h-auto m-10'
              >
                <Box className='flex flex-col items-center justify-center'>
                  <CardMedia
                    className='w-full h-52 object-cover'
                    component='img'
                    image={item.image}
                  />
                  <CardContent
                    className='flex flex-col items-center'
                    sx={{ flex: '1 0 auto' }}
                  >
                    <Typography component='div' variant='h5'>
                      {item.name}
                    </Typography>
                    <Typography component='div' variant='h6'>
                      {item.desc}
                    </Typography>
                    <Typography component='div' variant='h6'>
                      {item.price}$
                    </Typography>
                    <Typography component='div' variant='h6'>
                      stock: {item.inventory}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', px: 1, py: 1 }}
                  >
                    <IconButton
                      aria-label='Add to cart'
                      onClick={() => {
                        if (item.inventory > 0) {
                          props.increment();
                          props.addItem(item);
                          props.decrementProduct(item.id);
                        }
                      }}
                    >
                      <AddShoppingCartIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <When condition={item.inventory === 0}>
                      <p className='text-red-600'> out of stock </p>
                    </When>
                  </Box>
                </Box>
              </Card>
            );
          } else {
            return '';
          }
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  active: state.catagories.activeCatagory,
});

const mapDispatchToProps = {
  increment,
  decrementProduct,
  getProductsFromAPI,
  addItem,
  getCatagoriesFromAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
