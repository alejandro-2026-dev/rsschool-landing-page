// global
import "modern-normalize";
import "../styles/vars.css";
import "../styles/main.css";

// shared
import "../styles/header.css";
import "../styles/footer.css";

// home
import "../styles/hero.css";
import "../styles/favorite.css";
import "../styles/about.css";
import "../styles/download.css";

// catalog
import "../styles/grid.css";
import "../styles/offer.css";
import "../styles/card.css";
import "../styles/modal.css";

// functions
import { fillGrid } from "./fill-grid";
import { setSwitchDarkMode } from "./switch";

setSwitchDarkMode();
fillGrid();
