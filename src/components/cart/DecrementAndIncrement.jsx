import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../counter/counterSlice";

const DecrementAndIncrement = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  //   console.log(count);
  //   console.log(dispatch);

  return (
    <div className="bg-gray-light flex items-center justify-between w-32 px-4 py-3">
      <button
        className="text-text-body hover:text-primary font-bold standard-smooth"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className="font-bold text-sm">{count}</span>
      <button
        className="text-text-body hover:text-primary font-bold standard-smooth"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default DecrementAndIncrement;
