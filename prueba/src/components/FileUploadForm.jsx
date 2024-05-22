// import React from 'react';

// const FileUploadForm = () => {
//   const handleFileUpload = (e) => {
//     // Manejar la carga del archivo CSV
//   };

//   return (
//     <form>
//       <input type="file" accept=".csv" onChange={handleFileUpload} />
//       <button type="submit">Upload File</button>
//     </form>
//   );
// };
// export default FileUploadForm;


// import React, { useState } from 'react';
// import { upload } from '../api';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (file) {
//       try {
//         const response = await upload(file);
//         if (response.ok) {
//           setResult(response.data);
//         }
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload File</button>
//       {result && (
//         <div>
//           <h3>Upload Result</h3>
//           <div>
//             <h4>Success:</h4>
//             <ul>
//               {result.success.map((item, index) => (
//                 <li key={index}>
//                   {item.id}: {item.name} ({item.email}), Age: {item.age}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4>Errors:</h4>
//             <ul>
//               {result.errors.map((error, index) => (
//                 <li key={index}>
//                   Row {error.row}:
//                   <ul>
//                     {Object.keys(error.details).map((key, subIndex) => (
//                       <li key={subIndex}>
//                         {key}: {error.details[key]}
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUploadForm;

// import React, { useState } from 'react';
// import { upload } from '../api';
// import SuccessList from './SuccessList';
// import ErrorList from './ErrorList';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (file) {
//       try {
//         const response = await upload(file);
//         if (response.ok) {
//           setResult(response.data);
//         }
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     }
//   };

//   const handleRetry = async (correctedErrors) => {
//     // Simulate retry logic here
//     setResult((prevResult) => ({
//       ...prevResult,
//       errors: prevResult.errors.filter((error) => !correctedErrors.includes(error.row))
//     }));
//   };

//   const handleNewFile = () => {
//     setFile(null);
//     setResult(null);
//   };

//   return (
//     <div>
//       {!result ? (
//         <>
//           <input type="file" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </>
//       ) : (
//         <>
//           <button onClick={handleNewFile}>New File</button>
//           <SuccessList success={result.success} />
//           <ErrorList errors={result.errors} onRetry={handleRetry} />
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploadForm;

// import React, { useState } from 'react';
// import { upload } from '../api';
// import SuccessList from './SuccessList';
// import ErrorList from './ErrorList';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (file) {
//       try {
//         const response = await upload(file);
//         if (response.ok) {
//           setResult(response.data);
//         }
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     }
//   };

//   const handleRetry = async (correctedErrors) => {
//     // Simulate retry logic here
//     // Assume the correctedErrors is an array of corrected error objects
//     setResult((prevResult) => {
//       const updatedSuccess = [...prevResult.success];
//       const remainingErrors = prevResult.errors.filter((error) => {
//         const corrected = correctedErrors.find((ce) => ce.row === error.row);
//         if (corrected) {
//           // Simulate a successful correction
//           updatedSuccess.push({ id: error.row, ...corrected.details });
//           return false;
//         }
//         return true;
//       });
//       return {
//         ...prevResult,
//         success: updatedSuccess,
//         errors: remainingErrors,
//       };
//     });
//   };

//   const handleNewFile = () => {
//     setFile(null);
//     setResult(null);
//   };

//   return (
//     <div>
//       {!result ? (
//         <>
//           <input type="file" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </>
//       ) : (
//         <>
//           <button onClick={handleNewFile}>New File</button>
//           <SuccessList success={result.success} />
//           <ErrorList errors={result.errors} onRetry={handleRetry} />
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploadForm;


// ........................
// src/components/FileUploadForm.jsx
// import React, { useState } from 'react';
// import { upload } from '../utils/api';
// import ResultsView from './ResultsView';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setError('');
//   };

//   const handleUpload = async () => {
//     if (file) {
//       setLoading(true);
//       setError('');
//       try {
//         const response = await upload(file);
//         if (response.ok) {
//           setResult(response.data);
//         } else {
//           setError('Upload failed');
//         }
//       } catch (error) {
//         setError('Upload failed');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setError('Please select a file to upload');
//     }
//   };

//   const handleNewFile = () => {
//     setFile(null);
//     setResult(null);
//     setError('');
//   };

//   return (
//     <div className="p-4">
//       {!result ? (
//         <>
//           <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
//           <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white" disabled={loading}>
//             {loading ? 'Uploading...' : 'Upload File'}
//           </button>
//           {error && <p className="text-red-500">{error}</p>}
//         </>
//       ) : (
//         <>
//           <button onClick={handleNewFile} className="px-4 py-2 bg-gray-500 text-white mb-4">
//             New File
//           </button>
//           <ResultsView result={result} />
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploadForm;
// .....................................

// src/components/FileUploadForm.jsx
// import React, { useState } from 'react';
// import { upload } from '../utils/api';
// import ResultsView from './ResultsView';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setError('');
//   };

//   const handleUpload = async () => {
//     if (file) {
//       setLoading(true);
//       setError('');
//       try {
//         const response = await upload(file);
//         if (response.ok) {
//           setResult(response.data);
//         } else {
//           setError('Upload failed');
//         }
//       } catch (error) {
//         setError('Upload failed');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setError('Please select a file to upload');
//     }
//   };

//   const handleRetry = async (correctedErrors) => {
//     // Simulate retry logic here
//     setLoading(true);
//     try {
//       const response = await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({
//             ok: true,
//             data: {
//               success: correctedErrors.map((error) => ({
//                 id: error.row,
//                 ...error.details,
//               })),
//               errors: [],
//             },
//           });
//         }, 1000);
//       });

//       if (response.ok) {
//         setResult((prevResult) => ({
//           success: [...prevResult.success, ...response.data.success],
//           errors: response.data.errors,
//         }));
//       } else {
//         setError('Retry failed');
//       }
//     } catch (error) {
//       setError('Retry failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNewFile = () => {
//     setFile(null);
//     setResult(null);
//     setError('');
//   };

//   return (
//     <div className="p-4">
//       {!result ? (
//         <>
//           <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
//           <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white" disabled={loading}>
//             {loading ? 'Uploading...' : 'Upload File'}
//           </button>
//           {error && <p className="text-red-500">{error}</p>}
//         </>
//       ) : (
//         <>
//           <button onClick={handleNewFile} className="px-4 py-2 bg-gray-500 text-white mb-4">
//             New File
//           </button>
//           <ResultsView result={result} onRetry={handleRetry} />
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploadForm;

// ........................................

// src/components/FileUploadForm.jsx
import React, { useState } from 'react';
import { mockApi } from '../utils/api';
import ResultsView from './ResultsView';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleUpload = async () => {
    if (file) {
      setLoading(true);
      setError('');
      try {
        const response = await mockApi.upload(file);
        if (response.ok) {
          setResult(response.data);
        } else {
          setError('Upload failed');
        }
      } catch (error) {
        setError('Upload failed');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please select a file to upload');
    }
  };

  const handleRetry = async (correctedErrors) => {
    // Simulate retry logic here
    setLoading(true);
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            data: {
              success: correctedErrors.map((error) => ({
                id: error.row,
                ...error.details,
              })),
              errors: [],
            },
          });
        }, 1000);
      });

      if (response.ok) {
        setResult((prevResult) => ({
          success: [...prevResult.success, ...response.data.success],
          errors: response.data.errors,
        }));
      } else {
        setError('Retry failed');
      }
    } catch (error) {
      setError('Retry failed');
    } finally {
      setLoading(false);
    }
  };

  const handleNewFile = () => {
    setFile(null);
    setResult(null);
    setError('');
  };

  return (
    <div className="p-4">
      {!result ? (
        <>
          <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
          <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload File'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </>
      ) : (
        <>
          <button onClick={handleNewFile} className="px-4 py-2 bg-gray-500 text-white mb-4">
            New File
          </button>
          <ResultsView result={result} onRetry={handleRetry} />
        </>
      )}
    </div>
  );
};

export default FileUploadForm;