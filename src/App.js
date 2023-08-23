import './App.css';
import FrontComponent from './components/FrontComponent';
import VideoComponent from './components/VideoComponent';
import FeaturedComponent from './components/Featured';
import About from './components/About';
function App() {
  return (
    <div className="App">
     <FrontComponent />
     <FeaturedComponent/>
     <hr size='40px' className="Divider"></hr>
     <VideoComponent />
     <About/>
    </div>
    
  );
}


export default App;
