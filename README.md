# React State and Events Pairing

## Learning Goals

- Train yourself to [Think in React](https://reactjs.org/docs/thinking-in-react.html)
- Design components based on a mockup
- Pass down data to components via props
- Handle user interaction via events
- Use **state** to trigger changes in the DOM

## Setup

Fork and clone this lab. Then, `cd` into the lab directory and run:

```sh
npm install
npm start
```

This will install all the dependencies and run the application in your browser at [http://localhost:3000](http://localhost:3000).

## Deliverables

Your goal is to build this app from scratch:

![demo](demo.png)

The application has the following features:

- When the app loads, display a video along with its details and a list of all
  the comments
- When a user clicks on the "👍" button, the number of upvotes for the video
  should increase
- When a user clicks on the "👎" button, the number of downvotes for the video
  should increase

The data you'll need for the app can be found in the `video.js` file.

Start by planning out what components you'll need and draw out your component
hierarchy. Then, build out your components and pass down any data they need via
props using the `video` object that's been imported in the `App` component.

Consider what components need to use **state** as you're building out these
features.

There's an example of how to embed a video using an `<iframe>` in the `App`
component. Other than that, you're on your own in terms of how to design each
part of the application. Don't worry too much about getting the styling to match
the demo. Focus on functionality.

Good luck!

## Bonus

If you finish early and want to get more practice with state and events, here are some ideas for additional features:

- Add upvote/downvote buttons to each comment DONE
- Add a search bar to search comments by username DONE
- Add a "Remove Comment" button to delete comments from the page DONE
- Add a sorting feature to sort the comments
    INTERNALLY SORTED, NO WAY FOR END USER TO SORT YET