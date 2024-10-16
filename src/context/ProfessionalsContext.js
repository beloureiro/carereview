import React, { createContext, useContext, useState } from 'react';
import mockData from '../data/mockData';

const ProfessionalsContext = createContext();

export const useProfessionalsContext = () => useContext(ProfessionalsContext);

export const ProfessionalsProvider = ({ children }) => {
  const [professionals, setProfessionals] = useState(mockData);
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const updateProfessionalRating = (id, newRatings, newStyleOfCare) => {
    setProfessionals(prevProfessionals => {
      return prevProfessionals.map(professional => {
        if (professional.id === id) {
          const updatedRatings = { ...professional.detailedRatings };
          Object.entries(newRatings).forEach(([criterion, rating]) => {
            if (rating > 0) {
              updatedRatings[criterion] = (updatedRatings[criterion] * professional.ratingCount + rating) / (professional.ratingCount + 1);
            }
          });
          const overallRating = Object.values(updatedRatings).reduce((sum, rating) => sum + rating, 0) / Object.keys(updatedRatings).length;
          
          const updatedStyleOfCare = { ...professional.styleOfCare };
          updatedStyleOfCare[newStyleOfCare] += 1;

          return {
            ...professional,
            detailedRatings: updatedRatings,
            overallRating: parseFloat(overallRating.toFixed(1)),
            ratingCount: professional.ratingCount + 1,
            styleOfCare: updatedStyleOfCare
          };
        }
        return professional;
      });
    });

    if (selectedProfessional && selectedProfessional.id === id) {
      setSelectedProfessional(prevSelected => {
        if (prevSelected) {
          const updatedRatings = { ...prevSelected.detailedRatings };
          Object.entries(newRatings).forEach(([criterion, rating]) => {
            if (rating > 0) {
              updatedRatings[criterion] = (updatedRatings[criterion] * prevSelected.ratingCount + rating) / (prevSelected.ratingCount + 1);
            }
          });
          const overallRating = Object.values(updatedRatings).reduce((sum, rating) => sum + rating, 0) / Object.keys(updatedRatings).length;
          
          const updatedStyleOfCare = { ...prevSelected.styleOfCare };
          updatedStyleOfCare[newStyleOfCare] += 1;

          return {
            ...prevSelected,
            detailedRatings: updatedRatings,
            overallRating: parseFloat(overallRating.toFixed(1)),
            ratingCount: prevSelected.ratingCount + 1,
            styleOfCare: updatedStyleOfCare
          };
        }
        return prevSelected;
      });
    }
  };

  return (
    <ProfessionalsContext.Provider value={{
      professionals,
      selectedProfessional,
      setSelectedProfessional,
      updateProfessionalRating
    }}>
      {children}
    </ProfessionalsContext.Provider>
  );
};
