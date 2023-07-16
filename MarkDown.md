[MarkDown cheet sheat](https://github.com/simpledevio/markdown-cheatsheets/blob/master/markdown-cheatsheet.md?plain=1)

- this if you needed normal style
  ```
  const containerStyle = {
    display: "flex",
  };
  <div style={containerStyle}>
  ```

# _problems Solved_

1.  > the overflow: hidden; property is added to the Parent component. This property prevents margin collapse between the parent and child elements.
    >
    > By using overflow: hidden;, the parent element establishes a new block formatting context, which prevents the margin of the child element from collapsing with the margin of the parent element.
2.  solving the problem of smooth displaying slider by usig to transition function (one for the opacity and one for the transform🙃)
    ```
       transition: opacity 1s ${({ sideopen }) => (sideopen ? 'step-start' : 'step-end')};
       transition: transform 200ms ${({ sideopen }) => (sideopen ? 'linear' : 'step-start')}
    ```
3.  if you want to do something with the fetched data by reactQuery outside the return() you have to wrap it in if condition checks if the status=='success' or not as the component renders without the data in the first time (the data takes time be fetched)

# _Notes_

1. - if you know the targeted element after click happens --> select it as global from the beginning using ref (or querySelector if you are using react)
   - if you don't know what the target element use `e.target`
   - if the targeted element is the element that have the click listener itself use `e.currentTarget`

2. <font color="brown">Selecting Styled Component from the Parent Styled Component </font>
   ```css
   const parent = styled.div`
    & ${Child}:nth-of-type(2) { /*select nth regardless of its level of nesting in the parent*/
        background-color: red;
      }
    }`
   ```
3. using `const titleRef = useRef<HTMLInputElement>(null);` it enforces that the ref is specifically intended to reference an `<input>` element and provides type safety when accessing properties or methods of the referenced element.
4. `Promise.reject('error msg')` `Promise.resolve('hello world)` `new Promise(res => setTimeout(resolve,1000))` just resolve don't do any thing
5. `<pre><pre>` symantic element for adding errors
6. we can use `color-gradient` to give the same effect of `box-shadow`
7. <details>
     <summary>good setup for github mark down (needs mention npm)</summary>
      <img src='./good%20Setup.png' height=350px/>
   </details>

8. <details>
     <summary>Render Entire Page Depending on Click Events (similar to rendering entire page based on URL using Router)</summary>
      <img src='./render%20entire%20page%20depending%20on%20click%20events.png' width=800px/>
   </details>
9. makeing the button disabled when loading data
   ```html
   <button disabled="{postsQuery.isloading}"></button>
   ```
10. don't forget that the names of `props` is only lower case, i got a problem that the prop does't make effect in the styled componet for an hour without showing any error because i named a `prop` in chamel Case😭😭
11. always keep keep a paper and a pen besides you to keep your mind clear of ideas and things to remember🧘‍♂️🌱🧘‍♂️
12. don't forget to use optional chainging with data comes form APIs (so if error happens don't crash)

# _Questions_

1. <font color="brown">What is `useParams` from react-router-dom and `parseInt(id!)`</font>

# _Done_

1. using theme provider in styled components to make global colors theme
2. route between pages by mapping page URL comes from `useLocation().pathname` to pages names and indexes -- page previous was(currentTarget.textContent + move state to parent)
3. make the nav bar and side bar fixed or static if needed <b>and</b> make entire page adapt with large screans (max-widht:1600px)
4. start using react-query-divtools & react-query for statistics components
5. making text-overflow: ellipsis;
6. creating global card and cardContainer
7. customization for scroll bar
8. used custom table from MUI and using styled components to editing it's style
9. creating sideBar Context to detect openning and closing it and implement smooth motion of the sideBar
10. connect to json Server, creating random data of users and transactions using js script and add only one admin user
11. make URL authentication to for non-Admin users (admin only can login) logged user can't go back to login page while logged.
12. create transactions page and walet page
13. using reactQuery to fetch all data

# _ToDo_

1. create new Structure for the project
2. make pages responsive
3. change links to inputs to Refs
4. when we click on statistics card it show in the middle of the screen with the full number that may be overflow
5. change the doctor image
6. create page has table contain all doctors and patients in the system by pagination
7. edit users memberships from doctor to user
8. page for all medicines and can add new medicine
9. show all questions and blogs
10. show all specialities in the system and edit info of each
11. add dark theme
