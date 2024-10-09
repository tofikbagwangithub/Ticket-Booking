import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import Table from './components/Table';
import Footer from './components/Footer';


function App() {


  return (
    <div className='bg-[url(../src/assets/tofik02.png)] bg-cover bg-no-repeat'>
      <Header/>
      <section className='h-screen'> 
        <Book/>
        <Table/>
      </section>
      <Footer/>
    </div>
  )
};

export default App;
