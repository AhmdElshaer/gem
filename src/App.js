import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import { CollectionItemLoader, collectionSearch, highlightItemLoader, homeLoader, museumCollections, museumLoader } from './config/Config';
import Museum from './pages/Museum';
import MuseumCollections from './pages/MuseumCollections';
import CollectionItem from './pages/CollectionItem';
import { lazy, Suspense } from 'react';
import HighlightsDetails from './components/museum/collections/collectionsSearch/HighlightsDetails';
// import SearchCollections from './pages/SearchCollections';

const SearchCollections = lazy(() => import('./pages/SearchCollections'));

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <Home />, loader: homeLoader },
    {path: 'museum', children: [
      {index: true, element: <Museum />,loader: museumLoader},
      {path: 'collections', children: [
        {index: true, element: <MuseumCollections />, loader: museumCollections},
        {path: ':itemId', element: <CollectionItem />,loader: CollectionItemLoader},
        {path: 'collections-search', children: [
          {index: true,id: 'collections-search',element:<Suspense fallback={<p className='font-bold text-orange-500 text-3xl'>Loading</p>}><SearchCollections /></Suspense>, loader: () => import('./config/Config').then((module) => module.collectionsFilters())},
          {path: ':highlightId', element: <HighlightsDetails />, loader: highlightItemLoader},
        ]}
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
