# Patient Feedback Review App

This application is designed to offer a structured and categorized review system for patients to share feedback on healthcare professionals. It helps patients make informed decisions by providing detailed ratings across various aspects of care and allows them to select a "Style of Care" that best aligns with their preferences. This promotes transparency and alignment between patient expectations and healthcare provider approaches.

You can access the published version of the app here: [Care Review App](https://beloureiro.github.io/carereview/)

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Components](#components)

## Features
- **Comprehensive Patient Feedback**: Users can rate their experience with healthcare providers on aspects like communication, waiting time, value perception, and more, offering a well-rounded view of each professional's service.
- **"Style of Care" Selection**: Patients can select the approach that best describes the provider’s style—Compassionate, Professional, or Analytical—helping future patients find a doctor whose interaction style suits their needs.
- **Search and Filter Functionality**: The app includes options to search for professionals by name or filter by specialty, making it easy to find the right provider.
- **Interactive Survey Modal**: A dynamic feedback form where patients can provide ratings and select care styles in a user-friendly interface.

## Technologies Used
- **React**: For building the user interface and managing component-based architecture.
- **Styled Components**: Used for styling the app at the component level, ensuring a consistent and customizable design.
- **Framer Motion**: Implements animations in the survey modal and feedback interactions for an enhanced user experience.
- **React Context API**: Handles global state management for professional data and ratings across components.

## Installation
To run this project locally, you need Node.js installed on your computer.

1. Clone the repository:
    ```bash
    git clone https://github.com/beloureiro/carereview.git
    ```
2. Navigate into the project directory:
    ```bash
    cd carereview
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000`.

## Usage
1. **Provide Feedback**: Select "Open Feedback Survey" on a professional's profile to submit a detailed review, including ratings and style of care.
2. **Search and Filter**: Use the search bar and filters to narrow down professionals by name or specialty.
3. **View Professional Details**: Click on a professional's card to access detailed information about their ratings, available appointment times, and approach to care.

## Components

### 1. `FeedbackSurvey`
An interactive modal for patients to provide feedback on specific aspects like waiting time, communication quality, value perception, and more. It includes:
- **Overall Experience**: Star rating to summarize general satisfaction.
- **Detailed Criteria**: Sliders for specific ratings (e.g., waiting time, clarity, environment).
- **Style of Care**: Options to select the provider’s care approach.

### 2. `ProfessionalCard`
Displays basic information about each healthcare professional, such as their name, specialty, location, and overall rating. Clicking on the card opens a detailed profile.

### 3. `ProfessionalProfile`
Shows a comprehensive view of the selected professional, including their ratings, style of care, and individual feedback on various care aspects.

### 4. `ProfessionalsList`
A searchable and filterable list of healthcare providers, allowing users to easily find professionals by specialty or name.

## License
This project is open source and available under the [MIT License](LICENSE).
