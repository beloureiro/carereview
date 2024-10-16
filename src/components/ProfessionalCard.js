import React from 'react';
import styled from 'styled-components';
import { useProfessionalsContext } from '../context/ProfessionalsContext';
import StarRating from './StarRating';

const Card = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid var(--border-color);
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 32px; // Reduzido ainda mais
  height: 32px; // Reduzido ainda mais
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  color: var(--text-color);
  margin: 0 0 2px 0;
  font-size: 0.9rem;
`;

const Specialty = styled.h4`
  color: var(--medium-gray);
  font-size: 0.8rem;
  margin: 0 0 2px 0;
`;

const Location = styled.p`
  color: var(--medium-gray);
  font-size: 0.7rem;
  margin: 0 0 2px 0;
`;

const AvailabilityTitle = styled.h5`
  color: var(--text-color);
  margin: 5px 0 2px 0;
  font-size: 0.8rem;
`;

const TimeSlot = styled.span`
  background-color: var(--bright-blue);
  color: var(--white);
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 0.6rem;
  margin-right: 4px;
  margin-bottom: 4px;
  display: inline-block;
`;

const ProfessionalCard = ({ professional }) => {
  const { setSelectedProfessional } = useProfessionalsContext();

  const handleCardClick = () => {
    setSelectedProfessional(professional);
  };

  return (
    <Card onClick={handleCardClick}>
      <ProfileImage 
        src={professional.profilePicture || 'https://via.placeholder.com/32'} 
        alt={professional.name} 
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/32'; }}
      />
      <ContentWrapper>
        <Name>{professional.name}</Name>
        <Specialty>{professional.specialty}</Specialty>
        <StarRating rating={professional.overallRating} />
        <Location>{professional.location}</Location>
        <AvailabilityTitle>Available:</AvailabilityTitle>
        <div>
          {professional.availability.split(', ').map((slot, index) => (
            <TimeSlot key={index}>{slot}</TimeSlot>
          ))}
        </div>
      </ContentWrapper>
    </Card>
  );
};

export default ProfessionalCard;
