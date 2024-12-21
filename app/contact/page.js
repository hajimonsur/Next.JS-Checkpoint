const Page = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f7f7f7' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>Contact Me</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
        Have a question or want to work together? Reach out to me!
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',  // Distribute the cards evenly across the row
          gap: '2rem',
          // flexWrap: 'wrap',
          maxWidth: '100%',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            flex: '1 1 calc(25% - 1rem)',  // Adjusted to fit 4 items in a row (25% width)
            minWidth: '200px',
          }}
        >
          <strong>Email:</strong>
          <p>
            <a href="mailto:taiwomonsuru29@gmail.com" style={{ color: '#007BFF', textDecoration: 'none' }}>
              Mail Me
            </a>
          </p>
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            flex: '1 1 calc(25% - 1rem)',  // Adjusted to fit 4 items in a row (25% width)
            minWidth: '200px',
          }}
        >
          <strong>Phone:</strong>
          <p style={{ color: '#007BFF', margin: 0 }}>+2347015242430</p>
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            flex: '1 1 calc(25% - 1rem)',  // Adjusted to fit 4 items in a row (25% width)
            minWidth: '200px',
          }}
        >
          <strong>GitHub:</strong>
          <p>
            <a href="https://github.com/hajimonsur" target="_blank" style={{ color: '#007BFF', textDecoration: 'none' }}>
              GitHub Profile
            </a>
          </p>
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            flex: '1 1 calc(25% - 1rem)',  // Adjusted to fit 4 items in a row (25% width)
            minWidth: '200px',
          }}
        >
          <strong>LinkedIn:</strong>
          <p>
            <a
              href="https://www.linkedin.com/in/monsuru-taiwo-3836a8308/"
              target="_blank"
              style={{ color: '#007BFF', textDecoration: 'none' }}
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
