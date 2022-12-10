import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Use the useLazyQuery hook to fetch data from the GraphQL API
  const [searchTickets, { data, loading, error }] = useLazyQuery(SEARCH_TICKETS_QUERY, {
    variables: { searchTerm },
  });

  const handleSearch = (event) => {
    event.preventDefault();
    searchTickets();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search tickets"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
     )
