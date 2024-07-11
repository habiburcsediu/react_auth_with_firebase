import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Service from "./components/Service";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className="app">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/service"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
