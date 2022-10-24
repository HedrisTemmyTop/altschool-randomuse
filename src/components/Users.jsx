import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../styles/Users.module.css";
import Pagination from "./Pagination";
import User from "./User";
const Users = () => {
  const [state, setState] = useState([]);
  const [perPage, setPerpage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => {
        setState(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentUser = state.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    if (currentPage === state.length) setCurrentPage(1);
    else setCurrentPage((prev) => prev + 1);
  };
  const previousPage = () => {
    if (currentPage === 1) setCurrentPage(1);
    else setCurrentPage((prev) => prev - 1);
  };
  return (
    <React.Fragment>
      <User users={currentUser} loading={loading} />
      {loading ? null : (
        <Pagination
          perPage={perPage}
          totalPage={state.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={previousPage}
          curPage={currentPage}
        />
      )}
    </React.Fragment>
  );
};

export default Users;
