# React-tac-toe

## Build something like this!
![Tic-tac-toe Game](https://github.com/grain-team/tic-tac-toe/blob/master/objective.png?raw=true)

# Extra points
- Use TypeScript
- Make it look nice
- Add modern tooling of your choice (linter, formatter, etc)
- Save game data to LocalStorage
- Add a controller to change the grid size (3x3, 4x4, 5x5 or 6x6)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


#### Maxi Aragon ####
I'm going to write the decisions made along the challenge.

I would like to add the linter and formatters first.
Installed typescript

Without specifications, the first playable mode that comes to mind is that each player has his turn to select a spot with the click of a mouse.
So, to make it clear for the users the app should require both players name to show who should be next (and properly show later who wins!)

Regarding the styling, I tried to keep it simple with styled-components. I didn't want to add another library

I usually work with Redux, but I didnt find a scenario where it should be used (adds several new files)

I tried to keep most solutions based on the fact that there will be only 2 players

If the render of each cell is timeconsuming, I would've implemented a solution to avoid re-rending each time the board changes.
Maybe using redux and extracting the board as an object.    


I usually try to separate dummy components from containers (the ones that access the data), but for this challenge I loose this approach a little bit.


### Next steps
I invested a few hours into this challenge, there are several things I've been thinking in adding, but it doesn't look like is the real purpose of this challenge.
Some tasks still needed here are:
- Add unit tests and components
- Add a small algorithm to check the winner
- More UX stuff.

