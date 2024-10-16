import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #00b2a9;
    --text-color: #333333;
    --background-color: #F5F5F5;
    --yellow: #FFD700;
    --bright-blue: #0099FF;
    --white: #FFFFFF;
    --medium-gray: #888888;
    --border-color: #DDDDDD;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-color);
  }

  .btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .btn-primary:hover {
    background-color: darken(var(--primary-color), 10%);
    border-color: darken(var(--primary-color), 10%);
  }

  .card {
    background-color: var(--white);
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .text-secondary {
    color: var(--medium-gray) !important;
  }

  .badge-featured {
    background-color: var(--yellow);
    color: var(--text-color);
  }

  .time-slot {
    background-color: var(--bright-blue);
    color: var(--white);
  }
`;
