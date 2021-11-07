import Index from "views/Index.js";
import Hokey114 from "views/Hokey114.js";
import ContactUs from "views/ContactUs.js";

var routes = [
  {
    path: "/index",
    name: "intro",
    icon: "ni ni-tv-2 text-success",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/info",
    name: "hokey114",
    icon: "ni ni-briefcase-24 text-primary",
    component: Hokey114,
    layout: "/hokey114",
  },
  {
    path: "/contact-us",
    name: "Contact us",
    icon: "ni ni-circle-08 text-pink",
    component: ContactUs,
    layout: "/auth",
  }
  // {
  //   path: "/index",
  //   name: "공사중",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // }
];
export default routes;
