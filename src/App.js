import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Balances from "./balances";
import Vault from "./components/vault/vault"
import './App.css';

const router = createBrowserRouter([
  {
    path: "/balance",
    element: <Balances/>
  },
  {
    path: "/",
    element: <Vault/>
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
