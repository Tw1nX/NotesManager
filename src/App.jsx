import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Note from './pages/Note';
import Notes from './pages/Notes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Notes />,
  },
  {
    path: '/:id',
    element: <Note />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
