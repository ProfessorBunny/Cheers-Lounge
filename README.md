# Cocktail Recipe Finder React App (built with Vite)

This is a React app that allows users to search for various cocktail recipes using the CocktailDB API. The app is built with Vite, utilizing React Router for seamless navigation across multiple pages. React Query is used for caching the data on the server to prevent the app from making multiple requests for the same query, thus providing a faster user interface.

## Features

- Recipe search: Users can search for cocktail recipes using keywords.
- Detailed recipe view: Users can view detailed information about a selected cocktail, including ingredients and instructions.
- Seamless navigation: React Router is used to handle different components and provide seamless navigation across multiple pages.
- Data caching: React Query is used to cache data on the server, improving performance by preventing redundant API requests.

## Installation

To run this React app locally, please follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. Once the installation is complete, start the development server with the following command:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` to access the Cocktail Recipe Finder app.

## Dependencies

This Cocktail Recipe Finder React app built with Vite relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- ReactDOM: Provides DOM-specific methods that can be used with React.
- React Router: Library for handling navigation and routing in a React app.
- React Query: Library for caching and managing server state in a React app.

These dependencies are listed in the `package.json` file and will be automatically installed when running `npm install`.

## SPA

SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.

[React Router](https://reactrouter.com/en/main)

## Usage

Once you have the Cocktail Recipe Finder React app running locally, you can start using it by following these steps:

1. Use the search bar to enter keywords for the cocktail you want to find recipes for.
2. Click the "Search" button or press Enter to initiate the search.
3. The app will fetch and display relevant cocktail recipes from the CocktailDB API.
4. Click on a specific cocktail to view detailed information, including ingredients and instructions.
5. To navigate back to the search results, use the back button or other navigation elements provided by React Router.
6. React Query will cache the fetched data on the server, ensuring faster loading times for subsequent searches and recipe views.

## Credits

This Cocktail Recipe Finder React app built with Vite was developed by [https://github.com/ProfessorBunny] to demonstrate using React Router and React Query to create a seamless and performant user experience for searching cocktail recipes.
