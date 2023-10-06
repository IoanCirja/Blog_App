import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Write from './components/Write';
import Single from './components/Single';
import Home from './components/Home';


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <div> This is Home!</div>,
    },
    {
      path : "/register",
      element : <Register/>,
    },
    {
      path : "/login",
      element : <Login/>,
    }

  ]
);

function App() {
  return (
    <button>
      <RouterProvider router={router}/>
    </button>
  );
}

export default App;
