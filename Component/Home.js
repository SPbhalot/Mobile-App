import React from 'react'
import {InputGroup,FormControl,} from 'react-bootstrap'

function Home(props) {
    console.log("kesi ho")
    return (<>
        <div className="main-div">
            <div> Search Movie</div>
             <InputGroup className="mb-3 input">
          <FormControl
              placeholder="Movie Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={props.search}
              onChange={props.UserInput}
               />
          </InputGroup>
        </div>
        </>

    )
}

export default Home
