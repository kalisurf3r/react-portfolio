export default function Project(props) {
    
    const imgStyle = {
        width: "auto",
        height: "250px",
        objectFit: "cover",
    };

return (
    <>
    <div className="m-4">
                    <img src={props.img} 
                    alt="Portfolio Project" 
                    style={imgStyle}
                    />
                    <h3 style={{fontFamily: 'Open Sans'}}><a href={props.url}>{props.title}</a></h3>
                    <div className="commentary">
                            <p>{props.commentary}
                            </p>
                    </div>
                </div>
                </>
)
}