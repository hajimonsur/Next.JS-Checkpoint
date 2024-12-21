'use client'; // Ensuring this is a Client Component

const Page = () => {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '1rem' }}>My Projects</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Here are some of the projects I’ve worked on:
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Movie Website Project */}
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            width: '30%',
            maxWidth: '350px',
            textAlign: 'left',
            overflow: 'hidden',
          }}
        >
          <strong style={{ fontSize: '1.3rem', color: '#007BFF' }}>A Movie Website</strong>
          <p style={{ margin: '1rem 0', color: '#555' }}>
            A movie website that allows users to search for movies and view their details.
          </p>
          <a
            href="https://movie-app-2dob.onrender.com/"
            target="_blank"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              marginTop: '1rem',
              fontWeight: '600',
              transition: 'color 0.3s',
            }}
          >
            View Project
          </a>
        </div>

        {/* Car Listing Website Project */}
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            width: '30%',
            maxWidth: '350px',
            textAlign: 'left',
            overflow: 'hidden',
          }}
        >
          <strong style={{ fontSize: '1.3rem', color: '#007BFF' }}>A Car Listing Website</strong>
          <p style={{ margin: '1rem 0', color: '#555' }}>
            A car listing website that allows users to buy and sell cars.
          </p>
          <a
            href="https://main-car-lising-client.onrender.com/"
            target="_blank"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              marginTop: '1rem',
              fontWeight: '600',
              transition: 'color 0.3s',
            }}
          >
            View Project
          </a>
        </div>

        {/* Travel Agency Project */}
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            width: '30%',
            maxWidth: '350px',
            textAlign: 'left',
            overflow: 'hidden',
          }}
        >
          <strong style={{ fontSize: '1.3rem', color: '#007BFF' }}>Travel Agency</strong>
          <p style={{ margin: '1rem 0', color: '#555' }}>
            A travel website that allows users to plan and book trips.
          </p>
          <a
            href="https://just-travel-yf6u.onrender.com"
            target="_blank"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              marginTop: '1rem',
              fontWeight: '600',
              transition: 'color 0.3s',
            }}
          >
            View Project
          </a>
        </div>

          {/* Movie Website Project */}
          <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            width: '30%',
            maxWidth: '350px',
            textAlign: 'left',
            overflow: 'hidden',
          }}
        >
          <strong style={{ fontSize: '1.3rem', color: '#007BFF' }}>A Movie Website</strong>
          <p style={{ margin: '1rem 0', color: '#555' }}>
            A movie website that allows users to search for movies and view their details.
          </p>
          <a
            href="https://movie-app-2dob.onrender.com/"
            target="_blank"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              marginTop: '1rem',
              fontWeight: '600',
              transition: 'color 0.3s',
            }}
          >
            View Project
          </a>
        </div>
      </div>

      <p style={{ fontSize: '1.1rem', color: '#555' }}>
        You can explore more projects on my{' '}
        <a
          href="https://github.com/hajimonsur"
          target="_blank"
          style={{
            color: '#007BFF',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default Page;
