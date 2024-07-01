# Smart Meeting Scheduler - Frontend

Welcome to the Smart Meeting Scheduler frontend project! This application is designed to help users manage their meetings efficiently by leveraging modern web technologies. Below, you'll find detailed information about the project structure, how to set it up, and how to contribute.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Installation and Setup](#installation-and-setup)
6. [Available Scripts](#available-scripts)
7. [Environment Variables](#environment-variables)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

The Smart Meeting Scheduler is a web application designed to simplify the process of scheduling, managing, and tracking meetings. Users can create, update, and delete meetings, receive notifications, and view their meeting schedules in a user-friendly interface.

## Features

- **User Authentication**: Secure login and registration system.
- **Meeting Management**: Create, update, delete, and list meetings.
- **Notification System**: Send notifications to users about upcoming meetings.
- **Calendar Integration**: View meetings on a calendar.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Redux, Vite
- **Styling**: CSS (using custom styles and CSS reset)
- **State Management**: Redux
- **HTTP Client**: Axios
- **Routing**: React Router
- **Notifications**: Custom Notification Service

## Project Structure

SmartMeetingScheduler/
├── frontend/
│   ├── public/
│   │   ├── vite.svg
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Calendar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MeetingForm.jsx
│   │   │   ├── MeetingList.jsx
│   │   │   ├── Notification.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── services/
│   │   │   ├── ApiService.js
│   │   │   ├── AuthService.js
│   │   │   └── NotificationService.js
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   └── meetingActions.js
│   │   │   ├── reducers/
│   │   │   │   ├── meetingReducer.js
│   │   │   │   └── rootReducer.js
│   │   │   └── store.js
│   │   ├── styles/
│   │   │   ├── colors.css
│   │   │   ├── global.css
│   │   │   └── reset.css
│   │   ├── utils/
│   │   │   ├── dateUtils.js
│   │   │   ├── validationUtils.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── routes.jsx
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
├── backend/ (your backend files go here)
```

### File Descriptions

#### Components

- **Calendar.jsx**: Displays a calendar view of meetings.
- **Header.jsx**: Contains the top navigation bar.
- **MeetingForm.jsx**: Form for creating and updating meetings.
- **MeetingList.jsx**: List view of all meetings.
- **Notification.jsx**: Component for displaying notifications.
- **Sidebar.jsx**: Sidebar navigation menu.

#### Pages

- **Dashboard.jsx**: Main dashboard where users can view and manage their meetings.
- **Login.jsx**: Login page for user authentication.
- **Register.jsx**: Registration page for new users to sign up.

#### Services

- **ApiService.js**: Handles API requests to the backend (GET, POST, PUT, DELETE operations).
- **AuthService.js**: Manages authentication logic (login, logout, register).
- **NotificationService.js**: Handles sending notifications to users.

#### Store

- **actions/meetingActions.js**: Actions for managing meetings (create, update, delete, fetch).
- **reducers/meetingReducer.js**: Reducer for managing the state of meetings.
- **reducers/rootReducer.js**: Combines all the reducers into a single root reducer.
- **store.js**: Configures the Redux store, combining reducers and applying middleware.

#### Styles

- **colors.css**: Defines the color scheme of the application (black, white, grey, and a touch of orange).
- **global.css**: Contains global CSS rules that apply throughout the application.
- **reset.css**: CSS reset to ensure consistency across different browsers.

#### Utils

- **dateUtils.js**: Utility functions for handling date and time operations.
- **validationUtils.js**: Utility functions for form validation.

#### Main Files

- **App.jsx**: The main component that sets up the application structure, including routing.
- **index.jsx**: The entry point of the React application, where the ReactDOM.render method mounts the App component.
- **routes.jsx**: Defines the routes for the application using React Router.

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/JosephNjorog/SmartMeetingScheduler.git
    cd SmartMeetingScheduler/frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root of the `frontend` directory:**

    ```plaintext
    REACT_APP_API_URL=http://localhost:5000/api
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run serve`**: Serves the built app for preview.

## Environment Variables

The application requires the following environment variables:

- **REACT_APP_API_URL**: The base URL of the backend API.

## Contributing

We welcome contributions to the Smart Meeting Scheduler project! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using the Smart Meeting Scheduler! If you have any questions or need further assistance, feel free to contact us. Happy scheduling!

            
            
            ADIOS - By Joseph-M
