/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { SAMPLE_URLS } from "./data/samplelinks";
import { StorageHelper } from './helpers/storage.helper';


function App() {
  // StorageHelper.reset();
  // SAMPLE_URLS.forEach(item => StorageHelper.insert(item));
 
  return (
    <HomePage title={'Launcher board'}/>
  );
}

export default App;
