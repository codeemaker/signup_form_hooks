import Register from "./pages/Register";
import Cursor from "./components/cursor";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Cursor/>
      <Register/>
      <ToastContainer/>
    </>
  );
}

export default App;
