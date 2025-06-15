import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);

  const isItemAddedToBag = bagItems.includes(item.id);

  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className='item_container'>
      <img className='item_image' src={item.image} />
      <div className='rating'>
        <span>
          {item.rating.stars}⭐ | {item.rating.count}
        </span>
      </div>
      <div className='company_name'>{item.company}</div>
      <div className='item_name'>{item.item_name}</div>
      <div className='price'>
        <span className='current_price'>Rs {item.current_price}</span>
        <span className='original_price'>Rs {item.original_price}</span>
        <span className='discount'>{`${item.discount_percentage} % OFF`}</span>
      </div>
      {!isItemAddedToBag ? (
        <button
          type='button'
          className=' btn btn-success btn-add-to-bag'
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      ) : (
        <button
          type='button'
          className=' btn btn-danger btn-add-to-bag'
          onClick={handleRemove}
        >
          Remove from Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
