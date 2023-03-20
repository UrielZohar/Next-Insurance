import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames';
import DeviceContext from './Context/DeviceContext';
import Header from './components/Header/Header';
import SearchMoviesSection from './components/SearchMoviesSection/SearchMoviesSection';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <DeviceContext.Provider value={{isMobile}}>
      <div className={classNames('app', {'mobile-view': isMobile})}>
        <Header />
        <SearchMoviesSection/>
        <Footer />
      </div>
    </DeviceContext.Provider>
  );
}

export default App;
