import Counter from "./counter";

const Counters = ({ onReset, counters, onDecrement, onIncrement, onDelete }) => {
  return (
    <div className="container">
      <button onClick={onReset} className="btn btn-info m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter onDecrement={onDecrement} onIncrement={onIncrement} key={counter.id} onDelete={onDelete} counter={counter}>
          {/* <h1>Hello World</h1> * bu erga yozilgan barcha kodlar children hisoblandi */}
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
