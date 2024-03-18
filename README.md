# Welcome to Tokenize Demo!

Currently includes:

- React Native
- React Navigation
- Redux Tookit
- TypeScript
- And more!

## Quick Start

The project's structure will look similar to this:

```
TokenizeDemo-project
├── src
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── app.tsx
├── __test__
│   ├── App-test.js
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
├── ios
│   ├── TokenizeDemoProject
│   ├── TokenizeDemoProject-tvOS
│   ├── TokenizeDemoProject-tvOSTests
│   ├── TokenizeDemoProject.xcodeproj
│   └── TokenizeDemoProjectTests
├── .env
└── package.json

```

### ./src directory

The inside of the `src` directory looks similar to the following:

```
src
├── assets
├── components
├── constants
├── context
├── localization
├── models
├── routes
├── screens
├── services
├── store
├── theme
├── utils
├── app.tsx
```

**assets**
The assets directory is where you can store static assets such as images, fonts, and other resources that are used in your application. These assets can be referenced and imported in your code to enhance the visual and interactive elements of your app.

**components**
This is where your reusable components live which help you build your screens.

**context**
The context directory is where you define and manage your application's Context API. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's typically used for data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

**localization**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**routes**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**store**
store The store directory is where you can define and manage your application's state using a state management Redux Tookit library. It typically includes actions, reducers, and selectors that handle the state updates and data flow in your application. This directory helps you centralize and organize your application's data and provides a predictable way to manage and update the state across different components.

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

## Installation

1. Clone the repository.
2. Install dependencies by running the following command:

```
yarn
```

## Usage

1. Start the development server:

```
yarn start
```

2. Run the app on iOS simulator:

```
yarn ios
```

3. Run the app on Android emulator:

```
yarn android
```
