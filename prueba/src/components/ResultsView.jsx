// import React from 'react';

// const ResultsView = ({ successRecords, errorRecords }) => {
//   return (
//     <div>
//       <h2>Results</h2>
//       {/* Mostrar resultados aquí */}
//     </div>
//   );
// };

// export default ResultsView;

// ........................
// src/components/ResultsView.jsx
// import React from 'react';
// import SuccessList from './SuccessList';
// import ErrorList from './ErrorList';

// const ResultsView = ({ result }) => {
//   return (
//     <div>
//       <h3>Upload Results</h3>
//       <SuccessList success={result.success} />
//       <ErrorList errors={result.errors} />
//     </div>
//   );
// };

// export default ResultsView;
// .......................................

// src/components/ResultsView.jsx
import React from 'react';
import SuccessList from './SuccessList';
import ErrorList from './ErrorList';

const ResultsView = ({ result, onRetry }) => {
  return (
    <div>
      <h3>Upload Results</h3>
      <SuccessList success={result.success} />
      <ErrorList errors={result.errors} onRetry={onRetry} />
    </div>
  );
};

export default ResultsView;