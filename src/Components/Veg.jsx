import React from 'react'

function Veg ({value,vegN}){  

    const [count,setCount]=React.useState(value);

    function change(value){
       
        setCount(count+value)
    }

  return (
    <div>
        <center>

            <h1>{vegN} : {count} kg</h1>
            
            <button onClick={()=>change(+1)} className="plus"> + </button>
            <button onClick={()=>change(-1)} className="neg"> - </button>

        </center>
    </div>
  )
}

export {Veg}