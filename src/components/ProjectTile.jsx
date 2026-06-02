import { useState, useRef } from "react";
import "./ProjectTile.css";

const projects = [
  {
    id: "p0",
    title: "I G O R",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["70 m²"],
    year: 2025,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/portfolio_hero.jpg",
    images: [
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/1.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/2.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/3.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/4.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/5.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/6.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/7.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/8.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/9.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/10.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/11.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/12.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/13.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/14.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/15.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/16.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/17.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Mockup/18.jpg",
            ],
    description:
      "",
  },
  {
    id: "p1",
    title: "N A S T J A",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["70 m²"],
    year: 2025,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/jowita_hero.jpg",
    images: [
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/1.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/2.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/3.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/4.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/5.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/6.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/7.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Jowita/8.jpg",
            ],
    description:
      "Projekt przewiduje pokrycie całej konstrukcji szkieletowej nowoczesną ścianą kurtynową Aluprof MB-SR50N EI EFEKT, z zastosowaniem silikonowych uszczelek w kolorze RAL 5002 (indygo). Dodatkowo planowane jest dopasowanie balkonów z okładzinami czołowymi balustrad, które nawiązują do dawnej rytmiki budynku, interpretując ją w nowoczesnej formie. Całość założenia projektowego ma na celu zachowanie ducha dawnej Jowity .",
  },
  {
    id: "p2",
    title: "E R Y K",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["70 m²"],
    year: 2025,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/vest_hero.jpg",
    images: [
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/1.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/2.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/3.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/4.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/5.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/6.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/7.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/8.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/9.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/10.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/11.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/12.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/13.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Vest/14.jpg",
            ],
    description:
      "",
  },
  {
    id: "p3",
    title: "B O R Y S",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["70 m²"],
    year: 2025,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/leaf_hero.jpg",
    description:
      "",
  },
  {
    id: "p4",
    title: "D A R E K",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["90 m²"],
    year: 2024,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/dino_hero.jpg",
    description:
      "",
  },
  {
    id: "p5",
    title: "W O J C I E C H",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["80 m²"],
    year: 2024,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/pit_hero.jpg",
    images: [
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/1.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/2.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/3.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/4.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/5.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/6.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/7.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/8.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/9.jpg",
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/Pit/10.jpg",
            ],  
    description:
      "",
  },
  {
    id: "p6",
    title: "D O R O T A",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["80 m²"],
    year: 2024,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/sala_hero.jpg",
    images: [
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/sala_hero.jpg",
            ],
    description:
      "",
  },
  {
    id: "p7",
    title: "R Z E S K O",
    subtitle: "Budynek usługowo-mieszkalny, jednorodzinny",
    tags: ["145 m²"],
    year: 2024,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/salon_hero.jpg",
    description:
      "",
  },
  {
    id: "p8",
    title: "R O D A W K A",
    subtitle: "Budynek mieszkalny jednorodzinny",
    tags: ["150 m²"],
    year: 2024,
    thumbnail:
      "https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/urba_hero.jpg",
    description:
      "",
  },

];

function ProjectTile() {
  const [selectedTag, setSelectedTag] = useState("Wszystkie");
  const [activeProject, setActiveProject] = useState(null);

  // 🔹 REF i logika drag
  const galleryRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX;
    scrollLeft.current = galleryRef.current.scrollLeft;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current) * 1.5; // prędkość przesuwania
    galleryRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const allTags = ["Wszystkie", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  // 🔹 Sortowanie projektów
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  // 🔹 Filtrowanie
  const filtered =
    selectedTag === "Wszystkie"
      ? sortedProjects
      : sortedProjects.filter((p) => p.tags.includes(selectedTag));

  function openProject(project) {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  }

  function closeProject() {
    setActiveProject(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="portfolio-container">

      {/* ▪️ Filtr tagów */}
      <div className="tags-container">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`tag ${selectedTag === tag ? "active" : ""}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ▪️ Grid projektów */}
      <div className="grid-container">
        {filtered.map((p) => (
          <div key={p.id} className="project-card" onClick={() => openProject(p)}>
            <img src={p.thumbnail} alt={p.title} className="project-image" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
              <div className="project-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ▪️ Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProject}>×</button>

            <h2>{activeProject.title}</h2>
            <p>{activeProject.subtitle}</p>

            {/* ▪️ Galeria z drag */}
            <div
              className="modal-gallery"
              ref={galleryRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {(activeProject.images || [activeProject.thumbnail]).map((img, i) => (
                <div className="gallery-slide" key={i}>
                  <img src={img} alt={`${activeProject.title} ${i + 1}`} />
                </div>
              ))}
            </div>

            <p>{activeProject.description}</p>
            <div className="project-tags">
              {activeProject.tags.map((t) => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectTile;