import { useReducer } from "react";

const useKeyPress =(initialState = [0,0]) => {
    const [selectedTile, dispatch] = useReducer(([y,x], action) => {
        switch (action.type) {
            //left
            case 65:
                if( x === 0 ) {
                    return [y,x];
                }
                return [y,x -1];
            //up
            case 87:
                if( y === 0 ) {
                    return [y,x];
                }
                return [y - 1, x];

            // right
            case 68:
                if( x === 3) {
                    return[y,x];
                }
                return [y, x + 1];
            // down
            case 83:
                if( y === 3) {
                    return [y,x];
                }
                return [y + 1, x];
            default:
                throw new Error();
        }
    }, initialState)
    return [selectedTile , dispatch]; 
}

export default useKeyPress;