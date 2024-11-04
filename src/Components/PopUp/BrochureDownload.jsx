import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const BrochureDownload = () => {
  const handleDownload = () => {
    const fileUrl = '/brochure.pdf'; // Direct path to public folder
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn botton" onClick={handleDownload}>
      <FontAwesomeIcon icon={faDownload} /> Download Brochure
    </button>
  );
};

export default BrochureDownload;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

// const BrochureDownload = () => {
//   const handleDownload = () => {
//     const fileUrl = 'src/Components/PopUp/brochure.pdf';
//     // const fileUrl = 'brochure.pdf';
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = 'brochure.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button className="btn botton" onClick={handleDownload}>
//       <FontAwesomeIcon icon={faDownload} /> Download Brochure
//     </button>
//   );
// };

// export default BrochureDownload;
