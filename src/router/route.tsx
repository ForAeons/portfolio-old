import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App, PageNotFound } from "../modules";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/aboutme" element={<p>aboutme</p>} />
      <Route path="/experiences" element={<p>experiences</p>} />
      <Route path="/projects" element={<p>projects</p>} />
      <Route path="/contact" element={<p>contact</p>} />
      <Route path="/resume" element={<p>resume</p>} />
      <Route path="/blog" element={<p>blog</p>} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);