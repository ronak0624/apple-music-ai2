import moment from "moment";

export default function Progress(props) {
    const { duration, currentTime, onTimeUpdate } = props;

    const currentPercentage = (currentTime / duration) * 100;

    function formatDuration(duration) {
        return moment(duration, 'ss').format("mm:ss");
    }

    function calcClickedTime(e) {
        const clickPositionInPage = e.pageX;
        const bar = document.querySelector(".bar__progress");
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
    }

    function handleTimeDrag(e) {
        onTimeUpdate(calcClickedTime(e));

        const updateTimeOnMove = eMove => {
            onTimeUpdate(calcClickedTime(eMove));
        };

        document.addEventListener("mousemove", updateTimeOnMove);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", updateTimeOnMove);
        });
    }

    return (
        <div className="flex items-center w-full bar__progress">
            <span className="text-white">{formatDuration(currentTime)}</span>
            <div
                className="h-1 flex flex-1 items-center relative rounded-full"
                style={{
                    background: `linear-gradient(to right, blue ${currentPercentage}%, white 0)`
                }}
                onMouseDown={e => handleTimeDrag(e)}
            >
                <span
                    className="w-5 h-5 rounded-full bg-blue-600 border cursor-pointer active:bg-blue-900 border-white absolute"
                    style={{ left: `${currentPercentage - 0.5}%` }}
                />
            </div>
            <span className="bar__time">{formatDuration(duration)}</span>
        </div>
    );
}