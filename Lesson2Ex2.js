const course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log (course.students[1].computer.type);
console.log(course.preReqs.equipment);
console.log(course.preReqs.equipment.OSOptions[1]);
 var array = course.preReqs.equipment.OSOptions;
 console.log(array.join(" " + "or" + " "));


const a = course.students[0].computer.OS;
const b = course.students[1].computer.OS;
const c = course.students[2].computer.OS;
 
 if (a=== 'OSX'){
 console.log(course.students[0].name);
 }
 if (b=== 'OSX'){
	console.log(course.students[1].name);
	}
if (c=== 'OSX'){
	console.log(course.students[2].name);
	}	

