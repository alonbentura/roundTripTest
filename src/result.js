import React from 'react'
import { fiveStarts, fourStarts, thereStarts, twoStarts } from './assets/result-stars'
import { StyledButton } from './assets/styled-button'

const rating = {
  5: fiveStarts(),
  4: fourStarts(),
  3: thereStarts(),
  2: twoStarts()
}

const HostingBase = {
  breakfast: 'ארוחת בוקר',
  halfBoard: 'חצי פנסיון'
}

export class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div class="row" style={styles.resultContainer}>
        <div class="col-9" >
          <div style={styles.hotelName}>{this.props.deal.hotelName}</div>
          <div class="row">
            <img class="col-3" alt='' style={styles.imgStyle} src={this.props.deal.img}></img>
            <div class="col-9" style={styles.details}>
              <div>{rating[this.props.deal.rating]}</div>
              <div>יציאה: {this.props.deal.dateDeparture.time} |  {this.props.deal.dateDeparture.date}</div>
              <div>חזרה: {this.props.deal.dateReturn.time} | {this.props.deal.dateReturn.date} </div>
              <div>{HostingBase[this.props.deal.HostingBase]} | {this.props.deal.nights} לילות | כולל העברות</div>
            </div>
          </div>
        </div>
        <div class="col-3" style={styles.left}>
          <div style={styles.priceText}>${this.props.deal.price}
            <div style={{ ...styles.priceText, fontSize: 12, marginTop: -5 }}>מחיר לאדם</div>
          </div>
          <div style={{ ...styles.priceText, color: 'black', fontSize: 14 }} > סה"כ ${this.props.deal.price * 2}</div>
          <StyledButton style={styles.btn} label="פרטים"></StyledButton>
        </div>

      </div>
    )
  }
}

const styles = {
  hotelName: {
    textAlign: ' start',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 5
  },
  details: {
    textAlign: 'start',
    paddingRight: 0
  },
  priceText: {
    color: '#00aadf',
    fontSize: 30,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'rgb(125, 205, 36)',
    color: 'white',
    width: 100,
    height: 35,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 5,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '7px 0 5px 0',
    borderRight: 'solid 1px rgb(0, 170, 223)',
  }, imgStyle: {
    height: 100,
    objectFit: 'fill'
  },
  resultContainer: {
    backgroundColor: 'white',
    height: 170,
    marginBottom: 10,
    marginRight: 0,
    marginLeft: 0,
    direction: 'rtl',
    padding: 10
  },
}