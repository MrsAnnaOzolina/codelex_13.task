import { useRef, useEffect, useState } from "react";


function FirstInput() {
  const inputRef = useRef();
  //  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(false);
    if (inputRef.current) {

      inputRef.current.focus();


    }

  }, [])
  //  if(loading) {
  //   return <h1>Loading...</h1>
  // }


  return (
    <div>
      <input
        type='text'
        placeholder="write something"
        ref={inputRef}
      />
    </div>
  )
}

export default FirstInput