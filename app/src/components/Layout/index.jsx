import Search from "../Search";

const Layout = ({
  children,
}) => (
  <>
    <Search />
    <section>{children}</section>
    <footer>Copyright 2020</footer>
  </>
);

export default Layout;
