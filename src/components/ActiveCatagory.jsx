import { connect } from 'react-redux';

const ActiveCatagory = (props) => {
  const { active } = props;
  return (
    <div className=' bg-white shadow-md shadow-black flex flex-col h-auto p-4 rounded-md'>
      <h1 className='font-bold'>{active?.name}</h1>
      <p>{active?.desc}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  active: state.catagories.activeCatagory,
});

export default connect(mapStateToProps)(ActiveCatagory);
