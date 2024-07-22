import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './fonts.css';
import React from 'react';

const UserName=React.lazy(()=>import('./components/UserName'));
const Password=React.lazy(()=>import('./components/Password'));
const Dashboard=React.lazy(()=>import('./components/Dashboard'));
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<React.Suspense fallback={<div>Loading...</div>}><UserName/></React.Suspense>
  },
  {
    path:"/password",
    element:<React.Suspense fallback={<div>Loading...</div>}><Password/></React.Suspense>
  },
  {
    path:"/dashboard",
    element:<React.Suspense fallback={<div>Loading...</div>}><Dashboard/></React.Suspense>
  }
])

function App() {
  return (
    <RouterProvider router={appRouter}>
    

    </RouterProvider>
  );
}

export default App;
