import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../main/Main'
import Post from '../post/Post'
import Post1 from '../post1/Post1'
import Login from '../login/Login'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< Main />}></Route>
            <Route path="/post" element={< Post />}></Route>
            <Route path="/login" element={< Login />}></Route>
            <Route path="/post1" element={< Post1 />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
