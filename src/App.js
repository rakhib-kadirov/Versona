import './App.css';
import "@fontsource/poppins"
import { Header } from './components/Header/header';
import { Main_Block_1 } from './components/Main/Block_1';
import { Main_Block_2 } from './components/Main/Block_2';
import { Main_Block_3 } from './components/Main/Block_3';
import { Main_Block_4 } from './components/Main/Block_4';
import { Main_Block_5 } from './components/Main/Block_5';
import { Main_Block_6 } from './components/Main/Block_6';
import { Footer } from './components/Main/Footer';

function App() {
  return (
    <main className='App'>
      <Header />
      <Main_Block_1 />
      <Main_Block_2 />
      <Main_Block_3 />
      <Main_Block_4 />
      <Main_Block_5 />
      <Main_Block_6 />
      <Footer />
    </main>
  );
}

export default App;
