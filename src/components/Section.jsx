export default function Section({ id, children, style = {} }) {
  return (
    <section
      id={id}
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "96px 32px",
        position: "relative",
        zIndex: 1,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
