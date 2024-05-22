// api.js

// export const login = async (email, password) => {
//     // Simulate a delay for the API call
//     await new Promise(resolve => setTimeout(resolve, 500));
    
//     if (email === 'admin@mail.com' && password === 'supersecret') {
//       return {
//         ok: true,
//         data: {
//           email: 'admin@mail.com',
//           name: 'Mr. Admin',
//           role: 'admin',
//           token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
//         },
//       };
//     } else {
//       throw new Error('Invalid email or password');
//     }
//   };
  
//   export const upload = async (file) => {
//     // Simulate a delay for the API call
//     await new Promise(resolve => setTimeout(resolve, 500));
  
//     // Simulate a response
//     return {
//       ok: true,
//       data: {
//         success: [
//           {
//             id: 1,
//             name: 'Juan Perez',
//             email: 'juan.perez@example.com',
//             age: 28,
//           },
//         ],
//         errors: [
//           {
//             row: 4,
//             details: {
//               name: "El campo 'name' no puede estar vacío.",
//               email: "El formato del campo 'email' es inválido.",
//               age: "El campo 'age' debe ser un número positivo.",
//             },
//           },
//         ],
//       },
//     };
//   };
  
// export const login = async (email, password) => {
//     if (email === 'admin@mail.com' && password === 'supersecret') {
//       return {
//         ok: true,
//         data: {
//           email: 'admin@mail.com',
//           name: 'Mr. Admin',
//           role: 'admin',
//           token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
//         },
//       };
//     } else {
//       throw new Error('Invalid email or password');
//     }
//   };
  
//   export const upload = async (file) => {
//     return {
//       ok: true,
//       data: {
//         success: [
//           { id: 1, name: 'Juan Perez', email: 'juan.perez@example.com', age: 28 },
//           // Other successful records...
//         ],
//         errors: [
//           {
//             row: 4,
//             details: {
//               name: "El campo 'name' no puede estar vacío.",
//               email: "El formato del campo 'email' es inválido.",
//               age: 'El campo "age" debe ser un número positivo.',
//             },
//           },
//           // Other error records...
//         ],
//       },
//     };
//   };
// .............................................

// src/utils/mockApi.js
export const mockApi = {
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@mail.com' && password === 'supersecret') {
          resolve({
            ok: true,
            data: {
              email: 'admin@mail.com',
              name: 'Mr. Admin',
              role: 'admin',
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  },
  upload: async (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          data: {
            success: [
              { id: 1, name: 'Juan Perez', email: 'juan.perez@example.com', age: 28 }
              // Otros registros exitosos...
            ],
            errors: [
              {
                row: 4,
                details: {
                  name: "El campo 'name' no puede estar vacío.",
                  email: "El formato del campo 'email' es inválido.",
                  age: "El campo 'age' debe ser un número positivo."
                }
              }
              // Otros registros con errores...
            ]
          }
        });
      }, 1000);
    });
  }
};