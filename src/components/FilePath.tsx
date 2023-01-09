import React from "react";

type fileViewerState = {
    filePath: string[];}

function FilePath(pathStateate:fileViewerState){

var renderOption = function(currOption:string){
    debugger
    return (
        <option>{currOption}</option>
    )};

    return (
        <select>
            {pathStateate.filePath.map(s=> renderOption(s))}
        </select>
    );
}


export default FilePath;