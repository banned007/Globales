import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
    width: '300px',
    margin: '0 auto',
    backgroundColor: '#F8F5EF', 
   // border: '5px solid black'

 }
 
 class EditCustomer extends Component {
 constructor(props) {
 super(props);
 this.state = {
 id: '',   
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 address: ''
 }
 }
 
 componentDidMount = () => {
 this.getCustomerById();
 }
 
 // To get customer based on ID
 getCustomerById() {
 axios.get('http://localhost:3001/customers/editCustomer/' + this.props.match.params.id)
 .then((response) => {
 this.setState({
id: response.data.id,
 firstName: response.data.firstName,
 lastName: response.data.lastName,
 email: response.data.email,
 phone: response.data.phone,
 address: response.data.address,
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 }
 
 // To update the record on submit
 handleSubmit = (event) => {
 event.preventDefault();
 const { id ,firstName, lastName, email, phone ,address} = this.state;
 axios.post('http://localhost:3001/customers/updateCustomer/' + this.props.match.params.id, {
 id: id,
 firstName: firstName,
 lastName: lastName,
 email: email,
 phone: phone,
 address: address
 })
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 
 }
 
 render() {
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit}>
 <h3> Modificar Cliente</h3>

 <label>
 Cédula
 <input
 name="id"
 type="text"
 value={this.state.id}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Nombre
 <input
 name="firstName"
 type="text"
 value={this.state.firstName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 
 <label>
Apellido
 <input
 name="lastName"
 type="text"
 value={this.state.lastName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Email
 <input
 name="email"
 type="text"
 value={this.state.email}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
Teléfono
 <input
 name="phone"
 type="text"
 value={this.state.phone}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Dirección
 <input
 name="address"
 type="text"
 value={this.state.address}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <input
 type="submit"
 value="submit"
 className="btn btn-primary"
 />
 </form>
 </div>
 );
 }
 }
 
 export default EditCustomer;