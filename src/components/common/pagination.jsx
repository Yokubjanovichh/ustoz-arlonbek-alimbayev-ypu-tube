import _ from "lodash";
const Pagination = ({ countItem, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(countItem / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <ul className="pagination pagination-sm mx-2 my-4">
      {pages.map((page) => (
        <li key={page} className={`page-item ${currentPage === page && "active"}`} aria-current="page">
          <a className="page-link" href="#1" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
