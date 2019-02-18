# Recruitment_task
Schibsted recruitment task

I decided to use structure that allows for enpoint specific services and components.

In src/components folder are placed reusable components like SchibstedDropdown which takes array of values, callback and listens for value attribute change. There is also SchibstedResponsePreview which is syntax highlighted data presenting component with use of prism.js.

Then in src/advertisers folder we have files specific for this API endpoint. So we have service.js which handles api request, components.js which keeps and connects specific for advertisers view component and index.js file which takes all components needed and exports it to a function.

There is also scss folder for styles and variables, which can have more complex structure. Assets is a folder where all assets will be placed.

In the src/ there is index.html which is a basic template with header and main custom html elements. There is also index.js file which imports functionality from advertisers/index.js and fires an imported function.

I decided to use Web Components with Custom Elements and scss because it's already well supported and gives some additional functionalities to our components. Shadow dom wasn't used because of lower support and I wanted to use scss global styling rather than encapsulated styles.


Additionaly I created simple node.js api with use of hapi.js there I created endpoint for reading xml/json files depending of requested data type. Unfortunatelly I haven't enough time to develop data streaming api on back-end with generator rendering funtion on front-end side. This is my proposition for performance strategy. To use lazy loading of data with use of JS generator functions.

In my workflow i used eslint for code mainanence, babel and webpack for building a project. There are some dependecies but they are mostly dev dependencies for bundling process. In production dependencies there is hapi(+inert), prism and babel pollyfill.

I hope that you will like how I dealed with task that you gave me. I could do it better but currently I don't have many free time so this is it. 
How to hear from you soon :)


Task is avaiable on Heroku under this link:

You can also start it with following instructions:
1. Go to root of the project
2. use 'npm install' command in terminal
3. use 'npm start' command in terminal - it should build a project and start server
4. task is available under localhost:3000
