import placejson from "./place.json";
import homejson from "./home.json";

export default function handler(req, res) {
  res.status(200).json({
    ...placejson,
    homedata: homejson,
  });
}
