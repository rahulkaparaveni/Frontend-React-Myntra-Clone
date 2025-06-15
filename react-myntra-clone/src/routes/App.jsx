import { Outlet } from 'react-router-dom';
import FetchItems from '../components/FetchItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';

let count = 0;
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  console.log(`App rendered ${++count} times`);
  console.log(`fetching`, fetchStatus.fetching);

  return (
    <>
      <Header />
      <FetchItems />

      {fetchStatus.fetchDone ? <Outlet /> : <LoadingSpinner />}
      <Footer />
    </>
  );
}

export default App;
