Notes


1. Check NoteJS version : node -v
2. create react app: npx create-react-app hello-world
3. Directory structure
- node_modules : contains all dependencies
- public : contains all static resources, images etc.
- src : react components


Running react app:
1. cd <Name of the Project>
2. npm start


Note: that openes the local brower. 
http://localhost:3000/

React helps us to create single page application (SPA)

React app consists of one or more components
- A component is re-usable UI element
-There are two ways to create components
1) Using function knowns as functional components (modern ways)
2) Using class known class based components (old methods)


Steps to create functional components:
1) Create a java script file.
2) Create a function (with same name as file name - recommended)
3) Return JSX from the function
4) Export the component
5) IMport the component where needed and use it as html tag.

Note: Component name should begin with uppercase.

JSX : Javascript XML
It allows us to write html inside react component.
JSX needs to be wrapped into single parent element. 
"Fragment" as parent element is strongly recommended as it doens't add additional nodes while rendering the page

Task:
Create a header component which prints title as "Walmart App"
Create a footer component which renders copyright info 2024 Walmart