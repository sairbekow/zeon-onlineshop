import './Pagination.scss'

const Pagination = ({pageCount, currentPage, setCurrentPage}) => {

  const onPagination = (step) => {
    setCurrentPage(step)
  }

  const onMoveToNext = (step) => {
    if (step < pageCount) {
      setCurrentPage(step + 1)
    }
  }

  const onMoveToPrev = (step) => {
    if (step > 1) {
      setCurrentPage(step - 1)
    }
  }

  const Steps = () => {
    const lastStep = pageCount
    const visibleSteps = 4
    const firstVisibleStep = currentPage < (visibleSteps - 1) ? 0 : currentPage - (visibleSteps - 1)
    const lastVisibleStep = firstVisibleStep + visibleSteps

    const pageCountArray = Array.from({length: pageCount})
      .map((el, i) => i + 1)
      .slice(firstVisibleStep, lastVisibleStep)

    return (
      <>
        {
          pageCountArray.map((step, index) =>
            (
              <li key={index} className={`pagination__item ${step === currentPage ? 'pagination__item_active' : ''}`}>
                <button className="pagination__btn" onClick={() => onPagination(step)}>
                  {step}
                </button>
              </li>
            ))
        }
        {
          currentPage <= lastStep - (visibleSteps - 2) && (
            <li className="pagination__item">
              <button className="pagination__btn">
                ...
              </button>
            </li>)
        }
        {
          currentPage <= lastStep - (visibleSteps - 2) && (
            <li className={`pagination__item ${lastStep === currentPage ? 'pagination__item_active' : ''}`}>
              <button className="pagination__btn" onClick={() => onPagination(pageCount)}>
                {pageCount}
              </button>
            </li>)
        }
      </>)
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button className="pagination__btn" onClick={() => onMoveToPrev(currentPage)}>
            <img src="img/array-left.svg" alt="#" className="pagination__img"/>
          </button>
        </li>
        <Steps/>
        <li className="pagination__item">
          <button className="pagination__btn" onClick={() => onMoveToNext(currentPage)}>
            <img src="img/array-right.svg" alt="#" className="pagination__img"/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination


