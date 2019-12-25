import React from 'react'

function Firstbutton(props){
    let [isHidden,setisHidden]=React.useState(props);

    function toggleHidden(props){
        setisHidden(!isHidden)}

    return(
        <div>
           <button 
            style={{

              background: props.bgColor,

            color: props.textColor}}         

            onClick={toggleHidden}
             >

          {props.label}

</button>

        </div>
    )
}

export default Firstbutton;