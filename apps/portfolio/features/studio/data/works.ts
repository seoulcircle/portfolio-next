import type { StaticImageData } from "next/image";

// Text lives in messages/*.json under studio.work.items.<slug>.
// Add `image` once a thumbnail exists; tiles without one stay blank.
export type Work = {
  slug: "myodoc" | "myopia" | "guide-kiosk" | "webtoon-kiosk" | "daum";
  image?: StaticImageData;
};

export const works: Work[] = [
  { slug: "myodoc" },
  { slug: "myopia" },
  { slug: "guide-kiosk" },
  { slug: "webtoon-kiosk" },
  { slug: "daum" },
];
