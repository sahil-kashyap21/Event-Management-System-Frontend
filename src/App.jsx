import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from "./routes/routes";
import "./App.css";
import InfoSection from './components/InfoSection/InfoSection'; // Importing InfoSection

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <InfoSection /> {/* Adding InfoSection above RouterProvider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
