import logo from './logo.svg';
import './App.css';

import { ResizeClassComponent } from './components/resize/ResizeClassComponent';
import { ResizeComponent } from './components/resize/ResizeComponent';

function App() {
  return (
    <div className="App">
      {/* <ResizeClassComponent/> */}
      <ResizeComponent/>
    </div>
  );
}

export default App;
