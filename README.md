# HTN 2020 Challenge Submission
Hey! Thanks for checking out my challenge submission.

## Development Process
**Planning**

Before writing any code, I wanted to have some idea of what file structure would make sense for this app, and which libraries to use. I ended up going with these libraries:
- React:
    - I'm currently using it on coop and thought it would make development faster
    - using `create-react-app` and adding the `--use-npm` because I'm more familiar with npm
- Axios: Has straightforward syntax for API requests
- React Bootsrap: I used this library because I thought it would be a good starting point for a responsive and mobile-friendly layout.

I also wanted to think about how the app would handle logging in/out. I decided on using local storage in Chrome to store a key called `rememberMe` that would skip the login screen if it was set to true. 

**Actual Development**
- adding `--use-npm` to the `npx create-react-app` call worked out because I understood the purpose of each of the generated files right away
    - I ended up removing the default test files because I wanted to spend more time focusing on styling rather than writing unit tests
- functionality first: starting with `dataUtils.js`:
    - Before starting on any UI design, it made sense to have data that could be displayed ASAP, so I started here.
    - wrote a generic `get` function that formatted query params from an object to a uri string. I thought this would be good for eventually sending requests to multiple endpoints without reusing a lot of code.
- displaying a profile:
    - The biggest challenge for me was displaying a profile's information in a way that didn't look extremely awkward. 
    - I used Bootstrap's `Card` component as a starting point, but ended up customizing a bunch of the preset styles by overriding bootstrap's classes in `App.css` (1)
    - For some variety, I though it would be fun to have a colour scheme for each applicant type, so I created a CSS class with a colour for each type (2)
- log in/out logic: 
    - At first, I had the login screen componnt wrapping the profile component like: 
    `<Login render={() => <Overview/>}/>`
    - I found this to be pretty confusing to work on, so I added `AuthProvider` to handle the logic for checking whether a user is logged in, and then render either `Login` or `Overview`.
- empty state:
    - by this point i just had text that said 'empty state tbd' for a null profile and wanted to add some excitement
    - found [this amazing api](https://dog.ceo/dog-api/) and the rest is history

## Given Additional Time
Before going through general improvements that I would make to this app, I wanted to point out 2 specific mistakes that I made:

1. Using react-bootstrap: Though the library was a good starting point for a responsive layout, I ended up rewriting most of the CSS in a separate file. Looking back, it wouldn't have been that much more extra work to add height and width properties that made sense with screen sizes. If I were to redo this, I would probably not use a UI library but rather something like [StyledComponents](https://styled-components.com/docs/basics), which would make code for styling more readable.
2. Creating a CSS class with a color for each applicant type: This is pretty sketchy and would make it pretty annoying to add applicant types. If I were to do this again, I could have a `constants.js` file with an enum with a colour for each type and use it in different components.

Broader Improvements:
- Improvements to the profile:
    - Generic components to easily account for new attendee types: Specifically, I would make a generic 'Pill' component that would take text and a profile type as props and render the appropriate background colour rather than using CSS classes
- Adding excitement to the UI:
    - Having a loading state that isn't just `Loading...`
    - Adding in some cool gradients and animations wherever makes sense
- Asking for feedback on the UI from others
    - I didn't really consult anyone while working on this so I recognize that what I think is acceptable may not be to someone else. The opportunity to work on this with a team would be awesome!

Overall, I really enjoyed working on this app and am excited for your feedback!