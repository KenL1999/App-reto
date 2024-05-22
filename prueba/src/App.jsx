// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// Third .........

// App.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import UploadPage from './pages/UploadPage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = async (email, password) => {
//     // Simulate login logic
//     if (email === 'admin@example.com' && password === 'password') {
//       setIsLoggedIn(true);
//     } else {
//       throw new Error('Invalid email or password');
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage handleLogin={handleLogin} />} />
//         <Route path="/upload" element={isLoggedIn ? <UploadPage /> : <Navigate to="/login" />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// ......................
// App.jsx
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import UploadPage from './pages/UploadPage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = async (email, password) => {
//     // Simulate login logic
//     if (email === 'admin@example.com' && password === 'password') {
//       setIsLoggedIn(true);
//     } else {
//       throw new Error('Invalid email or password');
//     }
//   };

//   // Use a single effect to check initial login state if needed
//   useEffect(() => {
//     // Assume we check some stored token to determine initial login state
//     // This is just for example purposes
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/login"
//           element={isLoggedIn ? <Navigate to="/" /> : <LoginPage handleLogin={handleLogin} />}
//         />
//         <Route
//           path="/upload"
//           element={isLoggedIn ? <UploadPage /> : <Navigate to="/login" />}
//         />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import { login } from '../src/utils/api';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      if (response.ok) {
        setIsLoggedIn(true);
        localStorage.setItem('authToken', response.data.token);
      }
    } catch (error) {
      throw new Error('Invalid email or password');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/upload" /> : <LoginPage handleLogin={handleLogin} />}
        />
        <Route
          path="/upload"
          element={isLoggedIn ? <UploadPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/upload" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;