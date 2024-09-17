import React, {createContext} from "react";

export const DataContext = createContext(null)

const DataContextProvider = (props) => {

    const user = {
        fullname: 'Aravind',
        course: 'MERN'
    }

    const contextValue = {user}

    return(
        <DataContext.Provider value={contextValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider