import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useProfessionalsContext } from '../context/ProfessionalsContext';
import ProfessionalCard from './ProfessionalCard';

const ListContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    max-width: 480px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 5px 15px;
  color: var(--text-color);
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--background-color);
  }
`;

const ProfessionalsList = () => {
  const { professionals } = useProfessionalsContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProfessionals = useMemo(() =>
    professionals.filter(professional =>
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    ).filter(professional => 
      activeFilter === 'all' || professional.specialty.toLowerCase() === activeFilter
    ),
    [professionals, searchQuery, activeFilter]
  );

  return (
    <ListContainer>
      <h2 className="mb-3">Professionals List</h2>
      <SearchInput
        type="text"
        placeholder="Search by name or specialty"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search professionals by name or specialty"
      />
      <FilterContainer>
        <FilterButton onClick={() => setActiveFilter('all')}>All</FilterButton>
        <FilterButton onClick={() => setActiveFilter('cardiologist')}>Cardiologist</FilterButton>
        <FilterButton onClick={() => setActiveFilter('pediatrician')}>Pediatrician</FilterButton>
        {/* Add more filter buttons as needed */}
      </FilterContainer>
      {filteredProfessionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </ListContainer>
  );
};

export default ProfessionalsList;
