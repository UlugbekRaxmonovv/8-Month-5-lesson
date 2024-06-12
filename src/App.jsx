import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Modul from './components/Modul/Modul';
const App = () => {
  const [islogin, setIsLogin] = useState(false);
  document.body.style.overflow =  islogin ? "hidden" : "auto"


  return (
    <div>
      <Navbar />
      <Main data={setIsLogin} />
      <Footer />
      {
        islogin ?    <Modul btn1={setIsLogin} >
        <div>
         <h2>Login</h2>
         <input type="text" />
         <input type="text" />
         <input type="text" />
         <button>Submit</button>
        </div>
         </Modul>
         :
         <></>
      }
   

      
    </div>
  );
}

export default App;
