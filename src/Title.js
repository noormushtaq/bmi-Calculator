import React from 'react';



function Title(props={text:"hello World"}){
    return(
        <h1>{props.text || 'hello World'}</h1>
    )
}


export default Title;


