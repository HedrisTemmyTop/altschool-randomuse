import React from "react";
import classes from "../styles/Users.module.css";
const Pagination = ({
  perPage,
  totalPage,
  paginate,
  nextPage,
  prevPage,
  curPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={classes.Buttons}>
        <button
          onClick={prevPage}
          className={[classes.Special, classes.Prev].join(" ")}
        >
          prev
        </button>
        {pageNumbers.map((number, i) => {
          return (
            <button
              style={
                number === curPage
                  ? { backgroundColor: "#1e74fd", color: "#fff" }
                  : null
              }
              onClick={() => paginate(number)}
              key={i}
            >
              {number}
            </button>
          );
        })}
        <button
          onClick={nextPage}
          className={[classes.Special, classes.Next].join(" ")}
        >
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
