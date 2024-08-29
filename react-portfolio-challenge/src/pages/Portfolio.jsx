export default function Portfolio() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex flex-row flex-wrap justify-center">
                <div className="m-4">
                    <img src="https://via.placeholder.com/150" alt="Project 1" />
                    <h3>Project 1</h3>
                </div>
                <div className="m-4">
                    <img src="https://via.placeholder.com/150" alt="Project 2" />
                    <h3>Project 2</h3>
                </div>
                <div className="m-4">
                    <img src="https://via.placeholder.com/150" alt="Project 3" />
                    <h3>Project 3</h3>
                </div>
                <div className="m-4">
                    <img src="https://via.placeholder.com/150" alt="Project 4" />
                    <h3>Project 4</h3>
                </div>
            </div>
        </div>
    );
}