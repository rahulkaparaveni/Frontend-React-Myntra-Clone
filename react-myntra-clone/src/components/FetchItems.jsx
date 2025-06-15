import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../store/fetchStatusSlice';
import { itemsActions } from '../store/itemsSlice';

let count = 0;
let cleanUpCount = 0;

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`FetchItems rendered ${++count} times`);
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.markFetchingStarted());
    fetch('http://localhost:3000/items', { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchActions.markFetchingFinished());
        dispatch(fetchActions.markFetchDone());
        dispatch(itemsActions.addInitialItems(data.items));
      });

    return () => {
      console.log(`FetchItems cleanup called ${cleanUpCount} times`);
      controller.abort();
    };
  }, []);

  return <></>;
};
export default FetchItems;
