This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



# Seven West Media front-end tech challenge

## Introduction

This is desgined to be a light-weight test to assess code style and knowledge of JavaScript and React features.

You'll need to build a list of posts, that's both sortable and filterable (criteria below). Data sources are supplied as
JSON files, and can be imported into, or directly included in a project file.

### Task notes:
- There's no scoring criteria, nor are there any "wrong answers", so long as the tasks are completed as described.
- If you get stuck on a point, that's OK.
- If you see areas where the project could be improved in future, make comments in either a TODO.md file, or inline.
- Add comments where you feel they're necessary.
- Ask questions about the task if you have any.
- Use online references if you would like.

Estimated time to completion 2-4 hours - but take as long as you need.

## Tasks

1. Use Facebook's CRA to create a React project, and don't add any additional dependencies -
https://github.com/facebookincubator/create-react-app
2. Use the supplied `posts.json` and `users.json` files as data sources, and manipulate them as needed. These can be
imported into the project, or added directly.
3. Use this pen as a design reference -
https://codepen.io/ktv18/pen/zzRaEx
    - You may copy CSS/HTML from the pen, but it doesn't matter if your styles and elements don't match exactly.
    - The visual structure should remain the same.
    - Create as many components as you think are necessary, however, at minimum the the list of posts and posts must be
    separate components.
3. Implement the two filters, populating the options from the JSON data (not hard-coded):
    - City name
    - Company name
4. Implement sorting, allowing for sorting by:
    - Author name
    - City name
    - Company name
5. Implement functionality to search for posts by title
6. Implement functionality to delete posts
7. Ensure that the first letter of each post's title and body are capitalised.

## For discussion

We will discuss the following with you after reviewing your implementation, but do not add these features as they are
not required:
1. What else could you do with the available data?
2. What considerations should you give to the component lifecycle?
3. How could the list of posts be animated when sorting and filtering?
