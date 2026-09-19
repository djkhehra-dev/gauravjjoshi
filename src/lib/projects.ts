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
  description?: string;
};

export const projects: Project[] = [
  { title: "Amruta: The First Mashroo Weaver", slug: "amruta-mashroo-weaver", year: "2026", category: "Good Earth", thumbnail: cover04.url, vimeoId: "1193526384" },
  { title: "Good Earth Heritage Foundation", slug: "good-earth-heritage-foundation", year: "2026", category: "Teaser", thumbnail: cover09.url, vimeoId: "1165587330" },
  { title: "The Last Printer of Bela", slug: "the-last-printer-of-bela", year: "2025", category: "Good Earth", thumbnail: cover03.url, vimeoId: "1103740734" },
  { title: "Talisman Awards", slug: "talisman-awards", year: "2025", category: "Commercial", thumbnail: cover02.url, vimeoId: "1095198576" },
  { title: "The Quilting Project", slug: "the-quilting-project", year: "2025", category: "Good Earth", thumbnail: cover06.url, vimeoId: "1044260385" },
  { title: "Hola Prime", slug: "hola-prime", year: "2025", category: "Commercial", thumbnail: cover08.url, vimeoId: "1064323156" },
  { title: "AAAFx", slug: "aaafx", year: "2024", category: "Director’s Cut", thumbnail: cover10.url, vimeoId: "920151752" },
  { title: "Zero Man of India", slug: "zero-man-of-india", year: "2023", category: "Director’s Cut", thumbnail: cover01.url, vimeoId: "862934611" },
  { title: "The Art of Origami", slug: "the-art-of-origami", year: "2023", category: "Film", thumbnail: cover05.url, vimeoId: "850808174" },
  { title: "World Environment Day", slug: "world-environment-day", year: "2023", category: "Film", thumbnail: cover07.url, vimeoId: "845965341" },
  { title: "Kapiva Shilajit", slug: "kapiva-shilajit", year: "2023", category: "Commercial", thumbnail: cover11.url, vimeoId: "803497266" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}