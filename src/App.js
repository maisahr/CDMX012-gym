import { Header } from './components/Header/Header';
import { CapsulesStatus } from './components/CapsulesStatus/CapsulesStatus';
import { AllCapsules } from './components/AllCapsules/AllCapsules';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <CapsulesStatus></CapsulesStatus>
      <AllCapsules></AllCapsules>
      <Footer></Footer>
    </>
  );
}

export default App;
