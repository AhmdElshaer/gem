
import { useEffect } from 'react';
import { json, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <Home />},

  ]}
]);

function App() {
  

  useEffect(() => {
    async function homeFetch () {
      const response = await fetch('https://uat-iconcreations.com/2022/gem/public/api/web/home');
      if (!response.ok) {
        throw json({ message: 'Could not fetch .' });
      } else {
        const resData = await response.json();
        console.log(resData);
        return resData;
      }
    }
    homeFetch();
  })

  return (
      <RouterProvider router={router} />
  );
}

export default App;
