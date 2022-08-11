function Car(name){
  let timeTaken = 10000;
  return{
    timeTakenToStart : "0 sec",
    start : function (){
      setTimeout(function(){
        console.log('START');
        this.timeTakenToStart = 10000/1000 + ' Secs';
        console.log(this.timeTakenToStart);
      }, timeTaken)
    },
    getStartingTime : function (){
      return this.timeTakenToStart;
    }
  }
}

let myCar = new Car('Camry');
console.log(myCar.timeTakenToStart);
myCar.start();

let Person = {
    name : "Dikko Hikmat",
    idNum : "2022/1234",
    bestColor : "Blue",
    hairColor : "Black",
    talk : function (){
      return " talk very well";
    },
    write : function(){
      return " write boldly";
    },
    read : function(){
      return " read fluently";
    },
    see : function(){
      return " see clearly";
    },
    performAction : function(){
      return this.name + " with " + this.idNum + " identification number can " + this.talk() + ", " + this.write() + ", " + this.read() + ",  and" + this.see() + " clearly.\n Thank you.";
    }
  }
  
  function School(){
    return Person;
  }
  
  let school = new School();
  //let n = school.name + " with " + school.idNum + " " + school.write();
  console.log(school.performAction());
  console.log(" ");
  school.name = "Omotayo Mutiat";
  school.idNum = "2022/1444";
  console.log(school.performAction());
  