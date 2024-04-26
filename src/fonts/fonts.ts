import {
  Unbounded,
  Montserrat,
  Archivo,
  Poppins,
  Barlow_Condensed,
  Open_Sans,
} from "next/font/google";
const openSan = Open_Sans({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });
const unbound = Unbounded({ subsets: ["latin"] });
const arch = Archivo({ subsets: ["latin"] });
const poppin = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export { mont, unbound, arch, poppin, barlow, openSan };
