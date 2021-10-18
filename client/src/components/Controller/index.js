
const Controller = (props) => {

    return (
        <div>
            <div className="controller">
                <div></div>
                <div onClick={() => props.dispatch({ type: "w"})}>up</div>
                <div></div>
                <div onClick={() => props.dispatch({ type: "a"})}>left</div>
                <div></div>
                <div onClick={() => props.dispatch({ type: "d"})}>right</div>
                <div></div>
                <div onClick={() => props.dispatch({ type: "s"})}>down</div>
                <div></div>
            </div>
        </div>
    );
};

export default Controller;