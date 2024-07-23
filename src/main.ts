import "./assets/main.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  IoCalendarSharp,
  GiFullMotorcycleHelmet,
  RiShieldFill,
  MdArrowdropdownTwotone,
  MdArrowdropupTwotone,
  MdRemove,
  OiStopwatch,
  MdInfooutline,
  MdWorkspacepremium,
  MdCleaningservices,
  LaGrinSolid,
  MdHealthandsafety,
  MdHealthandsafetyOutlined,
  MdClose,
} from "oh-vue-icons/icons";

addIcons(
  IoCalendarSharp,
  GiFullMotorcycleHelmet,
  RiShieldFill,
  MdArrowdropdownTwotone,
  MdArrowdropupTwotone,
  MdRemove,
  OiStopwatch,
  MdInfooutline,
  MdWorkspacepremium,
  MdHealthandsafety,
  MdHealthandsafetyOutlined,
  MdClose
);

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("v-icon", OhVueIcon);
app.mount("#app");
