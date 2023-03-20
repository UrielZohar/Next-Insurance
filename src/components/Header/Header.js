import nextMoviesLogo from '../../assets/images/next-movies.png'; 
import './Header.scss';

const Header = () => 
  (<header className="app-header">
    <div className='header-logo'>
      <img src={nextMoviesLogo} alt='Next Movies' />;
    </div>
  </header>)

export default Header;