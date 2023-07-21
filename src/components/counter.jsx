const Counter = ({ counter, onDecrement, onIncrement, onDelete }) => {
  const getBadgeClass = () => {
    let className = "badge m-2 bg-";
    className += counter.value === 0 ? "warning" : "danger";
    return className;
  };
  const formatNumber = () => {
    const { value } = counter;
    return value === 0 ? "zero" : value;
  };

  return (
    <div>
      <button onClick={() => onDecrement(counter)} className="btn btn-secondary m-2">
        Decrement
      </button>
      <span className={getBadgeClass()}>{formatNumber()}</span>
      <button onClick={() => onIncrement(counter)} className="btn btn-primary m-2">
        Increment
      </button>
      <button onClick={() => onDelete(counter.id)} className="btn btn-danger m-2">
        Delete
      </button>
    </div>
  );
};

export default Counter;

// state ga render og'lanadi agar state o'zgarsa render boshidan chizadi
// setstate ni Componets dan olinadi
