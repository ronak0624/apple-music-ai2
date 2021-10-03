

export default function Player(props) {
    const {src, type} = props;

    return(
        <div className="w-screen fixed bottom-0">
            <span>{src}</span>
        </div>
    )
}