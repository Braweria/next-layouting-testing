export default function MainLayout({ children }) {
  return (
    <div>
      <header>I am a Header.</header>
      <div>{children}</div>
      <footer>I am a footer.</footer>
    </div>
  );
}
