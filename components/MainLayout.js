export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h1>I am a Header.</h1>
      </header>
      <div>{children}</div>
      <footer>I am a footer.</footer>
    </div>
  );
}
