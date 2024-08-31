import Project from "../components/Project";

export default function Portfolio() {
  const imgStyle = {
    width: "auto",
    height: "250px",
    objectFit: "cover",
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="m-4">
          <Project
            title="Tech Blog" 
            url="https://github.com/kalisurf3r/tech-blog"
            img="tech-blog.png"
            commentary="The Tech Blog is a full-stack application that uses Express.js, Sequelize, and Handlebars. It allows users to create, update, and delete posts and comments. It is a great tool for sharing ideas and engaging with others."
          />
        </div>

        <div className="m-4">
          <Project
            title="Social Network API"
            url="https://github.com/kalisurf3r/social-network"
            img="social.jpg"
            commentary="The Social Network API is a back-end application that uses
            Express.js and MongoDB. Users can create, update, and delete users,
            thoughts, and reactions. It's great for a social media platform."
          />
        </div>

        <div className="m-4">
        <Project
            title="Readme Generator"
            url="https://github.com/kalisurf3r/readme-generator"
            img="readme.png"
            commentary="The Readme Generator is a command-line application that uses
              Node.js. It generates a professional README file for your project.
              It's a great tool for developers who want to save time and focus
              on coding."
          />
        </div>

        <div className="m-4">
        <Project
            title="Ecommerce Backend"
            url="https://github.com/kalisurf3r/ecom-back"
            img="ecom.jpg"
            commentary="The Ecommerce Backend is a back-end application that uses
              Express.js, Sequelize, and Postgres. It allows users to create,
              update, and delete categories, products, and tags. It's a great
              tool for managing an online store."
          />
        </div>

        <div className="m-4">
        <Project
            title=" Employee Tracker"
            url="https://github.com/kalisurf3r/employee-tracker"
            img="tracker.webp"
            commentary="The Employee Tracker is a command-line application that uses
              Node.js and Inquirer. It allows users to view, add, update, and
              delete employees, roles, and departments. It's a great tool for
              managing a company's workforce."
          />
        </div>

        <div className="m-4">
        <Project
            title="Note Taker"
            url="https://github.com/kalisurf3r/note-taker"
            img="notes.png"
            commentary="The Note Taker is a full-stack application that uses Express.js
              and Node.js. It allows users to create, save, and delete notes.
              It's a great tool for jotting down ideas and keeping track of
              tasks."
          />
        </div>
      </div>
    </div>
  );
}
