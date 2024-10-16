import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useProfessionalsContext } from '../context/ProfessionalsContext';
import StarRating from './StarRating';
import FeedbackSurvey from './FeedbackSurvey';
import StyleOfCareProgressBar from './StyleOfCareProgressBar';

const ProfileContainer = styled.div`
  background-color: var(--bs-light);
  border-radius: 8px;
  padding: 20px;
  height: 100%;
  width: 100%;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0 0 5px 0;
`;

const Specialty = styled.p`
  margin: 0 0 5px 0;
  color: var(--medium-gray);
`;

const Location = styled.p`
  margin: 0 0 10px 0;
  color: var(--medium-gray);
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  span {
    min-width: 150px;
    margin-right: 10px;
  }
`;

const StyleOfCareContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h4`
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--primary-color);
`;

const DetailedRatingsContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const RatingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const RatingLabel = styled.span`
  flex: 1;
  font-weight: 500;
  color: var(--text-color);
`;

const RatingValue = styled.div`
  flex: 0 0 120px;
  text-align: right;
`;

const ProfessionalProfile = () => {
  const { selectedProfessional } = useProfessionalsContext();

  if (!selectedProfessional) {
    return (
      <ProfileContainer>
        <h2>Professional Profile</h2>
        <p>Select a professional to view their profile.</p>
      </ProfileContainer>
    );
  }

  const defaultImageUrl = 'https://via.placeholder.com/150';

  // Função para calcular a média de comunicação
  const calculateCommunicationAverage = (clarity, response) => {
    return (clarity + response) / 2;
  };

  // Mapeamento dos critérios do FeedbackSurvey para os critérios exibidos
  const criteriaMapping = {
    waitingTime: 'Waiting Time',
    valuePerception: 'Value Perception',
    environment: 'Environment',
    supportStaff: 'Support Staff',
    communicationClarity: 'Communication Quality',
  };

  // Ordenar as avaliações detalhadas
  const sortedDetailedRatings = useMemo(() => {
    const ratings = Object.entries(selectedProfessional.detailedRatings)
      .filter(([criterion]) => criterion !== 'overallExperience' && criterion !== 'communicationResponse')
      .map(([criterion, rating]) => {
        if (criterion === 'communicationClarity') {
          const avgCommunication = calculateCommunicationAverage(
            selectedProfessional.detailedRatings.communicationClarity,
            selectedProfessional.detailedRatings.communicationResponse
          );
          return { criterion, rating: avgCommunication };
        }
        return { criterion, rating };
      });

    return ratings.sort((a, b) => b.rating - a.rating);
  }, [selectedProfessional.detailedRatings]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage
          src={selectedProfessional.profilePicture || defaultImageUrl}
          alt={selectedProfessional.name}
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
        />
        <ProfileInfo>
          <Name>{selectedProfessional.name}</Name>
          <Specialty>{selectedProfessional.specialty}</Specialty>
          <Location>{selectedProfessional.location}</Location>
          <SectionTitle>Overall Rating</SectionTitle>
          <StarRating rating={selectedProfessional.overallRating} />
        </ProfileInfo>
      </ProfileHeader>

      <StyleOfCareContainer>
        <SectionTitle>Style of Care</SectionTitle>
        <StyleOfCareProgressBar styleOfCare={selectedProfessional.styleOfCare} />
      </StyleOfCareContainer>

      <SectionTitle>Detailed Ratings</SectionTitle>
      <DetailedRatingsContainer>
        {sortedDetailedRatings.map(({ criterion, rating }) => (
          <RatingRow key={criterion}>
            <RatingLabel>{criteriaMapping[criterion] || criterion}</RatingLabel>
            <RatingValue>
              <StarRating rating={rating} />
            </RatingValue>
          </RatingRow>
        ))}
      </DetailedRatingsContainer>
      
      <FeedbackSurvey professionalId={selectedProfessional.id} />
    </ProfileContainer>
  );
};

export default ProfessionalProfile;
