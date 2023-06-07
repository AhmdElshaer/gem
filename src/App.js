import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import { CollectionItemLoader, homeLoader, museumCollections, museumLoader, searchAll } from './config/Config';
import Museum from './pages/Museum';
import MuseumCollections from './pages/MuseumCollections';
import CollectionItem from './pages/CollectionItem';
import SearchCollections from './pages/SearchCollections';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <Home />, loader: homeLoader },
    {path: 'museum', children: [
      {index: true, element: <Museum />,loader: museumLoader},
      {path: 'collections', children: [
        {index: true, element: <MuseumCollections />, loader: museumCollections},
        {path: ':itemId', element: <CollectionItem />,loader: CollectionItemLoader},
        {path: 'search',element: <SearchCollections />, loader: searchAll}
      ]},
    ]},
  ]}
]);

function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
