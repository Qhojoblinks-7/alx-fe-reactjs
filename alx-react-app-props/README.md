---

# ALX React App - Refactored with Context API

This version of the React application, named **alx-react-app-props**, is a refactor of the previous app that eliminates prop drilling by using the Context API to manage user data across components.

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/alx-fe-reactjs.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd alx-fe-reactjs/alx-react-app-props
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

   This starts the application on `http://localhost:3000` in your browser.

## Project Structure

The application refactors data flow by removing prop drilling and implementing the Context API.

### Directory Structure

```
alx-react-app-props/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── ProfilePage.jsx
    │   ├── UserInfo.jsx
    │   └── UserDetails.jsx
    ├── contexts/
    │   └── UserContext.js
    ├── App.jsx
    └── index.js
```

### Steps to Implement Context API

#### 1. Create a Context (UserContext.js)

In **contexts/UserContext.js**, create and export the `UserContext`:

```jsx
import { createContext } from 'react';

const UserContext = createContext(null);

export default UserContext;
```

#### 2. Provide Context in App.jsx

In **App.jsx**, import `UserContext` and wrap the `ProfilePage` component with `UserContext.Provider`. Pass `userData` as the `value` to the provider.

```jsx
import ProfilePage from './components/ProfilePage';
import UserContext from './contexts/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
```

#### 3. Refactor UserDetails to Use Context

In **UserDetails.jsx**, use the `useContext` hook to consume `UserContext`, removing the need for `userData` as a prop.

```jsx
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
```

#### 4. Remove Unnecessary Props

Since the data is now provided by the Context, remove the `userData` prop from **ProfilePage.jsx** and **UserInfo.jsx**.

- **ProfilePage.jsx**:

  ```jsx
  import UserInfo from './UserInfo';

  function ProfilePage() {
    return <UserInfo />;
  }

  export default ProfilePage;
  ```

- **UserInfo.jsx**:

  ```jsx
  import UserDetails from './UserDetails';

  function UserInfo() {
    return <UserDetails />;
  }

  export default UserInfo;
  ```

### Testing the Application

1. Run the app with `npm start`.
2. Open `http://localhost:3000` in your browser.
3. Confirm that the user data is displayed correctly in **UserDetails**, even without prop drilling.

## Repo

GitHub repository: **alx-fe-reactjs**
- Directory: `alx-react-app-props`

## License

This project is licensed under the [MIT License](LICENSE).

---