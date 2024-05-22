// import React, { useState } from 'react';

// const ErrorList = ({ errors, onRetry }) => {
//   const [correctedErrors, setCorrectedErrors] = useState({});

//   const handleChange = (row, field, value) => {
//     setCorrectedErrors((prev) => ({
//       ...prev,
//       [row]: {
//         ...prev[row],
//         [field]: value
//       }
//     }));
//   };

//   const handleRetry = () => {
//     const corrected = errors.filter((error) => correctedErrors[error.row]);
//     onRetry(corrected.map((error) => error.row));
//   };

//   return (
//     <div>
//       <h3>Errors:</h3>
//       {errors.map((error, index) => (
//         <div key={index}>
//           <p>Row {error.row}:</p>
//           <ul>
//             {Object.keys(error.details).map((key, subIndex) => (
//               <li key={subIndex}>
//                 {key}: 
//                 <input
//                   type="text"
//                   defaultValue={error.details[key]}
//                   onChange={(e) => handleChange(error.row, key, e.target.value)}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button onClick={handleRetry}>Retry</button>
//     </div>
//   );
// };

// export default ErrorList;
// ..........................

// import React, { useState } from 'react';

// const ErrorList = ({ errors, onRetry }) => {
//   const [correctedErrors, setCorrectedErrors] = useState({});

//   const handleChange = (row, field, value) => {
//     setCorrectedErrors((prev) => ({
//       ...prev,
//       [row]: {
//         ...prev[row],
//         [field]: value
//       }
//     }));
//   };

//   const handleRetry = () => {
//     const corrected = errors.filter((error) => correctedErrors[error.row]);
//     onRetry(corrected.map((error) => ({
//       row: error.row,
//       details: correctedErrors[error.row]
//     })));
//   };

//   return (
//     <div>
//       <h3>Errors:</h3>
//       {errors.map((error, index) => (
//         <div key={index}>
//           <p>Row {error.row}:</p>
//           <ul>
//             {Object.keys(error.details).map((key, subIndex) => (
//               <li key={subIndex}>
//                 {key}: 
//                 <input
//                   type="text"
//                   defaultValue={error.details[key]}
//                   onChange={(e) => handleChange(error.row, key, e.target.value)}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button onClick={handleRetry}>Retry</button>
//     </div>
//   );
// };

// export default ErrorList;
// ................................

// src/components/ErrorList.jsx
// import React, { useState } from 'react';

// const ErrorList = ({ errors, onRetry }) => {
//   const [correctedErrors, setCorrectedErrors] = useState(errors);

//   const handleInputChange = (index, field, value) => {
//     const newCorrectedErrors = [...correctedErrors];
//     newCorrectedErrors[index].details[field] = value;
//     setCorrectedErrors(newCorrectedErrors);
//   };

//   const handleRetryClick = () => {
//     onRetry(correctedErrors);
//   };

//   return (
//     <div>
//       <h4>Errors:</h4>
//       <ul>
//         {correctedErrors.map((error, index) => (
//           <li key={error.row}>
//             <p>Row {error.row}:</p>
//             {Object.keys(error.details).map((field) => (
//               <div key={field}>
//                 <label>{field}:</label>
//                 <input
//                   type="text"
//                   value={error.details[field]}
//                   onChange={(e) => handleInputChange(index, field, e.target.value)}
//                 />
//               </div>
//             ))}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleRetryClick} className="px-4 py-2 bg-green-500 text-white">
//         Retry
//       </button>
//     </div>
//   );
// };

// export default ErrorList;
// ...............................

// src/components/ErrorList.jsx
// 
// .........................................

// src/components/ErrorList.jsx
import React, { useState } from 'react';

const ErrorList = ({ errors, onRetry }) => {
  const [correctedErrors, setCorrectedErrors] = useState(errors);

  const handleInputChange = (index, field, value) => {
    const newCorrectedErrors = [...correctedErrors];
    newCorrectedErrors[index].details[field] = value;
    setCorrectedErrors(newCorrectedErrors);
  };

  const handleRetryClick = () => {
    onRetry(correctedErrors);
  };

  return (
    <div>
      <h4>Errors:</h4>
      <ul>
        {correctedErrors.map((error, index) => (
          <li key={error.row}>
            <p>Row {error.row}:</p>
            {Object.keys(error.details).map((field) => (
              <div key={field}>
                <label>{field}:</label>
                <input
                  type="text"
                  value={error.details[field]}
                  onChange={(e) => handleInputChange(index, field, e.target.value)}
                />
              </div>
            ))}
          </li>
        ))}
      </ul>
      <button onClick={handleRetryClick} className="px-4 py-2 bg-green-500 text-white">
        Retry
      </button>
    </div>
  );
};

export default ErrorList;