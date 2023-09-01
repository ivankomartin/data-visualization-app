# Data Visualization App

This project is a web application built using Next.js and TypeScript. Its primary purpose is to fetch data from a remote API and visualize it using charts.

## Project Assignment

### Requirements

- The aim of this exercise is to create a single web application that will consume data from a remote API and render the pulled data in charts.
- Use TypeScript.
- Use the Next.js framework for building the web application.
- Use the ant.d library for UI and components on the page.
- Use the remote API for data: [UK Coronavirus Data API](https://coronavirus.data.gov.uk/details/developers-guide/main-api).
- Use g2.antv for rendering charts (any chart types can be used, up to your selection) - finally used antv/g2plot

### Design

- The page will consist of a page header and content area.
- The page header contains only the title.
- The content area contains two cards with charts (any chart type is possible) with a dummy avatar and dummy button as per the design.
- Above the charts, there is a space (a panel) for the page title and dummy buttons (as per design, without any logic behind).

### Delivery & Timeline

- The application on Vercel [is here](https://data-visualization-app.vercel.app/).
- Use a public GitHub repository

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: ant.d
- **Charting Library**:antv/g2plot
- **Data Source**: [UK Coronavirus Data API](https://coronavirus.data.gov.uk/details/developers-guide/main-api)

## Local Development

To get started with local development:

1. Clone the repository.
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
4. Visit [localhost:3000](http://localhost:3000) in your browser to view the application.
