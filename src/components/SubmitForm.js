import React, { Component } from 'react';
import '../css/SubmitForm.css';
const dentistryOptions = [
    {value: 'Dentistry 1', label: 'Dentistry 1'},
    {value: 'Dentistry 2', label: 'Dentistry 2'},
    {value: 'Dentistry 3', label: 'Dentistry 3'}

];

class SubmitForm extends Component {
    state = {
        selectedOption: 'None',
    }
    constructor(props){
        super(props)

        this.state = {
            name: '',
            phoneNumber: '',
            eMail: '',
            timeSlot: '',
            dentistry: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handlePhoneNumberChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    handleEMailChange = (event) => {
        this.setState({
            eMail: event.target.value
        })
    }
    handleDentistryChange = (event) => {
        this.setState({
            dentistry: event.target.value
        });
    }
    handleTimeChange = (event) => {

    }
    handleFormChange = ({ target }) => {
        this.setState({
            selectedOption: target.value,
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.phoneNumber} ${this.state.eMail} ${this.state.timeSlot} ${this.state.dentistry}`)
        event.preventDefault()
        /* client.publish('dentistry', '{"msg": "Hello Backend"}')
        client.on() */
    }
    render() {
        return(
            <div id='position'>
              <TextBlock />
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label><br/>
                    <input type="text" value={this.state.name} placeholder = 'Name Namerson' onChange={this.handleNameChange}/><br/>
                    <label>Phone number:</label><br/>
                    <input type="text" value={this.state.phoneNumber} placeholder = '0712345678' onChange={this.handlePhoneNumberChange}/><br/>
                    <label>Email:</label><br/>
                    <input type="text" value={this.state.eMail} placeholder = 'youremail@domain.gov' onChange={this.handleEMailChange} /><br/>
                    <label>Time:</label><br/>
                    <select value= {this.state.timeSlot} onChange={this.handleOptionChange}>
                        <option default>Select a time slot</option>
                        <option value="noSelection">-------</option>
                    </select><br/>
                    <label>Dentistry:</label><br/>
                    <select value= {this.state.selectedOption} onChange={this.handleFormChange, this.handleDentistryChange}>
                        <option placeholder>Select your dentistry</option>
                        <option>-------</option>
                        {dentistryOptions.map(({value, label}, index) => <option value={value} >{label}</option>)}
                                           
                    </select>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
const TextBlock = () => {
  const textBlock = 'To book a time, either pick the dentistry you want from the form or select a marker on the map and then fill in your info and submit'
  return (
      <p id='textBlock'>{textBlock}</p>
  )
}
export default SubmitForm;
