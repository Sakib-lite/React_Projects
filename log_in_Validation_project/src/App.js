import React ,{useState ,useEffect} from 'react';
import './App.css';
import Card from './components/Card/Card'
import InputForm from './components/Form/InputForm'
import Nav from './components/Nav/Nav'
import AuthContext from './Context/AuthContext'




function App() {
const [isLoggedIn,setIsLoggedIn]=useState(false)

useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  if (storedUserLoggedInInformation === '1') {
    setIsLoggedIn(true);
  }
}, []);
  const saveData=(loginData)=>{

if(loginData.username.trim().length> 4 && loginData.password.trim().length)
setIsLoggedIn(true)
localStorage.setItem('isLoggedIn', '1');
  }
  
  const LogOutHandler=()=>{
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn');
  }
  
  return (
   <AuthContext.Provider value={{
     isLoggedIn: isLoggedIn,
onLogOut:LogOutHandler
   }}>

<Card>
{isLoggedIn && (<Nav/>)}
 
 {!isLoggedIn && ( <InputForm onReceiveData={saveData}/>)}
 
</Card>


   </AuthContext.Provider>
  );
}

export default App;
