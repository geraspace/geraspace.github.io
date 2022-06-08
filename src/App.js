import './App.css';
import MainInfo from './components/MainInfo';
import MainAbout from './components/about';
import MainInterests from './components/MainInterests';
import MainFooter from './components/MainFooter';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <MainInfo/>
      <MainAbout/>
      <MainInterests/>
      <MainFooter/>
    </div>
  );
}

export default App;