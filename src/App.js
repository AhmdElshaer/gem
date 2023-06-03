import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import { homeLoader, museumLoader } from './config/Config';
import Museum from './pages/Museum';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <Home />, loader: homeLoader },
    {path: 'museum', element: <Museum />,loader: museumLoader},

  ]}
]);

function App() {
  // useEffect(() => {
    // getData(homeUrl);
    // async function homeFetch () {
    //   const response = await fetch('https://uat-iconcreations.com/2022/gem/public/api/web/home');
    //   if (!response.ok) {
    //     throw json({ message: 'Could not fetch .' });
    //   } else {
    //     const resData = await response.json();
    //     console.log(resData);
    //     return resData;
    //   }
    // }
    // homeFetch();
  // })

  return (
      <RouterProvider router={router} />
  );
}

export default App;
