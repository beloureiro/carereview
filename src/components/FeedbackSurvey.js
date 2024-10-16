import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import StarRating from './StarRating';
import { useProfessionalsContext } from '../context/ProfessionalsContext';

const OpenSurveyButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 95%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SurveyTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
`;

const SurveySection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  color: var(--text-color);
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 1.2em; // Diminuído ligeiramente
`;

const RatingItem = styled.div`
  margin-bottom: 20px;
`;

const RatingLabel = styled.label`
  font-weight: 500;
  color: var(--text-color);
  display: block;
  margin-bottom: 10px;
`;

const RatingDescription = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;
`;

const StyleOfCareButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const StyleButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  flex: 1;
  min-width: 150px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &.selected {
    font-weight: 600;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CompassionateButton = styled(StyleButton)`
  background-color: #ffeeba;
  color: #856404;
  &.selected, &:hover { background-color: #fff3cd; }
`;

const ProfessionalButton = styled(StyleButton)`
  background-color: #d4edda;
  color: #155724;
  &.selected, &:hover { background-color: #c3e6cb; }
`;

const AnalyticalButton = styled(StyleButton)`
  background-color: #cce5ff;
  color: #004085;
  &.selected, &:hover { background-color: #b8daff; }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  margin-top: 30px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const FeedbackMessage = styled(motion.div)`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  ${props => props.success ? `
    background-color: #d4edda;
    color: #155724;
  ` : `
    background-color: #f8d7da;
    color: #721c24;
  `}
`;

const SliderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${props => (props.value - 1) * 25}%, #d3d3d3 ${props => (props.value - 1) * 25}%, #d3d3d3 100%);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const SliderLabel = styled.span`
  font-size: 0.8em;
  color: var(--text-color);
`;

const SurveyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CurrentRating = styled.span`
  color: #4CAF50;
  font-weight: bold;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

const ExploreText = styled.p`
  color: var(--text-color);
  font-size: 0.9em;
  text-align: center;
  margin-top: 10px;
`;

const FeedbackSurvey = ({ professionalId }) => {
  const { updateProfessionalRating } = useProfessionalsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratings, setRatings] = useState({
    waitingTime: 5,
    communicationClarity: 5,
    communicationResponse: 5,
    valuePerception: 5,
    overallExperience: 5,
    environment: 5,
    supportStaff: 5,
  });
  const [styleOfCare, setStyleOfCare] = useState('');
  const [submitMessage, setSubmitMessage] = useState({ text: '', success: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(Object.values(ratings).some(rating => rating > 0) && styleOfCare !== '');
  }, [ratings, styleOfCare]);

  const handleRatingChange = (field, value) => {
    setRatings(prev => ({ ...prev, [field]: value }));
  };

  const handleStyleOfCareChange = (style) => {
    setStyleOfCare(style);
  };

  const handleOverallExperienceChange = (event) => {
    const value = parseInt(event.target.value);
    setRatings(prev => ({ ...prev, overallExperience: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setSubmitMessage({ text: 'Please provide at least one rating and select a Style of Care before submitting.', success: false });
      return;
    }
    setIsSubmitting(true);
    try {
      await updateProfessionalRating(professionalId, ratings, styleOfCare);
      setSubmitMessage({ text: 'Feedback submitted successfully', success: true });
      setTimeout(() => {
        setIsModalOpen(false);
        resetForm();
      }, 2000);
    } catch (error) {
      setSubmitMessage({ text: 'Failed to submit feedback. Please try again later.', success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRatings({
      waitingTime: 5,
      communicationClarity: 5,
      communicationResponse: 5,
      valuePerception: 5,
      overallExperience: 5,
      environment: 5,
      supportStaff: 5,
    });
    setStyleOfCare('');
    setSubmitMessage({ text: '', success: true });
  };

  const getSliderLabel = (value, labels) => {
    switch(value) {
      case 1: return labels[0];
      case 3: return labels[1];
      case 5: return labels[2];
      default: return '';
    }
  };

  const getOverallExperienceLabel = (value) => {
    switch(value) {
      case 1: return '1 Star';
      case 2: return '2 Stars';
      case 3: return '3 Stars';
      case 4: return '4 Stars';
      case 5: return '5 Stars';
      default: return '';
    }
  };

  const renderSlider = (field, label, labels) => (
    <RatingItem>
      <RatingLabel>{label}</RatingLabel>
      <SliderContainer>
        <Slider
          type="range"
          min={1}
          max={5}
          step={2}
          value={ratings[field]}
          onChange={(e) => handleRatingChange(field, parseInt(e.target.value))}
        />
        <SliderLabels>
          <SliderLabel>{labels[0]}</SliderLabel>
          <SliderLabel>{labels[1]}</SliderLabel>
          <SliderLabel>{labels[2]}</SliderLabel>
        </SliderLabels>
      </SliderContainer>
      <RatingDescription>
        Current: <CurrentRating>{getSliderLabel(ratings[field], labels)}</CurrentRating>
      </RatingDescription>
    </RatingItem>
  );

  return (
    <>
      <OpenSurveyButton onClick={() => setIsModalOpen(true)}>
        Open Feedback Survey
      </OpenSurveyButton>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <SurveyTitle>Patient Feedback Survey</SurveyTitle>
              <form onSubmit={handleSubmit}>
                <SurveySection>
                  <SectionTitle>Overall Experience</SectionTitle>
                  <RatingItem>
                    <RatingLabel>How would you rate your overall experience?</RatingLabel>
                    <StarRating
                      rating={ratings.overallExperience}
                      onRatingChange={(value) => handleRatingChange('overallExperience', value)}
                      size={40}
                    />
                    <RatingDescription>
                      Current: <CurrentRating>{getOverallExperienceLabel(ratings.overallExperience)}</CurrentRating>
                    </RatingDescription>
                  </RatingItem>
                </SurveySection>
                <Divider />
                <ExploreText>Please explore the survey below to provide more detailed feedback.</ExploreText>

                <SurveyGrid>
                  <SurveySection>
                    <SectionTitle>Waiting Time</SectionTitle>
                    {renderSlider(
                      'waitingTime',
                      'How was your waiting time experience?',
                      ['Very Long', 'As Expected', 'Quick']
                    )}
                  </SurveySection>

                  <SurveySection>
                    <SectionTitle>Value Perception</SectionTitle>
                    {renderSlider(
                      'valuePerception',
                      'How would you rate the cost-benefit of the service?',
                      ['Unsatisfactory', 'Adequate', 'Excellent']
                    )}
                  </SurveySection>
                </SurveyGrid>

                <SurveyGrid>
                  <SurveySection>
                    <SectionTitle>Communication Quality</SectionTitle>
                    {renderSlider(
                      'communicationClarity',
                      'How clear was the communication?',
                      ['Confusing', 'Partially Clear', 'Very Clear']
                    )}
                    {renderSlider(
                      'communicationResponse',
                      'How attentive were they to your questions?',
                      ['Not Attentive', 'Adequate', 'Very Attentive']
                    )}
                  </SurveySection>

                  <SurveySection>
                    <SectionTitle>Environment and Support</SectionTitle>
                    {renderSlider(
                      'environment',
                      'How satisfactory was the environment?',
                      ['Unsatisfactory', 'Satisfactory', 'Very Satisfactory']
                    )}
                    {renderSlider(
                      'supportStaff',
                      'How attentive was the support staff?',
                      ['Not Attentive', 'Adequate', 'Very Attentive']
                    )}
                  </SurveySection>
                </SurveyGrid>

                <SurveySection>
                  <SectionTitle>Style of Care</SectionTitle>
                  <RatingLabel as="p">Select the style that best describes the professional's approach:</RatingLabel>
                  <StyleOfCareButtons>
                    <CompassionateButton
                      type="button"
                      onClick={() => handleStyleOfCareChange('compassionate')}
                      className={styleOfCare === 'compassionate' ? 'selected' : ''}
                    >
                      Compassionate and Engaging
                    </CompassionateButton>
                    <ProfessionalButton
                      type="button"
                      onClick={() => handleStyleOfCareChange('professional')}
                      className={styleOfCare === 'professional' ? 'selected' : ''}
                    >
                      Professional and Balanced
                    </ProfessionalButton>
                    <AnalyticalButton
                      type="button"
                      onClick={() => handleStyleOfCareChange('analytical')}
                      className={styleOfCare === 'analytical' ? 'selected' : ''}
                    >
                      Analytical and Direct
                    </AnalyticalButton>
                  </StyleOfCareButtons>
                </SurveySection>

                <SubmitButton type="submit" disabled={isSubmitting || !isFormValid}>
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </SubmitButton>
              </form>
              
              <AnimatePresence>
                {submitMessage.text && (
                  <FeedbackMessage
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    success={submitMessage.success}
                  >
                    {submitMessage.text}
                  </FeedbackMessage>
                )}
              </AnimatePresence>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackSurvey;
