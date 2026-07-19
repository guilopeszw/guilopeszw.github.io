import { socials } from "../data";

export default function Contact() {
  return (
    <footer id="say">
      <p className="closing">say hi</p>
      <div className="contact">
        <a className="cbtn" href={`mailto:${socials.email}`}>
          <span className="ct">email me</span>
          <span className="cv">{socials.email} ↗</span>
        </a>
        <a className="cbtn" href={socials.calendar} target="_blank" rel="noopener">
          <span className="ct">meet with me</span>
          <span className="cv">book a call ↗</span>
        </a>
      </div>
      <div className="foot">
        <span style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href={socials.linkedin} target="_blank" rel="noopener">linkedin ↗</a>
          <a href={socials.github} target="_blank" rel="noopener">github ↗</a>
          <a href={socials.twitter} target="_blank" rel="noopener">twitter ↗</a>
        </span>
      </div>
    </footer>
  );
}
