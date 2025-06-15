const LoadingSpinner = () => {
  console.log(`IN loading spinner fetching`);
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-border spinner'
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
