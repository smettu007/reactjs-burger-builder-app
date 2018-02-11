import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
import Aux from '../../hoc/Aus';
import firebase from 'firebase';
import 'firebase/database';
import Rebase from 're-base';


  var app = firebase.initializeApp({
    apiKey: "AIzaSyDlnlNm1YVDBzN8IMLazPCU2z_LjBqXoxo",
    authDomain: "react-burger-a3da5.firebaseapp.com",
    databaseURL: "https://react-burger-a3da5.firebaseio.com",
    projectId: "react-burger-a3da5",
    storageBucket: "react-burger-a3da5.appspot.com",
    messagingSenderId: "784627792057"
  });
  
  var db = firebase.database(app);
  var base = Rebase.createClass(db);

class Orders extends Component {
    state={
        orders:[],
        loading:true,
        noOrder:null
    }
    
    componentDidMount(){
     
        base.listenTo('orders', {
            context: this,
            state:'orders',
            asArray:false,
            then:(data) =>{
                console.log(data);
                const fetchOrders=[];
                
                                for (let key in data){
                                   fetchOrders.push({
                                       ...data[key],
                                       id:key
                                   });
                                }
                                if(fetchOrders.length==0){
                                    this.setState({noOrder: <p style={{
                                        textAlign:'center',
                                        margin:'auto',
                                        fontWeight:'800'
                                    }}>No orders placed</p>});
                                }
                                console.log(fetchOrders);
                                this.setState({loading:false,orders:fetchOrders});
            }
          })

        // axios.get('/orders.json')
        // .then(
           
        //     res=>{
        //         //console.log(res);
        //         const fetchOrders=[];

        //         for (let key in res.data){
        //            fetchOrders.push({
        //                ...res.data[key],
        //                id:key
        //            });
        //         }
        //         if(fetchOrders.length==0){
        //             this.setState({noOrder: <p style={{
        //                 textAlign:'center',
        //                 margin:'auto',
        //                 fontWeight:'800'
        //             }}>No orders placed</p>});
        //         }
        //         console.log(fetchOrders);
        //         this.setState({loading:false,orders:fetchOrders});
        //     }
        // ).catch(err =>{
        //     this.setState({loading:false});
        // })
        // ;
    }
    
    render() {
        return (
            <Aux>
                {this.state.noOrder}
             <div>
                {this.state.orders.map(order=>{
                    return <Order
                    price={order.price}
                    ingredients={order.ingredients}
                     key={order.id}/>
                })}
               
               
            </div>
            </Aux>
         
        );
    }
}

export default withErrorHandler(Orders,axios);