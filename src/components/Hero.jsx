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

const Hero = (props) => {
  return (
    // Container
    <div className='flex flex-col items-center py-10 px-6 w-full h-full'>
      <SimpleCart />
      <ActiveCatagory />
      {/* Card */}
      <div className='flex flex-wrap py-10 px-6'>
        {props.products.map((item, index) => {
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
                    image={item.img}
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
                  </CardContent>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', px: 1, py: 1 }}
                  >
                    <IconButton
                      aria-label='Add to cart'
                      onClick={() => {
                        props.increment();
                        props.addItem(item);
                      }}
                    >
                      <AddShoppingCartIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
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

const mapDispatchToProps = { increment, addItem };

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
