import Home from "../pages/Home/Home.jsx";

import Battery from "../pages/Battery.jsx";
import Broadcast from "../pages/Broadcast.jsx";

import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";

const routes = [
  { path: "/", component: Home },
  { path: "/battery", component: Battery },
  { path: "/broadcastchannel", component: Broadcast },
  { path: "*", component: PageNotFound },
];

export { routes };