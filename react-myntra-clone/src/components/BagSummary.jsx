import { useSelector } from 'react-redux';

const BagSummary = () => {
  const bagItemIds = useSelector((store) => store.bag);
  const bagItems = useSelector((store) => store.items);

  const CONVENIENCE_FEE = 99;
  const totalItems = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  const finalItems = bagItems.filter((bagItem) =>
    bagItemIds.includes(bagItem.id)
  );
  finalItems.forEach((bagItem) => (totalMRP += bagItem.original_price));
  finalItems.forEach(
    (bagItem) =>
      (totalDiscount += bagItem.original_price - bagItem.current_price)
  );
  finalPayment += totalMRP - totalDiscount + CONVENIENCE_FEE;

  return (
    <div className='bag-summary'>
      <div className='bag-details-container'>
        <div className='price-header'>PRICE DETAILS ({totalItems} Items) </div>
        <div className='price-item'>
          <span className='price-item-tag'>Total MRP</span>
          <span className='price-item-value'>₹{totalMRP}</span>
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Discount on MRP</span>
          <span className='price-item-value priceDetail-base-discount'>
            -₹{totalDiscount}
          </span>
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Convenience Fee</span>
          <span className='price-item-value'>₹{CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div className='price-footer'>
          <span className='price-item-tag'>Total Amount</span>
          <span className='price-item-value'>₹{finalPayment}</span>
        </div>
      </div>
      <button className='btn-place-order'>
        <div className='css-xjhrni'>PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
