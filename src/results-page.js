import React from 'react'
import { Result } from './result'
import { connect } from "react-redux";
import { data } from './data'
class ResultsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const d = this.props.data.length === 0 || undefined ? data : this.props.data
    const mappedDeals = d.map((d, index) => {
      return <Result deal={d} key={index} ></Result>
    })
    return (
      mappedDeals
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state
  };
};

export const ResultsPageRedux = connect(mapStateToProps)(ResultsPage);
