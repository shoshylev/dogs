import React from "react";

type fileViewerState = {
    filePath: string;}

function FileViewer(state:fileViewerState){
     return (
        <img src={state.filePath} className="App-logo" alt="logo" />
    );
}

export default FileViewer;