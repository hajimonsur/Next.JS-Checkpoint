import Image from "next/image";

const Page = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '2rem',
        backgroundColor: '#f7f7f7',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/monsur.jpg"
            alt="Profile"
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              border: '5px solid #f1f1f1',
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div style={{ marginLeft: '2rem', maxWidth: '600px' }}>
          <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>About Me</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            I'm Taiwo Monsuru, a full-stack developer with a passion for building efficient and scalable applications. 
            I specialize in creating both front-end and back-end solutions using modern frameworks and technologies.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            With a strong foundation in web development, I enjoy tackling challenging problems and creating impactful 
            digital experiences. I’m constantly learning and improving to stay ahead in the tech industry.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            When I'm not coding, I enjoy watching football and supporting my favorite team, Manchester United.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
