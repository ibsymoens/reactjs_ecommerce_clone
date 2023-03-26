import Ebike from "./Ebikes/Ebikes";
import Accessories from "./Accessories/Accessories";
import ServiceAndSupport from "./ServiceAndSupport/ServiceAndSupport";
import About from "./About/About";

export const navs = [
    {
        idx: 0,
        name: "allTerrain",
        label: "Ebikes",
        show: false,
        component: Ebike,
    },
    {
        idx: 1,
        name: "accessories",
        label: "Accessories",
        show: false,
        component: Accessories,
    },
    {
        idx: 2,
        name: "serviceAndSupport",
        label: "Service & Support",
        show: false,
        component: ServiceAndSupport,
    },
    {
        idx: 3,
        name: "about",
        label: "About",
        show: false,
        component: About,
    }
];