/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { SAMPLE_URLS } from "./data/samplelinks";
import { StorageHelper } from './helpers/storage.helper';
import { GlobalWrapper } from "./components/GlobalWrapper";

function App() {
  // StorageHelper.reset();
  // SAMPLE_URLS.forEach(item => StorageHelper.insert(item));
const warning = process.env.NODE_ENV === 'development' ? '| Development' : 'App Build';
  return (
    <GlobalWrapper title={'Mini Launcher' + ' ' + warning}>
      <HomePage title={'Launcher board'}/>
    </GlobalWrapper>
  );
}

export default App;
