// import VectorMap from "./views/maps/VectorMap.js";
// import GoogleMaps from "./views/maps/GoogleMaps.js";
// import FullScreenMap from "./views/maps/FullScreenMap.js";
// import ReactTables from "./views/tables/ReactTables.js";
// import RegularTables from "./views/tables/RegularTables.js";
// import ExtendedTables from "./views/tables/ExtendedTables.js";
// import Wizard from "./views/forms/Wizard.js";
// import ValidationForms from "./views/forms/ValidationForms.js";
// import ExtendedForms from "./views/forms/ExtendedForms.js";
// import RegularForms from "./views/forms/RegularForms.js";
import Calendar from "./views/Calendar.js";
// import Widgets from "./views/Widgets.js";
// import Charts from "./views/Charts.js";
import Dashboard from "./views/dashboard/Dashboard.js";
// import Buttons from "./views/components/Buttons.js";
// import SweetAlert from "./views/components/SweetAlert.js";
// import Notifications from "./views/components/Notifications.js";
// import Grid from "./views/components/Grid.js";
// import Typography from "./views/components/Typography.js";
// import Panels from "./views/components/Panels.js";
// import Icons from "./views/components/Icons.js";
// import Pricing from "./views/pages/Pricing.js";
// import Register from "./views/pages/Register.js";
// import Timeline from "./views/pages/Timeline.js";
import User from "./views/pages/User.js";
// import Login from "./views/pages/Login.js";
// import Rtl from "./views/pages/Rtl.js";
import Lock from "./views/pages/Lock.js";
// self created
import ManageOrganizers from "./views/pages/manageOrganizers/ManageOrganizers";
import ManageAtendees from "./views/pages/manageAttendees/ManageAtendees";
import ManageEvents from "./views/pages/manageEvents/ManageEvents";
import EditEvent from "./views/pages/events/EditEvent";
import Blog from "./views/pages/blog/Blog";
import ManageBlogPosts from "./views/pages/blog/Posts";
import Settings from "./views/pages/settings/Settings";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "??????????",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/lock-screen",
        name: "Lock Screen",
        mini: "LS",
        component: Lock,
        layout: "/auth",
      },
      {
        path: "/user-profile",
        name: "User Profile",
        mini: "UP",
        component: User,
        layout: "/admin",
      },
    ],
  },
  // {
  //   collapse: true,
  //   name: "Users",
  //   icon: "tim-icons icon-image-02",
  //   state: "usersCollapse",
  //   views: [
  //     {
  //       path: "/manage-organizers",
  //       name: "Manage Organizers",
  //       mini: "MO",
  //       component: ManageOrganizers,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/manage-atendees",
  //       name: "Manage Attendees",
  //       mini: "MO",
  //       component: ManageAtendees,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  {
    
            path: "/manage-organizers",
            name: "Manage Organizers",
            mini: "MO",
            icon: "tim-icons icon-image-02",
            component: ManageOrganizers,
            layout: "/admin",
          
  },
  {
          path: "/manage-atendees",
          name: "Manage Attendees",
          icon: "tim-icons icon-image-02",
          mini: "MO",
          component: ManageAtendees,
          layout: "/admin",
        },

  {
    path: "/manage-events",
    name: "Manage Event",
    icon: "tim-icons icon-image-02",
    
    component: ManageEvents,
    layout: "/admin",
    views: [
   
      {
        path: "/edit/event",
        name: "Edit Event",
        mini: "EE",
        component: EditEvent,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Manage Blogs",
    icon: "tim-icons icon-image-02",
    state: "manageBlogsCollapse",
    views: [
      {
        path: "/create-blogs",
        name: "Create Blogs",
        mini: "CB",
        component: Blog,
        layout: "/admin",
      },
      {
        path: "/manage-blogs",
        name: "Manage Blogs",
        mini: "MB",
        component: ManageBlogPosts,
        layout: "/admin",
      },
    ],
  },
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "????????????????",
  //   icon: "tim-icons icon-molecule-40",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "???????????? ?????????? ??????????????????",
  //       mini: "MLT",
  //       rtlMini: "??",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           rtlName: "????????",
  //           mini: "B",
  //           rtlMini: "??",
  //           component: Buttons,
  //           layout: "/admin",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       rtlName: "????????",
  //       mini: "B",
  //       rtlMini: "??",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "???????? ????????????",
  //       mini: "GS",
  //       rtlMini: "????",
  //       component: Grid,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       rtlName: "??????????",
  //       mini: "P",
  //       rtlMini: "??",
  //       component: Panels,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "?????????? ??????????",
  //       mini: "SA",
  //       rtlMini: "??????",
  //       component: SweetAlert,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       rtlName: "??????????????",
  //       mini: "N",
  //       rtlMini: "??",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       rtlName: "????????????",
  //       mini: "I",
  //       rtlMini: "??",
  //       component: Icons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       rtlName: "??????????",
  //       mini: "T",
  //       rtlMini: "??",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   rtlName: "????????????????",
  //   icon: "tim-icons icon-notes",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       rtlName: "?????????? ??????????",
  //       mini: "RF",
  //       rtlMini: "????",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       rtlName: "?????????? ??????????",
  //       mini: "EF",
  //       rtlMini: "??????",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       rtlName: "?????????? ???????????? ???? ??????????",
  //       mini: "VF",
  //       rtlMini: "????",
  //       component: ValidationForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       rtlName: "????????",
  //       mini: "W",
  //       rtlMini: "??",
  //       component: Wizard,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   rtlName: "??????????????",
  //   icon: "tim-icons icon-puzzle-10",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       rtlName: "???????????? ??????????",
  //       mini: "RT",
  //       rtlMini: "????",
  //       component: RegularTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       rtlName: "?????????? ??????????",
  //       mini: "ET",
  //       rtlMini: "??????",
  //       component: ExtendedTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       rtlName: "???? ?????? ??????????????",
  //       mini: "RT",
  //       rtlMini: "????",
  //       component: ReactTables,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   rtlName: "??????????",
  //   icon: "tim-icons icon-pin",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       rtlName: "?????????? ????????",
  //       mini: "GM",
  //       rtlMini: "????",
  //       component: GoogleMaps,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       rtlName: "?????????? ?????????? ????????????",
  //       mini: "FSM",
  //       rtlMini: "??????",
  //       component: FullScreenMap,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       rtlName: "?????????? ????????????",
  //       mini: "VM",
  //       rtlMini: "????",
  //       component: VectorMap,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "????????????????",
  //   icon: "tim-icons icon-settings",
  //   component: Widgets,
  //   layout: "/admin",
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   rtlName: "???????????? ????????????????",
  //   icon: "tim-icons icon-chart-bar-32",
  //   component: Charts,
  //   layout: "/admin",
  // },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "??????????????",
    icon: "tim-icons icon-time-alarm",
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "tim-icons icon-chart-pie-36",
    component: Settings,
    layout: "/admin",
  },
];

export default routes;
