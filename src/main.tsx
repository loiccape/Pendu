
import ReactDOM from 'react-dom/client'

import Home from './pages/Home.tsx'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Game from './pages/Game.tsx';
import GameOver from './pages/GameOver.tsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/game",
    element: <Game/>
  },
  {
    path:"/game-over/:result",
    element: <GameOver/>
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router}/>

)
