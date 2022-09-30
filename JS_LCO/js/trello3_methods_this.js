let myTodos = {
  day: 'monday',
  meetings: 0,
  meetDone:0,
  addMeeting: function(num){
    this.meetings = this.meetings + num;
  },
  meetComplete: function(mdone){
    this.meetDone = this.meetDone + mdone;
  },
  meetResetday: function(){
     this.meetings=0
     this.meetDone=0
  },
  meetingSummary:function(){
    meetLeft = this.meetings - this.meetDone;
    return `you have ${meetLeft} meetings are left`;
  },
}
myTodos.addMeeting(4);
myTodos.meetComplete(3);
console.log(myTodos.meetingSummary());
myTodos.meetResetday()
console.log(myTodos);