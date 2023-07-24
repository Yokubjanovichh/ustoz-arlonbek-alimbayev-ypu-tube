const Prefix = ({ count, data }) => {
  return (
    <p className="h5 m-2 my-4">
      Bizda {count} ta <b>{(data._id && data.name) || "Mahsulot"}</b> bor
    </p>
  );
};

export default Prefix;
