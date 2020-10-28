import React, {useState} from 'react'
import style from './Pagination.module.css'

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionNumber = portionNumber * portionSize

  return (
    <div className={style.numbers}>
      {portionNumber > 1 && <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>PREV</button>}
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionNumber)
        .map(page => {
          return <button className={currentPage === page ? style.activePage : style.ordinaryPage}
                         key={page}
                         onClick={() => {
                           onPageChanged(page)
                         }}>{page}</button>
        })}
      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>NEXT</button>}
    </div>
  )
}

export default Pagination