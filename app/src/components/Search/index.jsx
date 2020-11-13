import logoMeli from '../../assets/images/Logo_ML.png';

const Search = () => (
  <header>
    <nav>
      <div className="logo-container">
        <img className="logo" src={logoMeli} alt=""/>
      </div>
      <form className="form-search">
        <div className="row">
          <input type="text" placeholder="Nunca dejes de buscar" />
          <button type="submit" />
        </div>
      </form>
    </nav>
  </header>
);

export default Search;
