import logoMeli from "../../assets/images/Logo_ML.png";
import logoMeli2 from "../../assets/images/Logo_ML@2x.png";

const Search = ({ onSubmit, setSearchValue, searchValue }) => (
  <header>
    <nav>
      <div className="logo-container">
        <a href="/">
          <img
            className="logo"
            srcSet={`${logoMeli}, ${logoMeli2} 2x`}
            src={logoMeli2}
            alt="Meli"
          />
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
