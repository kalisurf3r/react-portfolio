
export default function Aboutme() {
  const imgStyle = {
    height: "250px",
    width: "200px",
    position: "relative",
    top: "120px",
  };

  const aboutBoxStyle = {
    position: "relative",
    top: "20px",
  }

  return (
    <div className="text-center">  
    <div>
      <h1 className="text-white">About Me</h1>
      <p className="border border-white text-white" style={aboutBoxStyle}>
        I am a full stack web developer with a background in business. I have a
        real interest in algorithms. I have experience in HTML, CSS,
        JavaScript, and React. I am currently transitioning all of my projects
        into React. I am excited to continue learning and growing as a developer.
      </p>
      <div>
        <img src="avatar.jpeg" alt="selfie" className="rounded-circle" style={imgStyle}/>
      </div>
    </div>
  </div>
  );
}
