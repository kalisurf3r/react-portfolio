export default function Resume() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <h1>Resume</h1>
                <p>Download my <a href="https://docs.google.com/document/d/1m9bJr5oJYXbV9t7N6g5sJz7bJ1t7S0fF/edit?usp=sharing&ouid=101083298085104084682&rtpof=true" target="_blank">resume</a></p>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Postgres, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                </ul>
            </div>
        </div>
    );
}