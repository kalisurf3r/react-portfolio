export default function Resume() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <h1 style={{fontFamily: 'Open Sans'}}>Resume</h1>
                <p>Download my <a href="newResume.pdf" target="_blank">resume</a></p>
                <h2 style={{fontFamily: 'Open Sans'}}>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                </ul>
                <h2 style={{fontFamily: 'Open Sans'}}>Back-end Proficiencies</h2>
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