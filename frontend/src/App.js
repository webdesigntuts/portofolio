import "./styles/App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portofolios from "./pages/Portofolios";
import Portofolio from "./pages/Portofolio";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Cv from "./components/Cv";
import NotFound from "./pages/NotFound";

import { AnimatePresence } from "framer-motion";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Cv />
        <AnimatePresence exitBeforeEnter initial>
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portofolio">
              <Route index={true} element={<Portofolios />} />
              <Route path=":portofolioId" element={<Portofolio />} />
            </Route>
            <Route path="blog">
              <Route index={true} element={<Blogs />} />
              <Route path=":blogId" element={<Blog />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ApolloProvider>
  );
}

export default App;
