import { createRoot } from 'react-dom/client';
import { lazy, Suspense, StrictMode } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import App from './app';
import { SplashScreen } from './components/loading-screen';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const UploadPage = lazy(() => import('src/pages/upload'));

export const routesSection = [
  {
    path: '/',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <UploadPage />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
