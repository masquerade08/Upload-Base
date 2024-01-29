import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin/signin";
import Upload from "./pages/Upload/upload";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Signin/> },
    {path:"/upload",element:<Upload/>}
  ]);
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;