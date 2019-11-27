import React from 'react'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select'
import { Checkbox } from '@material-ui/core';
import { DropDown } from './assets/dropdown'
import {StyledButton} from './assets/styled-button'

export class Header extends React.Component {

  renderRadioButtons() {
    return (
      <div>
        <Radio></Radio>
        <Radio
        ></Radio>
      </div>
    )
  }
  renderInputs() {
    return (
      <div style={styles.inputsContainer}>
        <StyledButton style={styles.btn} label="חפש"></StyledButton>
        <DropDown style={styles.smallInput} placeholder="חזרה" />
        <DropDown style={styles.smallInput} placeholder="חזרה" />
        <DropDown style={styles.smallInput} placeholder="חזרה" />
        <Select label="יעד:" style={styles.bigInput} />
        <Select label="סוג חבילה:" style={styles.bigInput} />
      </div >
    )
  }
  renderCheckBoxes() {
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
            />
          }
          label="טיסות ישירות בלבד"
        />
        <FormControlLabel
          control={
            <Checkbox
            />
          }
          label="חיפוש גמיש(+\- יום)"
        />

      </div>
    )
  }

  render() {
    return (
      <div style={styles.container} class="row">
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
    justifyContent: 'space-between',
    width: '100%'
  },
  bigInput: {
    width: '20%',
    height: 50,
    border: 'solid 1px black',
    backgroundColor: 'white',
    borderRadios: 5,
    direction: 'rtl',
  },
  smallInput: {
    width: '15%',
    height: 50,
    border: 'solid 1px black',
    backgroundColor: 'white',
    borderRadios: 5
  },
  btn: {
    backgroundColor: '#7dcd24',
    color: 'white',
    width: 150,
    height: 50,
    fontSize: 25,
    fontWeight: 600
  }
}