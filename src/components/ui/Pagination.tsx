type TPagination = {
  currentPage: number;
  pageCount: number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  currentPage,
  pageCount,
  setCurrentPage,
}: TPagination) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-textColor border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {pageCount?.map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => setCurrentPage(item)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                item === currentPage
                  ? "text-white bg-textColor"
                  : "text-textColor"
              } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {++idx}
            </button>
          </li>
        ))}
        <li>
          <button
           onClick={() => currentPage < pageCount?.length -1 && setCurrentPage(currentPage + 1)}
          className="flex items-center justify-center px-3 h-8 leading-tight text-textColor border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
