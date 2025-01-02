import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();


  useEffect(() => {
    fetch("/api/v1/check-session")
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            setUser(data);
          });
        } else {
          return res.json().then((errorObj) => {
            console.error(errorObj.error);
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return React.useContext(UserContext);
}