import React from 'react'

function jsxCompare() {
    // return (
    //     <div>
    //         <h1>JSX Compare</h1>
    //     </div>
    // )

    return React.createElement("div", { id: "hello" }, React.createElement("h1", null, "Hello"))
}

export default jsxCompare