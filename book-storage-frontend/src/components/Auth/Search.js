// // Search.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Search = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     // Perform search logic
//     onSearch(searchTerm);
//   };

//   return (
//     <div className="container mt-3">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6 mt-4">
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search Books"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Construct the API endpoint with the search term
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

      // Make the API request using axios
      const response = await axios.get(apiUrl);
      const data = response.data.items || [];

      // Update state with the search results
      setSearchResults(data);

      // Pass the search results to the parent component
      onSearch(data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 mt-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Books"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="row justify-content-center">
          {searchResults.map((result) => (
            <div key={result.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card background-size">
                {result.volumeInfo.imageLinks && (
                  <img
                    src={result.volumeInfo.imageLinks.thumbnail}
                    className="card-img-top"
                    alt={result.volumeInfo.title}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{result.volumeInfo.title}</h5>
                  <p className="card-text">
                    {result.volumeInfo.authors && result.volumeInfo.authors.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
