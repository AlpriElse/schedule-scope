import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'

const Style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

class Filter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={Style}>
        <div>
          <Input type="text"/>
          <br/>
        </div>
      </div>
    )
  }


}
export default connect()(Filter)
