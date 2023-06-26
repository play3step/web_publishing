const obj = {name: 'Tom'};

const say = function(city){
    console.log('name is '+ this.name + ' in ' + city);
}

const boundSay = say.bind(obj);
boundSay("seoul");  //name is Tom in seoul