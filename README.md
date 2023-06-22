# TASK


[x] 1. Use TypeScript to define the User type with the following properties: ID (string), rank (number), name (string), email (string), image (string), and friends (array of user IDs).
[x] 2. Fetch the users' data from an API endpoint when the component mounts. The API response should be an array of User objects.
[x] 3. Implement a function called formatUser that takes a User object as input. This function should fill in two additional properties: friendNames (an array of all friends' names) and highestRankingFriend (the ID of the friend with the highest rank). The friendNames array should contain the names of the users based on their IDs. Find the optimal place for this function so it's called as infrequently as possible. 
[x] 4. Create a user component called User that receives the following props: user (User object), onClick (function to be called when the user is clicked), and isSelected (boolean indicating if the user is selected).
[x] 5. Display the list of users on the users page using the User component. Show the user's name, email, and friend names in the component. When a user is clicked, update the selectedUser state variable to the ID of the clicked user.
[x] 6. Implement memoization for the User components to optimize performance. The components should only re-render when the user data is updated.
[x] 7. Implement searching functionality by name, ID, or friend's ID. Allow users to search for users by entering a query in an input field. Display only the users that match the search criteria. The search should be case-insensitive and match any part of the user's name, ID, or friend's ID.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
