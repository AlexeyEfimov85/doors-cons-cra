/* eslint-disable import/prefer-default-export */
import Cyber from "../src/assets/images/seria_cyber.png";
import Ultimatum from "../src/assets/images/seriae_ultimatum_next.png";
import Snegir from "../src/assets/images/seriae_snigir.png";
import SnegirPro from "../src/assets/images/seria_snegir_pro.png";
import CyberSeria from "../src/assets/images/flat_result_cyber.png";
import UltimatumSeria from "../src/assets/images/flat_result_ultimatum.png";
import SnegirSeria from "../src/assets/images/house_result_snegir.png";
import SnegirProSeria from "../src/assets/images/house_result_snegir_pro.png";

export const data = [
  {
    previewimg: Cyber,
    name: "Cyber",
    descr: "Краткое описание преимуществ данной двери в несколько строк",
    price: "от 35 000 ₽",
    type: "Flat",
    seria: CyberSeria,
  },
  {
    previewimg: Ultimatum,
    name: "Ultimatum Next",
    descr: "Краткое описание преимуществ данной двери в несколько строк",
    price: "от 38 000 ₽",
    resultimage: "./assets/images/flat_result_ultimatum.png",
    type: "Flat",
    seria: UltimatumSeria,
  },
  {
    previewimg: Snegir,
    name: "Snegir",
    descr: "Краткое описание преимуществ данной двери в несколько строк",
    price: "от 40 000 ₽",
    type: "House",
    seria: SnegirSeria,
  },
  {
    previewimg: SnegirPro,
    name: "SnegirPro",
    descr: "Краткое описание преимуществ данной двери в несколько строк",
    price: "от 45 000 ₽",
    type: "House",
    seria: SnegirProSeria,
  },
];

