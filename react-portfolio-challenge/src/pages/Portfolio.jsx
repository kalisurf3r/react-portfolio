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
                    <img src="tech-blog.png" 
                    alt="Tech Blog" 
                    style={imgStyle}
                    />
                    <h3><a href="https://github.com/kalisurf3r/tech-blog">The Tech Blog</a></h3>
                    <div className="commentary">
                            <p>The Tech Blog is a digital forum where techies can come together and chat. Posts can 
                                be made, comments can be left, and users can even like posts. The Tech Blog is a
                                full-stack application that uses Express.js, Sequelize, and Handlebars.js.
                            </p>
                    </div>
                </div>
                <div className="m-4">
                    <img src="social.jpg" 
                    alt="Social Network Api" 
                    style={imgStyle}
                    />
                    <h3><a href="https://github.com/kalisurf3r/social-network">Social Network Api</a></h3>
                    <div className="commentary">
                            <p>The Social Network API is a back-end application that uses Express.js and MongoDB.
                                Users can create, update, and delete users, thoughts, and reactions. It's great for a social
                                media platform.
                            </p>
                    </div>
                </div>
                <div className="m-4">
                    <img src="readme.png" 
                    alt="Readme Generator" 
                    style={imgStyle}
                    />
                    <h3><a href="https://github.com/kalisurf3r/readme-generator">Readme Generator</a></h3>
                    <div className="commentary">
                            <p>The Readme Generator is a command-line application that uses Node.js. It generates a
                                professional README file for your project. It's a great tool for developers who want to
                                save time and focus on coding.
                            </p>
                    </div>
                </div>
                <div className="m-4">
                    <img src="ecom.jpg" 
                    alt="Ecommerce Backend" 
                    style={imgStyle}
                    />
                    <h3><a href="https://github.com/kalisurf3r/ecom-back">Ecommerce Backend</a></h3>
                    <div className="commentary">
                            <p>The Ecommerce Backend is a back-end application that uses Express.js, Sequelize, and Postgres.
                                It allows users to create, update, and delete categories, products, and tags. It's a great
                                tool for managing an online store.
                            </p>
                    </div>
                </div>
                <div className="m-4">
                    <img src="tracker.webp" 
                    alt="Employee Tracker" 
                    style={imgStyle}
                    />
                    <h3><a href="https://github.com/kalisurf3r/employee-tracker">Employee Tracker</a></h3>
                    <div className="commentary">
                            <p>The Employee Tracker is a command-line application that uses Node.js and Inquirer. It allows
                                users to view, add, update, and delete employees, roles, and departments. It's a great tool
                                for managing a company's workforce.
                            </p>
                    </div>
                </div>
                <div className="m-4"> 
                    <img src="notes.png" 
                    alt="Note Taker" 
                    style={imgStyle}
                    />
                    <h3><a href="https://github.com/kalisurf3r/note-taker">Note Taker</a></h3>
                    <div className="commentary">
                            <p>The Note Taker is a full-stack application that uses Express.js and Node.js. It allows users
                                to create, save, and delete notes. It's a great tool for jotting down ideas and keeping track
                                of tasks.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}