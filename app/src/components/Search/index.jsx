import logoMeli from "../../assets/images/Logo_ML.png";

const Search = ({ onSubmit, setSearchValue, searchValue }) => (
  <header>
    <nav>
      <div className="logo-container">
        <img className="logo" src={logoMeli} alt="" />
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
