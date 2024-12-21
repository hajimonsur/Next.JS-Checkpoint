import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '3rem',
        backgroundColor: '#f4f4f9',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '1rem',
          fontWeight: '700',
        }}
      >
        Welcome To My Portfolio
      </h1>

      <div >
        <Image
          src="/monsur.jpg"
          alt="Profile"
          width={200}
          height={200}
          style={{
            // borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '1.5rem',
          lineHeight: '1.6',
        }}
      >
        Hi, I'm Taiwo Monsuru, a passionate full-stack developer based in Lagos. I build modern,
        responsive, and user-friendly applications that help businesses and individuals achieve their
        goals.
      </p>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}
      >
        Explore my projects, learn more about me, or get in touch—I’d love to collaborate with you!
      </p>

      <div>
        <Link
          href="/projects"
          style={{
            textDecoration: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '5px',
            fontWeight: '600',
            transition: 'background-color 0.3s',
          }}
          
        >
          View My Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Page;
