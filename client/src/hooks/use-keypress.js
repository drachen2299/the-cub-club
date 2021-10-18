import { useReducer } from "react";

const useKeyPress = (initialTiles = [0,0]) => {
    const [tileState, dispatch] = useReducer((state, action) => {
        const { canKeyPress, selectedTile:[y,x], keyPressed } = state;
        switch (action.type) {
            case "start-keypress":
                return {
                    ...state,
                    canKeyPress: true
                }
            case "stop-keypress":
                return {
                    ...state,
                    canKeyPress: false
                }
            //left
            case 65:
                if( x === 0 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y,x -1], keyPressed: "a"};
            case "a":
                if( x === 0 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y,x -1], keyPressed: "a"};

            //up
            case 87:
                if( y === 0 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y - 1, x], keyPressed: "w"};
            case "w":
                if( y === 0 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y - 1, x], keyPressed: "w"};
            // right
            case 68:
                if( x === 11 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y, x + 1], keyPressed: "d"};
            case "d":
                if( x === 11 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y, x + 1], keyPressed: "d"};
            // down
            case 83:
                if( y === 5 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y + 1, x], keyPressed: "s"};
            case "s":
                if( y === 5 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y + 1, x], keyPressed: "s"};
            default:
                return state;
        }
    }, {
        selectedTile: initialTiles,
        canKeyPress: true,
        keyPressed: ''
    }, (initialState) => {
        if(window.innerWidth < 768) {
            return {
                ...initialState,
                canKeyPress: false,
                keyPressed: ""
            }
        }
        return initialState;
    })
    return [tileState , dispatch]; 
}

export default useKeyPress;