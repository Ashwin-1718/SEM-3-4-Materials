import { useState } from 'react';

 function SearchFilter() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [search, setSearch] = useState('');

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="component">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search names"
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {filteredNames.length === 0 && <p>No matches found</p>}
    </div>
  );
}

export default SearchFilter;