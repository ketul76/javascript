const cameras = {
  price: 600,
  weight: 2000,
  myDes : function(){
    return `this canon camera is of ${this.price}$`
  }
}
console.log(cameras.myDes());
