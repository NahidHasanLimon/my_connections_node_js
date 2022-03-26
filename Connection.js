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
      console.log('Fround array is: '+phone_exist)
      console.log(this.connections)
      connection.id = this.connections.length + 1
      this.connections.push(connection)
      return connection
    }
    delete(id){
      let index = this.connections.findIndex((connection)=>{
        return connection.id === id
      })
     let deletedObj = this.connections[index]
      if(index < 0){
        return 'Failed to find and delete'
      }
      this.connections = this.connections.filter(connection => connection.id !== id )
        return deletedObj;
  
      // 

    }
    findbyId(id){
      console.log('connection deleted')
      let index = this.connections.findIndex((connection)=>{
        return connection.id === id
      })
     let deletedObj = this.connections[index]
      if(index < 0){
        return 'Failed to find and delete'
      }
      this.connections = this.connections.filter(connection => connection.id !== id )
        return deletedObj;
  
      // 

    }
  
  
   
  }
  module.exports =  new Connection();