// import React from 'react';
// import LoginForm from '../components/LoginForm';

// const LoginPage = ({ handleLogin }) => {
//   return (
//     <div>
//       <h2>Login</h2>
//       <LoginForm handleLogin={handleLogin} />
//     </div>
//   );
// };

// export default LoginPage;

// LoginPage.jsx
// import React, { useState } from 'react';

// const LoginPage = ({ handleLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Call handleLogin function with email and password
//       await handleLogin(email, password);
//     } catch (error) {
//       // Handle login error
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ handleLogin }) => {
  const [error, setError] = useState('');

  const handleSubmit = async (email, password) => {
    try {
      await handleLogin(email, password);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;