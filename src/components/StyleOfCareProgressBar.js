import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressSegment = styled.div`
  height: 100%;
  position: absolute;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;

const CompassionateSegment = styled(ProgressSegment)`
  left: 0;
  background-color: #ffeeba;
`;

const ProfessionalSegment = styled(ProgressSegment)`
  left: ${props => props.compassionateWidth};
  background-color: #d4edda;
`;

const AnalyticalSegment = styled(ProgressSegment)`
  left: ${props => props.professionalLeft};
  background-color: #cce5ff;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
`;

const LegendColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;

const StyleOfCareProgressBar = ({ styleOfCare }) => {
  const total = styleOfCare.compassionate + styleOfCare.professional + styleOfCare.analytical;
  const scale = total > 100 ? 100 / total : 1;

  const compassionateWidth = `${styleOfCare.compassionate * scale}%`;
  const professionalWidth = `${styleOfCare.professional * scale}%`;
  const analyticalWidth = `${styleOfCare.analytical * scale}%`;

  const professionalLeft = `${styleOfCare.compassionate * scale}%`;
  const analyticalLeft = `${(styleOfCare.compassionate + styleOfCare.professional) * scale}%`;

  return (
    <>
      <ProgressBarContainer>
        <CompassionateSegment style={{ width: compassionateWidth }}>
          {styleOfCare.compassionate}%
        </CompassionateSegment>
        <ProfessionalSegment style={{ width: professionalWidth }} compassionateWidth={compassionateWidth}>
          {styleOfCare.professional}%
        </ProfessionalSegment>
        <AnalyticalSegment style={{ width: analyticalWidth }} professionalLeft={analyticalLeft}>
          {styleOfCare.analytical}%
        </AnalyticalSegment>
      </ProgressBarContainer>
      <LegendContainer>
        <LegendItem>
          <LegendColor style={{ backgroundColor: '#ffeeba' }} />
          Compassionate and Engaging
        </LegendItem>
        <LegendItem>
          <LegendColor style={{ backgroundColor: '#d4edda' }} />
          Professional and Balanced
        </LegendItem>
        <LegendItem>
          <LegendColor style={{ backgroundColor: '#cce5ff' }} />
          Analytical and Direct
        </LegendItem>
      </LegendContainer>
    </>
  );
};

export default StyleOfCareProgressBar;
