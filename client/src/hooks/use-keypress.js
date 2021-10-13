import { useReducer } from "react";

const useKeyPress =(initialTiles = [0,0]) => {
    const [tileState, dispatch] = useReducer((state, action) => {
        const { canKeyPress, selectedTile:[y,x] } = state;
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
                return { ...state, selectedTile: [y,x -1]};
            //up
            case 87:
                if( y === 0 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y - 1, x]};

            // right
            case 68:
                if( x === 3 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y, x + 1]};
            // down
            case 83:
                if( y === 3 || !canKeyPress) {
                    return state;
                }
                return { ...state, selectedTile: [y + 1, x]};
            default:
                return state;
        }
    }, {
        selectedTile: initialTiles,
        canKeyPress: true,
    }, (initialState) => {
        if(window.innerWidth < 768) {
            return {
                ...initialState,
                canKeyPress: false
            }
        }
        return initialState;
    })
    return [tileState , dispatch]; 
}

export default useKeyPress;