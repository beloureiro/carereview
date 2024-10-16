# Patient Feedback Review App

This application is designed to test a new review model for clients, specifically aimed at gathering patient feedback on healthcare professionals. The app provides a seamless way for users to rate various aspects of their experience with healthcare providers, including overall experience, communication quality, and more.

You can access the published version of the app here: [Care Review App](https://beloureiro.github.io/carereview/)

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Components](#components)

## Features
- **Survey Modal**: A pop-up modal that allows users to rate their experience with a healthcare professional.
- **Styled Components**: The app uses `styled-components` for component-level styling, making it easy to customize and maintain.
- **Filtering and Searching**: A professional list component that includes filters and search functionality to narrow down healthcare providers by name or specialty.
- **Context API**: Manages global state for professionals, allowing easy access to data across components.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Styled Components**: A library for styling React components.
- **Framer Motion**: For animations within the survey modal and feedback messages.
- **React Context API**: Manages the state across the app, specifically for professionals and their ratings.

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
1. **Survey Modal**: Click the "Open Feedback Survey" button to start a survey about a specific professional. Complete the form by providing ratings and selecting the "Style of Care."
2. **Filter and Search**: Use the search input and filter buttons to find specific professionals by name or specialty.
3. **Professional Profile**: Click on a professional's card to view detailed information, including their ratings and style of care.

## Components

### 1. `FeedbackSurvey`
A modal component where users provide detailed feedback on various aspects of their experience. The survey includes:
- **Overall Experience** rating with star selection.
- **Rating Sliders** for individual criteria like waiting time, communication clarity, and environment.
- **Style of Care** buttons to select the professional's approach.

### 2. `ProfessionalCard`
Displays a card with basic information about a professional, including name, specialty, and overall rating. When clicked, it displays the detailed profile of the selected professional.

### 3. `ProfessionalProfile`
Shows detailed information about a selected professional, including their ratings, style of care, and specific feedback criteria.

### 4. `ProfessionalsList`
Displays a searchable and filterable list of professionals. The user can search by name or specialty and filter based on predefined categories.

## License
This project is open source and available under the [MIT License](LICENSE).
