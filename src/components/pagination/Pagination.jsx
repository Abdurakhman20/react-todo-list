import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const classes = props.className;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav className={classes} aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          {pages.map((page) => (
            <li key={"page_" + page}>
              <a
                className={
                  "px-3 py-2 cursor-pointer leading-tight text-gray-500  border border-gray-300  hover:text-gray-700" +
                  (page === currentPage
                    ? " bg-blue-500 hover:bg-blue-400"
                    : " bg-white hover:bg-gray-100")
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
