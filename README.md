This Front End focused project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

The technologies I used for this project are react, redux, react-bootstrap, and react-router. Based on the shape of the data and the status of each campaign, I decided to display the campaigns into two groups: the editable version and the non-editable version. To display both groups, I used tables which dynamically rendered the needed columns and rows. The home page houses the campaigns which acts as the parent component and is connected to the store. Each campaign is a component of its own which receivs props from the home page. Each component has event listeners for edit or delete. When edit/delete takes place, the appropriate action creator is dispatched and data is modified accordingly. I used a form for the layout for adding a new campaign. In the process of adding a new campaign, the data is verified before submission. I built function to use accross the components with some test coverage.

## Installation

In the project directory, you can run:

### `npm install`

## Running the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
