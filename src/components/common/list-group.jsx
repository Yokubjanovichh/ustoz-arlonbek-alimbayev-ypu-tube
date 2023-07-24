import PropTypes from "prop-types";

const ListGroup = ({ category, onSelectItem, selectedItem, textKey = "name", valueKey = "_id" }) => {
  // default props 2 usul
  return (
    <ul className="list-group mx-2 my-4">
      {category.map((category) => {
        const current = category[valueKey] === selectedItem[valueKey];
        return (
          <li key={category[textKey]} onClick={() => onSelectItem(category)} className={`list-group-item ${current && "active"}`} aria-current="true">
            {category[textKey]} {current && <span>👍🏿</span>}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.propTypes = {
  textKey: PropTypes.string, // isRequired bu majburiy degani bizga esa majburiy wart emas
  valueKey: PropTypes.string,
  category: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
};

// ListGroup.defaultProps = {
//   valueKey: "_id",
//   textKey: "name",
// };  => default props 1 usul

export default ListGroup;
