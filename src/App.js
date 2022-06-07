import './App.css';
import MainInfo from './components/MainInfo';
import MainAbout from './components/about';
import MainInterests from './components/MainInterests';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <div>
      <MainInfo/>
      <MainAbout/>
      <MainInterests/>
      <MainFooter/>
    </div>
  );
}

export default App;