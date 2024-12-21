import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: '0' }}>
        <header
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#f4f4f4',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
              <Link href="/" style={{ textDecoration: 'none', color: '#333' }}>
                Taiwo Monsuru
              </Link>
            </div>
            <div>
              <Link href="/" style={linkStyle}>Home</Link>
              <Link href="/about" style={linkStyle}>About</Link>
              <Link href="/projects" style={linkStyle}>Projects</Link>
              <Link href="/contact" style={linkStyle}>Contact</Link>
            </div>
          </nav>
        </header>

        <main style={{ padding: '2rem' }}>{children}</main>

        <footer
          style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#333',
            color: '#fff',
            fontSize: '1rem',
          }}
        >
          <p>&copy; {new Date().getFullYear()} Taiwo Monsuru</p>
          <p>Made with ❤️</p>
        </footer>
      </body>
    </html>
  );
}

// Shared link style
const linkStyle = {
  margin: '0 1rem',
  textDecoration: 'none',
  color: '#007BFF',
  fontSize: '1.1rem',
  fontWeight: '600',
  transition: 'color 0.3s',
};

