function Person(){
	this.brain = true;
};
function Student(){
	this.computer = true;
};
function Graduate(){
	this.skillz = 'Mad'
};

const p = new Person();
Student.prototype = p;

const s = new Student();
Graduate.prototype = s;

const g = new Graduate();
console.log(g.skillz, g.computer, g.brain);

//Using example above
console.log(g.hasOwnProperty('skillz'),g.hasOwnProperty('computer')) //true,false