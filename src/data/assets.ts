import heroStepsImg from "@/src/assets/images/hero_supreme_court_steps_1794771517044.jpg";
import sanjayChambersPortraitImg from "@/src/assets/images/sanjay_chambers_portrait_1794780141259.jpg";
import sanjayCounselDeskImg from "@/src/assets/images/sanjay_counsel_desk_1794780143991.jpg";
import sanjayCourtCorridorImg from "@/src/assets/images/sanjay_court_corridor_1794780143250.jpg";
import supremeCourtImg from "@/src/assets/images/court_supreme_india_1794771517221.jpg";
import delhiHighImg from "@/src/assets/images/court_delhi_high_1794771518226.jpg";
import bombayHighImg from "@/src/assets/images/court_bombay_high_1794771518223.jpg";
import madrasHighImg from "@/src/assets/images/court_madras_high_1794771518361.jpg";
import calcuttaHighImg from "@/src/assets/images/court_calcutta_high_1794771519345.jpg";
import karnatakaHighImg from "@/src/assets/images/court_karnataka_high_1794771519469.jpg";
import allahabadHighImg from "@/src/assets/images/court_allahabad_high_1794771519724.jpg";
import gujaratHighImg from "@/src/assets/images/court_gujarat_high_1794771520122.jpg";
import type { CourtImageKey } from "./courtsRegistry";

export const HERO_IMAGE = heroStepsImg;
export const ADVOCATE_PORTRAIT_IMAGE = sanjayChambersPortraitImg;
export const ADVOCATE_DESK_IMAGE = sanjayCounselDeskImg;
export const ADVOCATE_CORRIDOR_IMAGE = sanjayCourtCorridorImg;

export const COURT_IMAGES: Record<CourtImageKey, string> = {
  "supreme-court-of-india": supremeCourtImg,
  "delhi-high-court": delhiHighImg,
  "bombay-high-court": bombayHighImg,
  "madras-high-court": madrasHighImg,
  "calcutta-high-court": calcuttaHighImg,
  "karnataka-high-court": karnatakaHighImg,
  "allahabad-high-court": allahabadHighImg,
  "gujarat-high-court": gujaratHighImg,
  "punjab-haryana-high-court": heroStepsImg,
  "patna-high-court": allahabadHighImg,
  "rajasthan-high-court": delhiHighImg,
  "telangana-high-court": madrasHighImg
};
