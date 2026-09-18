import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import project04 from "@/assets/project-04.jpg";
import project05 from "@/assets/project-05.jpg";
import project06 from "@/assets/project-06.jpg";
import project07 from "@/assets/project-07.jpg";
import project08 from "@/assets/project-08.jpg";
import project09 from "@/assets/project-09.jpg";
import project10 from "@/assets/project-10.jpg";
import project11 from "@/assets/project-11.jpg";
import project12 from "@/assets/project-12.jpg";

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  thumbnail: string;
  previewVideo?: string;
  vimeoId: string;
  description: string;
  credits?: string[];
};

// Replace any field below with the details for your finished films.
// `thumbnail` is the grid image, `previewVideo` can be an MP4 URL, and
// `vimeoId` is the number at the end of a Vimeo link.
export const projects: Project[] = [
  { title: "Project One", slug: "project-one", year: "2026", category: "Documentary", thumbnail: project01, vimeoId: "76979871", description: "A quiet portrait of devotion, skill and the patient work behind a sacred form.", credits: ["Direction — Gaurav J Joshi", "Cinematography — To be announced"] },
  { title: "Project Two", slug: "project-two", year: "2026", category: "Branded Film", thumbnail: project02, vimeoId: "76979871", description: "An elemental journey across an ancient landscape, held between distance and belonging.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Three", slug: "project-three", year: "2025", category: "Craft", thumbnail: project03, vimeoId: "76979871", description: "Hands, memory and material come together in a study of a living textile tradition.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Four", slug: "project-four", year: "2025", category: "Architecture", thumbnail: project04, vimeoId: "76979871", description: "Concrete, rain and landscape meet in a film about a home shaped by its climate.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Five", slug: "project-five", year: "2025", category: "Portrait", thumbnail: project05, vimeoId: "76979871", description: "The private moments before performance reveal ritual, focus and transformation.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Six", slug: "project-six", year: "2025", category: "Documentary", thumbnail: project06, vimeoId: "76979871", description: "Before daylight, a crew moves out onto still water and an uncertain horizon.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Seven", slug: "project-seven", year: "2024", category: "Branded Film", thumbnail: project07, vimeoId: "76979871", description: "A measured portrait of land, labor and the rhythms that carry through generations.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Eight", slug: "project-eight", year: "2024", category: "Craft", thumbnail: project08, vimeoId: "76979871", description: "Earth takes shape through touch in this tactile study of a practiced pair of hands.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Nine", slug: "project-nine", year: "2024", category: "Short Film", thumbnail: project09, vimeoId: "76979871", description: "A city seen between destinations, where monsoon light turns the familiar cinematic.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Ten", slug: "project-ten", year: "2023", category: "Documentary", thumbnail: project10, vimeoId: "76979871", description: "A vast mountain passage told through the small, enduring rituals of movement.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Eleven", slug: "project-eleven", year: "2023", category: "Dance Film", thumbnail: project11, vimeoId: "76979871", description: "Body, light and architecture form a spare meditation on space and release.", credits: ["Direction — Gaurav J Joshi"] },
  { title: "Project Twelve", slug: "project-twelve", year: "2023", category: "Branded Film", thumbnail: project12, vimeoId: "76979871", description: "A warm observation of the gestures and silences that make a family table feel like home.", credits: ["Direction — Gaurav J Joshi"] },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}