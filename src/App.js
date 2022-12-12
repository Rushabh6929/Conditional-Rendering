// import logo from './logo.svg';
import './App.css';
import{Home} from './components/Home'
import{Education} from'./components/Education'
import{Certificate} from'./components/Certificate'
import {Skills} from'./components/Skills'
import {Contacts} from'./components/Contacts'
import {Feedback} from'./components/Feedback'
import{Externalcss} from'./components/Externalcss'
import {Internalcss} from'./components/Internalcss'
import {Inlinecss} from'./components/Inlinecss'


function App() {

  const id = 'Rushabh';
  const Password = 'Rushabh123';
  

  if (id === 'Rushabh' && Password === 'Rushabh1234')

    {
    return (
      <>
      <h1 style={{color:"green", textAlign:"center", backgroundColor:"yellow",}}>
        Hi Rushabh
      </h1>

</>
    )
    }
else {
      return (
        <>
        <h1 style={{color:"black", textAlign:"center", backgroundColor:"red",}}>
          Please Login Your New User</h1>

          </>
      )
    }
  }


  
  // function App()  {
  //   const yourAge = '17';
  //   if (yourAge <=18)
  //   {
  //   return (
  //     <h2 style={{ color:"Red", backgroundColor:"Pink", textAlign:'center', fontWeight:"Lighter",}}>
  //     Chotu
  //   </h2>
  //         )}
  //         else{
  //           return(
  //             <><h2 style={{ color:"blue", backgroundColor:"skyblue", textAlign:'center', fontWeight:"bolder",}}> Bhaiya</h2>
  //             </>
              
  //           )
  //         }
  // }


    <div className='container'>
<Home/>
<Education/>
<Certificate/>
<Skills/>
<Contacts/>
<Feedback/>
<Externalcss/>
<Internalcss/>
<Inlinecss/>



    </div>

  
    
  

export default App;
