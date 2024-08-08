# usermanagementapp

Implementing Infinite Scrolling and Pull-to-Refresh in a User Management App

## PROJECT NAME: USER MANAGEMENT APP

# Getting Started

This React Native project demonstrates how to implement infinite scrolling and pull-to-refresh functionality in a user management app. Additionally, the app displays a list of users on one screen and detailed information about a selected user on another screen.

## Architecture

The application follows a modular architecture with the following key components:

React Native: The core framework for building cross-platform mobile applications.

## Folder Structure

/project-root
│
├── /android # Android-specific code and configuration
├── /ios # iOS-specific code and configuration
├── /src
│ ├── /components # Reusable components
| ├── /screens # components
| ├── /redux # for handling reducers and store
| ├── /navigation # for handling stack navigation
│ ├── /assets # font styles
│ └── App.tsx # Entry point of the application
│
├── .babelrc # Babel configuration
├── .eslintrc.js # ESLint configuration
├── .prettierrc # Prettier configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

## Features

- **Infinite Scrolling**: Efficiently load large sets of data by fetching more users as you scroll.
- **Pull-to-Refresh**: Refresh the user list by pulling down on the screen.
- **User Details Screen**: Tap on a user to see detailed information on a separate screen.
- **TypeScript Integration**: The project is written in TypeScript for type safety and better developer experience.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install

npm start

```

# If you face any issue with running app check the NDK version in the system and change accordingly

# If you face any issue with android setup

For Mac enter this command in terminal in project level

```bash

chmod 755 android/gradle

```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_

### For Android

```bash
# using npx
npm react-native run-android

```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ shortly provided you have set up your emulator/simulator correctly.
