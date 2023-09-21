import Object from "../object";

export default function Card({ obj }) {
    return (
        <div className="min-w-full h-5/6 rounded-3xl m-8 relative flex justify-between items-center overflow-hidden scrollbar-hide">
            <div className="z-10">
                <Object model={obj.title} objPosition={obj.position} color={obj.color} />
            </div>
            <div>
                {obj.info}
            </div>
        </div>
    )
}