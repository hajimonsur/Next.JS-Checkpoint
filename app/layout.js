import Link  from 'next/link';
export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', backgroundColor: 'blanchedalmond' }}>
          <nav>
        
            <Link href="/" style={{ margin: '0 1rem' }}>Home</Link>
            <Link href="/about" style={{ margin: '0 1rem' }}>About</Link>
            <Link href="/projects" style={{ margin: '0 1rem' }}>Projects</Link>
            <Link href="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f4f4f4' }}>
          <p>&copy; {new Date().getFullYear()} Taiwo Monsuru</p>
        </footer>
      </body>
    </html>
  );
}

