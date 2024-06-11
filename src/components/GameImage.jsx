
export default function  GameImage(props) {
    const image = require(`../../images/gameImages/${props.image}.png`);
    return (
        <div className="game-image" style={{ margin: "20px 0" }}>
            <h3 style={{ textAlign: "center" }}>{props.title}</h3>
            <img src={image} alt={props.title} style={{ width: "100%", maxHeight: "500px", display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: "10px", textAlign: "justify" }}>{props.description}</p>
        </div>
    );
}

