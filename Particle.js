// function Particle(startX, startY){
//    this.X = startX;
//    this.Y = startY;
//    this.velocity = {x: 0, y: 0};
   
// }
//  const particles = [];
//  for(let i = 0; i < 100; i++){

//     particles.push (new Particle(i, Math.floor(Math.random()*500)));
//  }  

//  console.log(particles);

 class Particle{
 constructor(startX, startY){
     this.X = startX;
    this.Y = startY;
    this.velocity = {x: 0, y: 0};
 }
 }
     const particles = [];
     for (let i = 0; i < 100; i++){
         particles.push(new Particle(i, (Math.random()*500).toFixed(3)));
       }
    

 console.log(particles);
 //console.log(particles.X)
