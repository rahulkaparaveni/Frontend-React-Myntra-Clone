import BagItem from '../components/BagItem';
import BagSummary from '../components/BagSummary';
import { useSelector } from 'react-redux';

const Bag = () => {
  console.log('Bag rendered')
  const bagItemIds = useSelector((store) => store.bag);
  const bagItems = useSelector((store) => store.items);

  const finalItems = bagItems.filter((bagItem) =>
    bagItemIds.includes(bagItem.id)
  );

  return (
    <>
      <main>
        <div className='bag-page'>
          <div className='bag-items-container'>
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
