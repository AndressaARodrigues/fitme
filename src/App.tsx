import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import Login from './pages/Login';
import Register from './pages/Register';
import Login2 from './pages/Form';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
