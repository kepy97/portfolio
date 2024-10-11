This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### Setup NodeJS
For this project use Node version 10. [Steps](https://sukiphan.medium.com/how-to-install-nvm-node-version-manager-on-macos-d9fe432cc7db) - 
- `nvm install 10`
- `nvm use 10`
- `nvm -v && npm -v` - (0.40.1 | 6.14.12)
- `nvm ls` - (v10.24.1)

### `npm install` 

In the project directory, you can run: 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/) for more information.

### Netlify Deployment 

The portfolio hosted on Netlify. Go to `build` folder
> - `nvm use 20` - Now using node v20.17.0 (npm v10.8.2)
> - `npm install netlify-cli -g`
- `netlify deploy` 
- Test the deployment
- If all looks good, netlify deploy --prod

So, above commands deploy the current changes to Netlify. You can access demo [here](https://keyulpatel.com/).