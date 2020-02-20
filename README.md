# HTN 2020 Challenge Submission: Part 2
Hey! Thanks for checking out my challenge submission.

## Development Process

**Planning**
- wanted to plan before coding
- thought about libraries first:
    - axios has simple syntax
    - used react bootstrap because i thought it would be a good starting point for responsive layout
- planned out a basic file structure that would look something like:
```
src/
    components/
        Login.jsx
        Overview.jsx
        ParticipantCard.jsx
    App.jsx
    styles.css (or ThemeProvider)
    dataUtils.js
    constants.js
```
- logging in strategoy: using local storage to store value for 'rememberMe'

**Actual Development**
- biggest challenge was styling. i wanted to be able to display all info without making shit look weird, ended up custonizing a lot of bootstrap's preset classes

## Given Additional Time
- Improvements to the profile:
    - Would focus on making generic components to account for new attendee types
        - Generic 'profileCard' component that would take a profil_type as a prop and render accordingly
    - would make a 'DataProvider' component that would handle the API call in a separate file, rather than keep it in the .jsx in a component lifecycle function
- make generic components in general for readability + expansion
    - ex) pills: rather than a CSS class, would be good to make a component that takes a text and color prop and renders a pill
    - possibly using the styled components to help out with this 
- would probably make the UI look more exciting
    - kept it simple due to time constraints...my bad y'all