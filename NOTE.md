
# File Structure

## Grouping by features or routes
The definition of a “feature” is not universal, and it is up to you to choose the granularity. If you can’t come up with a list of top-level folders, you can ask the users of your product what major parts it consists of, and use their mental model as a blueprint.

(downsides) too many nested folders

## Grouping by file type
[Atomic design](https://bradfrost.com/blog/post/atomic-web-design/#comment-7729)

Some people also prefer to go further, and separate components into different folders depending on their role in the application. Atomic Design is one of the design methodology built on this principle.

## Other examples
### [Simple React Folder Structure](https://dev.to/pcofilada/simple-react-folder-structure-31lj)

 `src/` - Contains all of our react codebase
  - `index.tsx` - Base react component
  - `routes.ts` - App navigation
  - `api/` - Api call related functions
  - `assets/` - Images, fonts and other static files
  - `config/` - Config files
  - `containers/` - [Smart Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
  - `context/` - [React Context](https://reactjs.org/docs/context.html)
  - `types/` - Typescript related files or functions
  - `utils/` - Helper functions
  - `components/` - [Dumb Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
    - `common/` - Shared components

### [How You Should Structure Your React Applications](https://betterprogramming.pub/how-you-should-structure-your-react-applications-e7dd32375a98)

```
/src
  │
  ├── assets
  │   ├── auth
  │   │   │
  │   │   ├── connected.mp3
  │   │   └── background.png
  │   │
  │   ├── fonts
  │   │   └── ...
  │   │
  │   ├── ionicon
  │   │   └── ...
  │   │
  │   ├── profile
  │   │   └── background.png
  │   │
  │   ├── logo.svg
  │   └── ...
  │
  ├── components
  │   ├── componentA
  │   │   ├── service
  │   │   │   ├── index.test.tsx
  │   │   │   └── index.ts
  │   │   │   
  │   │   ├── index.test.tsx
  │   │   ├── index.tsx
  │   │   └── styled.ts
  │   └── ...
  │   
  ├── containers
  │   ├── containerA
  │   │   ├── components
  │   │   │   ├── sub-componentA
  │   │   │   │   ├── index.test.tsx
  │   │   │   │   ├── index.tsx
  │   │   │   │   └── styled.ts
  │   │   │   │
  │   │   │   └── sub-componentB
  │   │   │       └── ...
  │   │   │
  │   │   ├── service
  │   │   │   ├── index.test.tsx
  │   │   │   └── index.ts
  │   │   │   
  │   │   ├── index.test.tsx
  │   │   ├── index.tsx
  │   │   └── styled.ts
  │   │
  │   └── ...
  │
  ├── commons
  │   ├── models
  │   │   ├── notification.model.ts
  │   │   ├── user.model.ts
  │   │   └── ...
  │   │
  │   ├── services
  │   │   ├── notification.ts
  │   │   ├── notification.test.ts
  │   │   ├── user.ts
  │   │   ├── user.test.ts
  │   │   └── ...
  │   │   
  │   ├── store
  │   │   ├── middlewares
  │   │   │   └── ...
  │   │   │   
  │   │   ├── auth
  │   │   │   ├── actions.ts
  │   │   │   ├── epics
  │   │   │   │   ├── some-side-effect.ts
  │   │   │   │   ├── fetch-stuff.ts
  │   │   │   │   └── ...
  │   │   │   │
  │   │   │   ├── reducer.ts
  │   │   │   └── selectors.ts
  │   │   │   
  │   │   ├── index.ts
  │   │   └── state.ts
  │   │
  │   └── theme
  │       ├── animations.ts
  │       ├── global-state.ts
  │       └── index.ts
  │
  ├── app.tsx
  ├── index.tsx
  └── router.tsx
```

# Build and Deploy to github page
Reference: [Deploy an Nx React App to GitHub Pages](https://emilyxiong.medium.com/deploy-a-nx-react-app-to-github-pages-a83de7551ec0)
