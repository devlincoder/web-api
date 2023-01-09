import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/route.jsx";
import Layout from "./layouts/Layout.jsx";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
