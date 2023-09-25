import ProjetsList from "./pages/ProjetsList/ProjetsList";
import Apropos from "./pages/Apropos/Apropos";
import Contact from "./pages/Contact/Contact";
import Projet from "./pages/Projet/Projet";
import { matchPath } from "react-router";

export const routes = [
  { path: "/", element: <ProjetsList /> },
  { path: "/projets/:projetId", element: <Projet /> },
  { path: "/contact", element: <Contact /> },
  { path: "/a-propos", element: <Apropos /> },
];

export function matchARoute(pathname) {
  for (const route of routes) {
    if (matchPath(route.path, pathname)) return true;
  }
  return false;
}
