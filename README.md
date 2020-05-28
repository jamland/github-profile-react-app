## Description 

Search over github profiles, show profile details and list of public repos, show details about repository.   
`https://api.github.com` used to access github data. 

## How to run

```
npm install
npm run
```

## Tech Stack

- React.js
- React Router
- Context API

### Folder Structure

```
src
 |
  - components - all UI components can be found here
  - context - data store, data fetch / update things are here
  - services - API services
  - styles - some global styles
  - App.js
  - index.js - app entry file
```

### Styles

[Milligram CSS](https://milligram.io/) was used as style base, since it provides default styles for HTML elements. Styles fetchted in `/public/index.html` file.
