
const Controller = (props) => {

    return (
        <div>
            <div className="controller">
                <div></div>
                <div onClick={() => props.dispatch({ type: "w"})}></div>
                <div></div>
                <div onClick={() => props.dispatch({ type: "a"})}></div>
                <div></div>
                <div onClick={() => props.dispatch({ type: "d"})}></div>
                <div></div>
                <div onClick={() => props.dispatch({ type: "s"})}></div>
                <div></div>
            </div>
        </div>
    );
};

export default Controller;