import React from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import "./App.css";

// import './App.css';

function App() {
  //  const [persons,setPersons]=React.useState(["Zahid","Numan","Ali"]);
  return (
    // <div className="App">
    //   <button onClick={()=>{
    //     let ps =[...persons];
    //     ps.sort();
    //     setPersons(ps);
    //   }}>sort person</button>
    //  <ul>
    //   {persons.map((person,index)=>(
    //   <li key={index}>{person}</li>))}
    //  </ul>
    // </div>

    <div className="container">
      <h1><i className="fa fa-home"></i> hello from the react componemnt</h1>
      <Button>click me</Button>
      <p>khdkghghfdijdk ghdhgkdg gghgkdhgkdhsgsdgiughdfgh kdfhgksdhgkdghd gd</p>

    </div>
    
  );
}

export default App;




//     react bootstrape example



// import React, { useState } from 'react';

// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// import './App.css';

// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };

// const App = () => (
//   <Container className="p-3">
//     <Container className="p-5 mb-4 bg-light rounded-3">
//       <h1 className="header">Welcome To React-Bootstrap</h1>
//       <ExampleToast>
//         We now have Toasts
//         <span role="img" aria-label="tada">
//           🎉
//         </span>
//       </ExampleToast>
//     </Container>
//   </Container>
// );

// export default App;

