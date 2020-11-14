import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Search from "../Search";

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState(location.search.split("?search=")[1] || "");
  const onSubmit = (event) => {
    event.preventDefault();
    history.push('/items?search='+ searchValue);
  };

  return (
    <>
      <Search
        onSubmit={onSubmit}
        searchValue={searchValue}
        setSearchValue={(event) => setSearchValue(event.target.value)}
      />
      <main>
        <section>{children}</section>
      </main>
      <footer>Copyright 2020</footer>
    </>
  );
};
export default Layout;
