const Container = (props) => {
  return (
    <div className='bg-white mx-auto max-w-7xl px-6 lg:px-8'>
      {props.children}
    </div>
  );
};

export default Container;
