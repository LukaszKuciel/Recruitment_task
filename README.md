#Schibsted recruitment task

I decided to use a structure that allows for endpoint specific services and components.

In *src/components* folder are placed reusable components like *SchibstedDropdown* which takes an array of values, callback and listens for value attribute change. There is also SchibstedResponsePreview which is syntax highlighted data presenting component with use of prism.js.

Then in *src/advertisers* folder, we have files specific for this API endpoint. So we have service.js which handles API request, components.js which keeps and connects specific for advertisers view component and index.js file which takes all components needed and exports it to a function.

There is also a scss folder for styles and variables, which can have a more complex structure. Assets are placed in *src/assets* folder.

In the *src/* there is index.html which is a basic template with header and main custom HTML elements. There is also an index.js file which imports functionality from *advertisers/index.js* and fires an imported function.

I decided to use Web Components with Custom Elements and scss because it's already well supported and gives some additional functionalities to our components. Shadow dom wasn't used because of lower browser support. I also wanted to avoid style encapsulation because I want components to use global scss styling.

Additionally, I created simple node.js API with use of *hapi.js* there I created an endpoint for reading *XML/JSON files* depending on requested data type. Unfortunately, I haven't enough time to develop data streaming API on the back-end with generator rendering function on the front-end side. My proposition for performance strategy is to use lazy loading of data with the use of JS generator functions.

In my workflow, I used eslint for code maintenance, babel and webpack for building a project. There are some, but they are mostly dev dependencies for bundling process. In production dependencies, there is hapi(+inert), prism and babel polyfill.

I hope that you will like how I dealt with the task that you gave me. 
I hope to hear from you soon :)

## Online preview
A task is deployed on Heroku and available under the link below:
[Click here](https://afternoon-brook-21012.herokuapp.com/)

## Instalation
You can start a project with the following instructions:
1. Go to the root of the project
2. use `npm install` command in terminal - it should build a project after install
3. use `npm start` command in terminal it should start a server
4. task is available under localhost:3000
