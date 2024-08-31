export default function Footer() {
  return (
    <footer className="footer">
      <div className="text-center">
        <div className="p-6">
        <a href="https://github.com/kalisurf3r" target="_blank" className="mx-3">
            <i className="bi bi-github" style={{ fontSize: '32px', color: 'currentColor' }}></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="mx-3">
            <i className="bi bi-linkedin" style={{ fontSize: '32px', color: 'currentColor' }}></i>
          </a>
          <a href="https://x.com/?lang=en" target="_blank" className="mx-3">
            <i className="bi bi-twitter-x" style={{ fontSize: '32px', color: 'currentColor' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
