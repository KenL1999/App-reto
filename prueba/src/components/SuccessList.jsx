// import React from 'react';

// const SuccessList = ({ success }) => {
//   return (
//     <div>
//       <h3>Success:</h3>
//       <ul>
//         {success.map((item, index) => (
//           <li key={index}>
//             {item.id}: {item.name} ({item.email}), Age: {item.age}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SuccessList;

// ..........................
// src/components/SuccessList.jsx
import React from 'react';

const SuccessList = ({ success }) => {
  return (
    <div>
      <h4>Successfully Uploaded Records:</h4>
      <ul>
        {success.map((record) => (
          <li key={record.id}>
            {record.name} ({record.email}, {record.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessList;