import './Pagination.scss'

const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button className="pagination__btn">
            <img src="img/array-left.svg" alt="#" className="pagination__img"/>
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            1
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            2
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            3
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            4
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            ...
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            N
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__btn">
            <img src="img/array-right.svg" alt="#" className="pagination__img"/>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
