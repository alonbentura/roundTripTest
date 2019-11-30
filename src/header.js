import React from 'react'
import { DropDown } from './assets/dropdown'
import { StyledButton } from './assets/styled-button'
import StyledCheckbox from './assets/checkbox'
import StyledRadioBtn from './assets/radio'

export class Header extends React.Component {

  renderRadioButtons() {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledRadioBtn label="חבילות נופש" />
        <StyledRadioBtn label="חבילות טוס וסע" />
      </div>
    )
  }
  renderInputs() {
    return (
      <div class="row">
        <StyledButton style={styles.btn} label="חפש"></StyledButton>
        <DropDown style={styles.smallInput} label="חזרה" />
        <DropDown style={styles.smallInput} label="חזרה" />
        <DropDown style={styles.smallInput} label="חזרה" />
        <DropDown style={styles.bigInput} label="יעד" />
        <DropDown style={styles.bigInput} label="סוג החבילה" />

      </div >
    )
  }
  renderCheckBoxes() {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledCheckbox
          label="טיסות ישירות בלבד"
        />
        <StyledCheckbox
          label="חיפוש גמיש(+\- יום)"
        />
      </div>
    )
  }

  render() {
    return (
      <div style={styles.container} class="col">
        {this.renderRadioButtons()}
        {this.renderInputs()}
        {this.renderCheckBoxes()}
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#00aadf',
    marginBottom: 25,
  },
  inputsContainer: {
    display: '  flex',
    flexFlow: 'row',
    width: '100%'
  },
  bigInput: {
    height: 50,
    border: 'solid 1px black',
    backgroundColor: 'white',
    borderRadios: 5,
    direction: 'rtl',
    width: '25%',
    marginLeft: "0.5%"


  },
  smallInput: {
    height: 50,
    border: 'solid 1px black',
    backgroundColor: 'white',
    borderRadios: 5,
    direction: 'rtl',
    width: '13%',
    marginLeft: "0.5%"

  },
  btn: {
    backgroundColor: '#7dcd24',
    color: 'white',
    height: 50,
    fontSize: '14px',
    fontWeight: 600,
    width: '7%'
  }
}