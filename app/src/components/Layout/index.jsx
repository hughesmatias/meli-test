import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ItemContext from "../../utils/contexts/Item";
import Search from "../Search";

const Layout = ({ children }) => {
  const history = useHistory();
  const itemContext = useContext(ItemContext);
  const onSubmit = (event) => {
    event.preventDefault();
    history.push('/items?search='+ itemContext.search);
  };

  return (
    <>
      <Search
        onSubmit={onSubmit}
        searchValue={itemContext.search}
        setSearchValue={(event) => itemContext.setSearch(event.target.value)}
      />
      <main>
        <section>{children}</section>
      </main>
    </>
  );
};
export default Layout;
