const fs = require('fs')
class Connection {
    constructor() {
      this.connections = [];
    }
    getAll(){
      return this.connections;
    }
    create(connection){
      let phone_exist = this.connections.filter( function(item) {
        return item.phone == connection.phone;
      });
      let email_exist = this.connections.filter( function(item) {
        return item.email == connection.email;
      });
      if(phone_exist != "") return 'phone number exist'
      if(email_exist != "") return 'email already exist'
      connection.id = this.connections.length + 1
      this.connections.push(connection)
      return connection
    }
    findIndexById (id){
      let index = this.connections.findIndex((connection)=>{
        return connection.id === id
      })
      if(index < 0){
        return -1
      }else{
        return index
      }
    }
    update(id,connection){
      console.log('its an update method ' + connection)
      let index = this.findIndexById(id)
      if(index == -1 ){
        return 'Failed to update. Item not found. '
      }
      let phone_exist = this.connections.filter( function(item) {
        return item.phone == connection.phone && item.id !== id;
      });
      let email_exist = this.connections.filter( function(item) {
        return item.email == connection.email && item.id !== id;
      });
      if(phone_exist != "") return 'phone number exist'
      if(email_exist != "") return 'email already exist'
      this.connections[index].name  =  connection.name || this.connections[index].name
      this.connections[index].phone  =  connection.phone || this.connections[index].phone
      this.connections[index].email  =  connection.email || this.connections[index].email
      return this.connections[index]       

    }
    delete(id){
      let index = this.findIndexById(id)
      if(index == -1){
        return 'Failed to delete. Item not found. '
      }
      let deletedObj = this.connections[index]
      this.connections = this.connections.filter(connection => connection.id !== id )
        return deletedObj;

    }
    findbyId(id){
      let index = this.findIndexById(id)
      if(index == -1){
        return 'Item not found. '
      }
      let connection = this.connections[index]
        return connection;
    }
  
  
   
  }
  module.exports =  new Connection();