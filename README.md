# You Can Spend

## What it does

> The simplest, most straight forward tool for tracking spendings, budgets, savings and staying on top of your finances.

You can add budgets and savings. On the first of the month, each budget will reset to it's original value. Each saving has a `rate`. On the first of each of each month the saving is increased by the given `rate` amount. After selecting any budget or saving you are able to track spendings on each particular one of them. The app will tell you how much money you have left to spend until the end of the month.

## How it's built

This is a complete rebuilt of an app I built before. The goal of this app was to build it on the JAM Stack using as little frameworks and outside libraries as possible. The app is built with Webpack (but not React!) in order to be able to use ES2015. ES2017 features have been taken out temporarily.

## Roadmap

> Things that I want to get done but most likely won't.

- [x] Add transactions edit page
- [ ] Add loading spinner when signing in/up
- [ ] Better feedback on signup/signin/settings forms (email address already taken, password wrong etc.)
- [ ] Split out authentication logic into a SessionsController
- [ ] Add Settings where you can:
  - [ ] show current app version number
  - [ ] Logout
  - [ ] change email
  - [ ] change password
  - [ ] change timezone
  - [ ] 'Add to Homescreen' button (Android only)
- [ ] Adjust automatic saving transactions:
  - [ ] add more descriptive labels (add month names)
  - [ ] set `created_at` to be the first of the particular month (and `updated_at` today)
- [x] Switch Firebase config from testing to production (use environment variables to use different ones in dev and on production)
- [ ] Make budget/saving icon editable
- [ ] Add a 'Back' button

- [ ] Write tests
- [ ] Better handling of nested/associated resources
- [ ] Split out all firebase specific server logic into a single `ServerAdapterFirebase`
- [ ] Create a new `ServerAdapterLocal` to act as the default storage on localStorage and without authentication
  - [ ] Use settings page to signup/signin to switch to using the `ServerAdapterFirebase`
- [ ] Optimize view for desktop
- [ ] Visualize amount left
- [ ] Better Route handling

## Thanks

Special thanks to [Netlify](https://netlify.com) for hosting this open source project!
