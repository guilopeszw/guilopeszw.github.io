import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects">
      <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "20px", textTransform: "uppercase" }}>
        projects
      </p>
      <h2
        className="font-serif"
        style={{ fontSize: "40px", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "12px" }}
      >
        things i've built
      </h2>
      <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "48px", fontWeight: 300 }}>
        repos are private — reach out for details or demos.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
