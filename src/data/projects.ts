import cover01 from "@/assets/vimeo-01.jpg";
import cover02 from "@/assets/vimeo-02.jpg";
import cover03 from "@/assets/vimeo-03.jpg";
import cover04 from "@/assets/vimeo-04.jpg";
import cover05 from "@/assets/vimeo-05.jpg";
import cover06 from "@/assets/vimeo-06.jpg";
import cover07 from "@/assets/vimeo-07.jpg";
import cover08 from "@/assets/vimeo-08.jpg";
import cover09 from "@/assets/vimeo-09.jpg";
import cover10 from "@/assets/vimeo-10.jpg";
import cover12 from "@/assets/vimeo-12.jpg";
import thaaragaiCover from "@/assets/thaaragai-aarathana.jpg";
import talismanStill01 from "@/assets/talisman-stills/talisman-01.jpg.asset.json";
import talismanStill02 from "@/assets/talisman-stills/talisman-02.jpg.asset.json";
import talismanStill03 from "@/assets/talisman-stills/talisman-03.jpg.asset.json";
import talismanStill04 from "@/assets/talisman-stills/talisman-04.jpg.asset.json";
import talismanStill05 from "@/assets/talisman-stills/talisman-05.jpg.asset.json";
import talismanStill06 from "@/assets/talisman-stills/talisman-06.jpg.asset.json";
import thaaragaiStill01 from "@/assets/thaaragai-stills/thaaragai-01.jpg.asset.json";
import thaaragaiStill02 from "@/assets/thaaragai-stills/thaaragai-02.jpg.asset.json";
import thaaragaiStill03 from "@/assets/thaaragai-stills/thaaragai-03.jpg.asset.json";
import thaaragaiStill04 from "@/assets/thaaragai-stills/thaaragai-04.jpg.asset.json";
import thaaragaiStill05 from "@/assets/thaaragai-stills/thaaragai-05.jpg.asset.json";
import thaaragaiStill06 from "@/assets/thaaragai-stills/thaaragai-06.jpg.asset.json";
import thaaragaiStill07 from "@/assets/thaaragai-stills/thaaragai-07.jpg.asset.json";
import thaaragaiStill08 from "@/assets/thaaragai-stills/thaaragai-08.jpg.asset.json";
import thaaragaiStill09 from "@/assets/thaaragai-stills/thaaragai-09.jpg.asset.json";
import thaaragaiStill10 from "@/assets/thaaragai-stills/thaaragai-10.jpg.asset.json";
import zeroManStill01 from "@/assets/zero-man-stills/zero-man-01.webp.asset.json";
import zeroManStill02 from "@/assets/zero-man-stills/zero-man-02.webp.asset.json";
import zeroManStill03 from "@/assets/zero-man-stills/zero-man-03.webp.asset.json";
import zeroManStill04 from "@/assets/zero-man-stills/zero-man-04.webp.asset.json";
import zeroManStill05 from "@/assets/zero-man-stills/zero-man-05.webp.asset.json";
import zeroManStill06 from "@/assets/zero-man-stills/zero-man-06.webp.asset.json";
import zeroManStill07 from "@/assets/zero-man-stills/zero-man-07.webp.asset.json";
import zeroManStill08 from "@/assets/zero-man-stills/zero-man-08.webp.asset.json";
import holaPrimeStill01 from "@/assets/hola-prime-stills/hola-prime-01.png.asset.json";
import holaPrimeStill02 from "@/assets/hola-prime-stills/hola-prime-02.png.asset.json";
import holaPrimeStill03 from "@/assets/hola-prime-stills/hola-prime-03.png.asset.json";
import holaPrimeStill04 from "@/assets/hola-prime-stills/hola-prime-04.png.asset.json";
import holaPrimeStill05 from "@/assets/hola-prime-stills/hola-prime-05.png.asset.json";
import holaPrimeStill06 from "@/assets/hola-prime-stills/hola-prime-06.png.asset.json";

const holaPrimeStills = [
  holaPrimeStill01.url,
  holaPrimeStill02.url,
  holaPrimeStill03.url,
  holaPrimeStill04.url,
  holaPrimeStill05.url,
  holaPrimeStill06.url,
];

const zeroManStills = [
  zeroManStill01.url,
  zeroManStill02.url,
  zeroManStill03.url,
  zeroManStill04.url,
  zeroManStill05.url,
  zeroManStill06.url,
  zeroManStill07.url,
  zeroManStill08.url,
];

const talismanStills = [
  talismanStill01.url,
  talismanStill02.url,
  talismanStill03.url,
  talismanStill04.url,
  talismanStill05.url,
  talismanStill06.url,
];

const thaaragaiStills = [
  thaaragaiStill01.url,
  thaaragaiStill02.url,
  thaaragaiStill03.url,
  thaaragaiStill04.url,
  thaaragaiStill05.url,
  thaaragaiStill06.url,
  thaaragaiStill07.url,
  thaaragaiStill08.url,
  thaaragaiStill09.url,
  thaaragaiStill10.url,
];

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  thumbnail: string;
  vimeoId: string;
  heading: string;
  description: string;
  credits: string[];
  stills: string[];
};

export const projects: Project[] = [
  ["Zero Man of India", "zero-man-of-india", "2023", "Director’s Cut", cover01, "862934611"],
  ["Talisman Awards", "talisman-awards", "2025", "Commercial", cover02, "1095198576"],
  ["Thaaragai Aarathana", "thaaragai-aarathana", "2025", "Film", thaaragaiCover, "1043248175"],
  ["Hola Prime", "hola-prime", "2025", "Commercial", cover08, "1064323156"],
  ["The Last Printer of Bela", "the-last-printer-of-bela", "2025", "Good Earth", cover03, "1103740734"],
  ["Amruta : The First Mashroo Weaver", "amruta-mashroo-weaver", "2026", "Good Earth", cover04, "1193526384"],
  ["The Art of Origami", "the-art-of-origami", "2023", "Film", cover05, "850808174"],
  ["The Quilting Project", "the-quilting-project", "2025", "Good Earth", cover06, "1044260385"],
  ["Good Earth Heritage Foundation", "good-earth-heritage-foundation", "2026", "Teaser", cover09, "1165587330"],
  ["#World Environment Day", "world-environment-day", "2023", "Film", cover07, "845965341"],
  ["AAAFx", "aaafx", "2024", "Director’s Cut", cover10, "920151752"],
  ["ISS World - People Make Places | EP 02", "iss-world-people-make-places", "2025", "Film", cover12, "1050458130"],
].map(([title, slug, year, category, thumbnail, vimeoId]) => ({
  title,
  slug,
  year,
  category,
  thumbnail,
  vimeoId,
  heading: title,
  description: `${category} film, ${year}.`,
  credits: slug === "zero-man-of-india" ? [
    "Director/Editor/Producer: Gaurav J Joshi",
    "Writer: Sneha",
    "DP: Vandita Jain",
    "Line Producer: Bisma Farooq",
    "Assistant Director: Sehar Qazi",
    "Voiceover: Babla Kochhar",
    "Colorist: Manohar Naik",
    "Sound Design: Kapil Dev Singh",
    "Music Composer: Abhilash Lakra",
    "1st AC: Rakesh",
    "2nd AC: Aaditya Ganguly",
    "Production Manager: Talib Rayaz",
    "Lightman: Santosh Kumar",
  ] : slug === "talisman-awards" ? [
    "Director/Producer: Gaurav J Joshi",
    "Writer: Sneha",
    "DP: Durjey Soni",
    "Editor: Moon Bohra",
    "Sound Designer: Carlos Maestre Conejero",
    "Colorist: Manohar Naik",
    "AC Ladkah: Jigmet Lotus",
    "AC Mumbai: Umang Sampat",
    "Drone: Padma Lotus",
    "Music: Jameson Nathan Jones",
    "Voiceover: Orion Ray",
  ] : slug === "thaaragai-aarathana" ? [
    "Director/Producer: Gaurav J Joshi",
    "Writer: Kayra",
    "DP: Vandita Jain",
    "AC: Umang Sampat",
    "Executive Producer: Dhruv Sharma",
    "Editor: Pranav Patil",
    "Colorist: Manohar Naik",
    "Sound Design: Kapil Dev Singh",
    "Script Consultant: Sneha",
    "Script Alchemist: Shirley Bobby",
    "Music Composer: Adi",
    "1st AC: S.Arun",
    "2nd AC: Bagath sing",
    "Drone Pilot: Suresh",
    "Boat Captain: Chandru",
    "Boat 1st Assistant: Appu",
    "Boat 2nd Assistant: Jayaseelan",
  ] : slug === "hola-prime" ? [
    "Director: Gaurav J Joshi",
    "Producer: Virat Garg",
    "DP: Umang Sampat",
    "Executive Producer: Dhruv Sharma",
    "Editor: Moon Bohra",
    "Online: Niranjan Yadav",
    "1st AD: Rytham Jain ",
    "2nd AD: Arsh Natty",
    "Stylist: Nidhi Sharma",
    "Colorist: Manohar Naik",
    "Art: Aditi Ahuja",
    "Focus Puller: Sant Bhai",
    "Light : Banty lights, Chandigarh",
    "Key Grip : Krishna Shukla",
    "Line production : Team KV",
    "Camera Rental : Saya Films, Chandigarh",
  ] : slug === "the-last-printer-of-bela" ? [
    "Director/Editor/Producer: Gaurav J Joshi",
    "DP: Umang Sampat",
    "Colorist: Vipin Singh",
    "Music: Artlist.io",
  ] : slug === "amruta-mashroo-weaver" ? [
    "Director/Producer: Gaurav J Joshi",
    "DP: Umang Sampat",
    "Editor/Colorist: Moon Bohra",
    "Music: Artlist.io",
  ] : slug === "the-art-of-origami" ? [
    "Director/Editor/Producer: Gaurav J Joshi",
    "Writer: Sneha",
    "DP: Archit Singh",
    "AC: Piyush Pal Singh",
    "Sound Design: Kapil Dev Singh",
    "Colorist: Harshit Saini",
  ] : slug === "the-quilting-project" ? [
    "Director/Producer: Gaurav J Joshi",
    "DP: Umang Sampat",
    "Editor/Colorist: Moon Bohra",
    "Music: Artlist.io",
  ] : slug === "world-environment-day" ? [
    "Director/Editor/Producer: Gaurav J Joshi",
    "DP: Manoj Kumar",
    "\n",
  ] : ["Director: Gaurav J Joshi", `Category: ${category}`, `Year: ${year}`],
  stills: slug === "zero-man-of-india"
    ? zeroManStills
    : slug === "talisman-awards"
      ? talismanStills
      : slug === "thaaragai-aarathana"
        ? thaaragaiStills
        : slug === "hola-prime"
          ? holaPrimeStills
          : [thumbnail, thumbnail, thumbnail, thumbnail],
})) as Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}