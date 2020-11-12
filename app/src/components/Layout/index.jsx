import Search from "../Search";

const Layout = ({
  children,
}) => (
  <>
    <Search />
    <main>
      <section>{children}</section>
    </main>
    <footer>Copyright 2020</footer>
  </>
);

export default Layout;
