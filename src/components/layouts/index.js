import React from 'react'
import Tracks from "../tracks/Tracks"
import Search from "../tracks/Search"

  const index= () => {
  return (
    <div className="container">
      <React.Fragment>
        <Search/>
          <Tracks/>
        </React.Fragment>
    </div>
  )
}

export default index
