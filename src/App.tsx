import React from "react";
import {useSelector} from "react-redux";

function App(): React.JSX.Element {

  const info = useSelector(state => state)
  return (
        <div className='bg-amber-500 font-bold'>hello world
        </div>

  )
}

export default App;
