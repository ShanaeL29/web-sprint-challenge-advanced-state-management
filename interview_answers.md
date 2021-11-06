# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

   Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app. Context API allows us to share state across the entire app (or part of it) with ease. It assists in solving prop-drilling from all levels of your application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   A reducer is a function that determines changes to application state. Reducers use the actions received to determine the change.
   Actions are objects that contain the only source of information for the store. Actions have a required type field that tells what kind of action to perform. Action creators are the functions that create the actions. Basically actions are the information objects and action creators are functions that return the actions. The store is the object which holds the state of the application. The store is known as a 'single source of truth' because the state of the application is stored in this single object tree so one app = one store. We don't change the state object and properties directly. Instead we make a new object, recalculate the app state and updat it with our new object. The changes are made with the reducers which are pure functions.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   Reduc-thunk allows us to make the Redux action-reducer flow asynchronous and it changes our action-creators by allowing us to make API calls from them.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux because it is very difficult and I want to learn how to master it. It challenges me and I like challenges.
