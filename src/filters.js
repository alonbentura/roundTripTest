import React from 'react'
import Slider from './slider'
import StyledCheckbox from './assets/checkbox'
import { DropDown } from './assets/dropdown'
import { fiveStarts, fourStarts, thereStarts, twoStarts } from './assets/starts-icons'
import { connect } from "react-redux";
import { filleterData } from './actions'



const data = [
  {

    hotelName: "HOTEL HUNGARIA CITY CENTER ",
    rating: "3",
    dateDeparture: {
      date: " 15/7/17",
      time: '04:50'
    },
    dateReturn: {
      date: " 20/07/17",
      time: '10:50'
    },
    price: "1100",
    nights: 5,

    availability: "tomorrow",
    HostingBase: 'halfBoard',
    summary: '7 לילות | חצי פנסיון | כולל העברות',
    img: 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027'

  },
  {

    hotelName: "CROWNE PLAZA TEL AVIV",
    rating: "5",
    dateDeparture: {
      date: " 18/04/17",
      time: '04:50'
    },
    dateReturn: {
      date: " 21/04/17",
      time: '10:50'
    },
    price: "1500",
    availability: "immediate",
    HostingBase: 'halfBoard',
    nights: 3,
    summary: '7 לילות | חצי פנסיון | כולל העברות',
    img: 'https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/05/Luxury-Hotels-in-India.jpg'

  },
  {

    hotelName: "RAMADA APOLLO AMSTERDAM CENTERE",
    rating: "2",
    dateDeparture: {
      date: " 14/04/17",
      time: '04:50'
    },
    dateReturn: {
      date: " 19/04/17",
      time: '10:50'
    },
    price: "900",
    nights: 5,

    availability: "immediate",
    HostingBase: 'breakfast',
    summary: '7 לילות | חצי פנסיון | כולל העברות',
    img: 'https://hmhub.me/wp-content/uploads/2018/07/Dhaka-Hotels.jpg'
  },
  {

    hotelName: "MARRIOTT LAS VEGAS ",
    rating: "5",
    dateDeparture: {
      date: " 14/04/17",
      time: '04:50'
    },
    dateReturn: {
      date: " 20/04/17",
      time: '10:50'
    },
    price: "2500",
    nights: 6,

    availability: "immediate",
    HostingBase: 'breakfast',
    summary: '7 לילות | חצי פנסיון | כולל העברות',
    img: 'http://www.shangri-la.com/uploadedImages/Corporate/about-us/our-brands/SL-Our-Brand-Shangri-La-Hotels.jpg?width=720&height=283&mode=crop&quality=80'
  },
  {

    hotelName: "RADISSON BLU HOTEL BUCHAREST",
    rating: "4",
    dateDeparture: {
      date: " 14/04/17",
      time: '04:50'
    },
    dateReturn: {
      date: " 17/04/17",
      time: '10:50'
    },
    nights: 3,
    price: "1300",
    availability: "immediate",
    HostingBase: 'breakfast',
    summary: '7 לילות | חצי פנסיון | כולל העברות',
    img: 'https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg'
  }

]


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
    return (
      <div style={styles.filterContainer}>
        <div style={styles.filterHeadline}>טווח מחיר לאדם</div>
        <Slider></Slider>
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
    if (this.filters[fName] === undefined) {
      this.filters[fName] = []

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
    this.filterData()
  }

  filterData = () => {
    debugger; const selectedFilters = this.filters
    const items = data
    const filtersKeys = Object.keys(selectedFilters);
    const newData = items.filter(item => filtersKeys.every(filterKey => selectedFilters[filterKey]
      .some(filterValue => item[filterKey] === filterValue)))
    this.props.onClick('filter', newData)
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
    const hotelsName = data.map((d) => {
      return d.hotelName
    })
    return (
      <div style={styles.filterContainer}>
        <div style={styles.filterHeadline}>מלון</div>
        <DropDown data={hotelsName} name={'hotelName'}  ></DropDown>
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
  onClick: (type, newData) => dispatch(filleterData(type, newData))
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
    paddingBottom: 10
  },
  filterHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
}