# PokeApi

Simple application that contains two pages: (1) the pokemons list, (2) the pokemon details. This project was bootstrapped using `npm init`, and tested for the latest version of Chrome.

## Core libraries:
* React
* Redux Saga
* Styled Components
* Prop Types

## Start here:
```
git clone https://github.com/playola/pokeapi.git

cd pokeapi

npm install

npm run dev
```
See http://localhost:8080.

## Tests
```
npm run test
```
The tests are not 100% finished, but the test pattern is defined and should be similar to the existing tests.

## Architecture
- Components: reusable stateless UI components.
- Pages: containers for the components that defines the routing.
- Routes: defines the routing for the pages.
- Services: API calls using 'axios'.
- Static: assets like images or fonts.
- Store: application state where we combine reducers and fork sagas.
- Style: styled components provider theme, breakpoints, and global styles.
- Utils: reusable utilities and helpers.

## Improvements
Due to time constraints the tests are not finished, and there is an issue with the cookies.

The ideal solution would be to update the existing cookie in the browser when we receive new data. There is an issue when the setCookie method is called, the cookie is not updated in the browser. A solution could be to set a new cookie for each API call, but this solution have not a good performance. So fow now, the cookie update is working only for the first API call.

## References
* https://pokeapi.co/docs/v2.html
* https://github.com/axios/axios
* https://github.com/ctimmerm/axios-mock-adapter
