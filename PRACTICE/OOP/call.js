let setusername=function(username){
    this.username=username;
}
let user=function(username,id,pass ){
    setusername.call(this,username)
    this.id=id
    this.pass=pass
}
let p1=new user("nabeel",1,123)
console.log(p1);