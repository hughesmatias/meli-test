import logoMeli from "../../assets/images/Logo_ML.png";

const Search = ({ onSubmit, setSearchValue, searchValue }) => (
  <header>
    <nav>
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={logoMeli} alt="" />
        </a>
      </div>
      <form className="form-search" onSubmit={onSubmit}>
        <div className="row">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={setSearchValue}
            value={searchValue}
          />
          <button type="submit" />
        </div>
      </form>
    </nav>
  </header>
);

export default Search;
