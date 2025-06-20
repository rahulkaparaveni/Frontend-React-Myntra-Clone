import { useSelector } from 'react-redux';
import HomeItem from '../components/HomeItem';

const Home = () => {
  const items = useSelector((store) => store.items);

  console.log(items);

  return (
    <main>
      <div className='items_container'>
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;
