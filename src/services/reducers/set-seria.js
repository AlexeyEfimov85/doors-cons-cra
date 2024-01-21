import { SET_SERIA } from "../actions/set-seria";
import Cyber from "../../assets/images/seria_cyber.png";
import CyberSeria from "../../assets/images/flat_result_cyber.png";
/* import Ultimatum from "../src/assets/images/seriae_ultimatum_next.png";
import Snegir from "../src/assets/images/seriae_snigir.png";
import SnegirPro from "../src/assets/images/seria_snegir_pro.png";
import UltimatumSeria from "../src/assets/images/flat_result_ultimatum.png";
import SnegirSeria from "../src/assets/images/house_result_snegir.png";
import SnegirProSeria from "../src/assets/images/seria_snegir_pro.png"; */

const initialState = {
  previewimg: Cyber,
  name: "Cyber",
  descr: "Краткое описание преимуществ данной двери в несколько строк",
  price: "от 35 000 ₽",
  type: "Flat",
  seria: CyberSeria,
};

export const setCurrentSeriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERIA: {
      return {
        previewimg: action.seria.previewimg,
        name: action.seria.name,
        descr: action.seria.descr,
        price: action.seria.price,
        type: action.seria.type,
        seria: action.seria.seria,
      };
    }
    default:
      return state;
  }
};
