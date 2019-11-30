import React from 'react'
import Slider from './slider'
import StyledCheckbox from './assets/checkbox'
import { DropDown } from './assets/dropdown'
import { fiveStarts, fourStarts, thereStarts, twoStarts } from './assets/starts-icons'
import { connect } from "react-redux";
import { filleterData } from './actions'
import { data } from './data'


export class FiltersBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  filters = {
  }


  header() {
    return (
      <div style={styles.header}>סינון תוצאות חיפוש</div>
    )
  }


  priceRange() {
    const dn = this.props.data.length === 0 ? data : this.props.data
    const price = dn.map((d) => {
      return d.price
    })
    return (
      <div style={{ ...styles.filterContainer, paddingBottom: 20 }}>
        <div style={styles.filterHeadline}>טווח מחיר לאדם</div>
        <Slider range={price} onChangeRange={this.filterDataByPrice}></Slider>
      </div>
    )
  }


  hotelRating() {
    return (
      <div style={styles.filterContainer}>
        <div style={styles.filterHeadline}>דירוג מלון</div>
        <div style={{ display: 'flex' }}>
          {fiveStarts()}
          <StyledCheckbox value="5" name={"rating"} checked={this.state[5]} onChange={this.onChangeCheckBox} ></StyledCheckbox>
        </div>
        <div style={{ display: 'flex' }}>
          {fourStarts()}
          <StyledCheckbox value="4" name={"rating"} checked={this.state[4]} onChange={this.onChangeCheckBox}></StyledCheckbox>
        </div>
        <div style={{ display: 'flex' }}>
          {thereStarts()}
          <StyledCheckbox value="3" name={"rating"} checked={this.state[3]} onChange={this.onChangeCheckBox}></StyledCheckbox>
        </div>
        <div style={{ display: 'flex' }}>
          {twoStarts()}
          <StyledCheckbox value="2" name={"rating"} checked={this.state[2]} onChange={this.onChangeCheckBox} ></StyledCheckbox>
        </div>
      </div>
    )


  }

  getFilters = (fName, fValue) => {
    if (fValue === 'הכל') {
      return this.filters[fName] = []

    }

    if (this.filters[fName] === undefined) {
      this.filters[fName] = []

    }
    if (fName === 'hotelName') {
      return this.filters[fName] = [fValue]
    }
    if (this.filters[fName].includes(fValue) === false) {
      const n = this.filters[fName]
      return n.push(fValue)
    } else {
      for (let i = 0; this.filters[fName].length; i++) {
        const compereValue = (element) => element === fValue;
        const index = this.filters[fName].findIndex(compereValue)
        return this.filters[fName].splice(index, 1)
      }
    }
    return this.filters
  }


  onChangeCheckBox = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.getFilters(name, value)
    this.isEmpty(name)
    this.filterData(name)
  }


  isEmpty = (fName) => {
    if (this.filters[fName].length === 0) {
      delete this.filters[fName]
    }
  }





  filterDataByPrice = (event, priceRange) => {
    const orders = data
    const priceFilteredData = orders.filter(order => order.price >= priceRange[0] && order.price <= priceRange[1]);
    this.props.filter('filter', priceFilteredData)
  }



  filterData = () => {
    const selectedFilters = this.filters
    const items = data
    const filtersKeys = Object.keys(selectedFilters);
    const newData = items.filter(item => filtersKeys.every(filterKey => selectedFilters[filterKey]
      .some(filterValue => item[filterKey] === filterValue)))
    this.props.filter('filter', newData)
  }

  hostingBase() {
    return (
      <div style={styles.filterContainer}>
        <div style={styles.filterHeadline}>בסיס אירוח</div>
        <StyledCheckbox label="חצי פנסיון" name={"HostingBase"} value="halfBoard" checked={this.state.halfBoard} onChange={this.onChangeCheckBox}></StyledCheckbox>
        <StyledCheckbox label="ארוחת בוקר" name={"HostingBase"} value="breakfast" onChange={this.onChangeCheckBox} checked={this.state.breakfast}></StyledCheckbox>
      </div>
    )

  }
  availability() {
    return (
      <div style={styles.filterContainer}>
        <div style={styles.filterHeadline}>זמינות</div>
        <StyledCheckbox label="חבילות באישור מיידי" name={'availability'} value="immediate" onChange={this.onChangeCheckBox}></StyledCheckbox>
      </div>
    )
  }
  hotel() {
    let dataForDropDown = this.props.data.length === 0 ? data : this.props.data
    dataForDropDown = [...dataForDropDown, { 'hotelName': 'הכל' }]
    const hotelsName = dataForDropDown.map((d) => {
      return d.hotelName
    })
    return (
      <div style={styles.filterContainer}>
        <div style={styles.filterHeadline}>מלון</div>
        <DropDown data={hotelsName} defaultValue={dataForDropDown[6]} name={'hotelName'} onChange={this.onChangeCheckBox} style={styles.dropDown} />
      </div>
    )
  }

  render() {
    return (
      <div style={styles.container}>
        {this.header()}
        {this.priceRange()}
        {this.hotelRating()}
        {this.hostingBase()}
        {this.availability()}
        {this.hotel()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => ({
  filter: (type, newData) => dispatch(filleterData(type, newData))
});

export const FiltersBoxRedux = connect(mapStateToProps, mapDispatchToProps)(FiltersBox);


const styles = {
  container: {
    backgroundColor: '#044f6d',
    padding: 15
  },
  header: {
    borderBottom: 'solid 1px #00aadf',
    fontSize: 26,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: 'solid 1px #00aadf',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingTop: 10
  },
  filterHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 14
  }, dropDown: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    direction: 'rtl',
    textAlign: 'right'
  }
}