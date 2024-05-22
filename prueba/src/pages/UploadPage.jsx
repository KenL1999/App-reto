// import React from 'react';
// // import FileUploadForm from '../components/FileUploadForm';

// const UploadPage = () => {
//   return (
//     <div>
//       <h2>Upload CSV File</h2>
//       {/* <FileUploadForm /> */}
//     </div>
//   );
// };

// export default UploadPage;


// import React, { useState } from 'react';
// import { upload } from '../api';

// const UploadPage = () => {
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
//       <h2>Upload CSV File</h2>
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

// export default UploadPage;

import React from 'react';
import FileUploadForm from '../components/FileUploadForm';

const UploadPage = () => {
  return (
    <div>
      <h2>Upload CSV File</h2>
      <FileUploadForm />
    </div>
  );
};

export default UploadPage;