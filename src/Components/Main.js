import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom'; 


 // Our all component files
 import ListCustomer from '../Components/ListCustomer';
 import AddCustomer from '../Components/AddCustomer';
 import EditCustomer from '../Components/EditCustomer';
 import Prueba from '../Components/Prueba';

 class Main extends Component {
     

 render() {
    console.log("siiiii");

 return (
 <main>
 
 <Switch>       
 
 <Route path='/listcustomer' component={ListCustomer} /> 
 <Route path='/addcustomer' component={AddCustomer} />
 <Route path='/prueba' component={Prueba} />
 </Switch>
 </main>
 );
 }
 }
 
 export default Main;