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
  ] : slug === "the-last-printer-of-bela" ? [
    "Director/Editor/Producer: Gaurav J Joshi",
    "DP: Umang Sampat",
    "Colorist: Vipin Singh",
    "Music: Artlist.io",
  ] : slug === "amruta-mashroo-weaver" ? [
    "Director/Editor/Producer: Gaurav J Joshi",
    "DP: Umang Sampat",
    "Colorist:",
    "Music: Artlist.io",
  ] : ["Director: Gaurav J Joshi", `Category: ${category}`, `Year: ${year}`],
  stills: [thumbnail, thumbnail, thumbnail, thumbnail],
})) as Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}