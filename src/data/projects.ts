import cover01 from "@/assets/vimeo-01.jpg.asset.json";
import cover02 from "@/assets/vimeo-02.jpg.asset.json";
import cover03 from "@/assets/vimeo-03.jpg.asset.json";
import cover04 from "@/assets/vimeo-04.jpg.asset.json";
import cover05 from "@/assets/vimeo-05.jpg.asset.json";
import cover06 from "@/assets/vimeo-06.jpg.asset.json";
import cover07 from "@/assets/vimeo-07.jpg.asset.json";
import cover08 from "@/assets/vimeo-08.jpg.asset.json";
import cover09 from "@/assets/vimeo-09.jpg.asset.json";
import cover10 from "@/assets/vimeo-10.jpg.asset.json";
import cover11 from "@/assets/vimeo-11.jpg.asset.json";

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
  ["Zero Man of India", "zero-man-of-india", "2023", "Director’s Cut", cover01.url, "862934611"],
  ["Talisman Awards", "talisman-awards", "2025", "Commercial", cover02.url, "1095198576"],
  ["Thaaragai Aarathana", "thaaragai-aarathana", "2025", "Film", cover11.url, "1043248175"],
  ["Hola Prime", "hola-prime", "2025", "Commercial", cover08.url, "1064323156"],
  ["The Last Printer of Bela", "the-last-printer-of-bela", "2025", "Good Earth", cover03.url, "1103740734"],
  ["Amruta : The First Mashroo Weaver", "amruta-mashroo-weaver", "2026", "Good Earth", cover04.url, "1193526384"],
  ["The Art of Origami", "the-art-of-origami", "2023", "Film", cover05.url, "850808174"],
  ["The Quilting Project", "the-quilting-project", "2025", "Good Earth", cover06.url, "1044260385"],
  ["Good Earth Heritage Foundation", "good-earth-heritage-foundation", "2026", "Teaser", cover09.url, "1165587330"],
  ["#World Environment Day", "world-environment-day", "2023", "Film", cover07.url, "845965341"],
  ["AAAFx", "aaafx", "2024", "Director’s Cut", cover10.url, "920151752"],
].map(([title, slug, year, category, thumbnail, vimeoId]) => ({
  title,
  slug,
  year,
  category,
  thumbnail,
  vimeoId,
  heading: title,
  description: `${category} film, ${year}.`,
  credits: ["Director: Gaurav J Joshi", `Category: ${category}`, `Year: ${year}`],
  stills: [thumbnail, thumbnail, thumbnail, thumbnail],
})) as Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}