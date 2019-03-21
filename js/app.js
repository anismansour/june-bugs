console.log("running");

// exercice 1

for (i=1 ; i<=20 ; i++){
    console.log("the nb is  " +i);
};

// exercice 2 

for (i=0; i<=200; i++){
    if (i%2 ===0 ){
        console.log("the nb is   " +i);

    };

};

// exercice 3 /1
for (i=1; i<=20; i++) {
console.log("Love me, pet me! HSSSSSS!" + i);

};
// exercice 3 /2
const test32 = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (i=0; i<=20; i++){
if (i%2 ===0 ){
let randomIndex = Math.floor(Math.random() * 30); 
if (randomIndex <= 10){
    console.log(test32[0]);
};
if(randomIndex<= 20){
    console.log(test32[1]);
} else {
    console.log(test32[2]);
}


}
}   


// var randomIndex=Math.floor(math.random()*x)
// for (i=1; i<=20; i++) {
//    if ( i%2 === 0) {

   
//     console.log("Love me, pet me! HSSSSSS!" + i);}
    
//     };

// EXERCICE  Fizz Buzz 

for (i=0; i<=100; i++) {
if( i%3 ===0 ){
    console.log("fizz   "+i );
};
if (i% 5 === 0) {
    console.log("buzz   "+i);
};
if (i%3 ===0 && i%5===0){
    console.log("FizzBuzz   "+i);
};


};

// GETTING TO KNOW YOU 

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0]= "Gameboy";
console.log(kenny);
jimClark[1]= jimClark[1]+1;
console.log(jimClark);
ryan[2]="Gotham City";
console.log(ryan);
reuben.pop();

reuben.push("Chicago");
console.log(reuben);
jimHaff.pop();
jimHaff.push("LA","NY","LV");
console.log(jimHaff);


// Yell at The NINJA 
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for(let i=0; i<ninjaTurtles.length; i++) {

 console.log(ninjaTurtles[i].toUpperCase());
};



/// Return of the closets 


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

   var kristynsShoe = kristynsCloset[0];
   kristynsCloset.shift();
   thomsCloset[2].push(kristynsShoe);
//    var outfit1 = [];
//    var outfit2 = [];
//    var outfit3 = [];
//    outfit1.push(kristynsCloset[0],kristynsCloset[3],kristynsCloset[4]);
//    outfit2.push(thomsCloset[0][2],thomsCloset[1][2],thomsCloset[2][1]);
//    outfit3.push(thomsCloset[0][3],thomsCloset[1][0],thomsCloset[2][2]);

   console.log(kristynsShoe);
   console.log(kristynsCloset);
   console.log(thomsCloset);
   console.log("the best hat  "+kristynsCloset[0], "matches with  "+ kristynsCloset[3], "best with "+kristynsCloset[4]);
   console.log("the best hat  "+thomsCloset[0][2], "matches with  "+ thomsCloset[1][2], "best with "+thomsCloset[2][1]);
   console.log("the best hat  "+thomsCloset[0][3], "matches with  "+ thomsCloset[1][0], "best with "+thomsCloset[2][2]);



// Dirty Laundry
for (i=0; i<=kristynsCloset.length; i++) {
    console.log("WHIRR: Now washing  " +kristynsCloset[i]);
};


// inventory 
let inventory = [];
for (i=0; i<=thomsCloset.length; i++ ){
inventory.push(thomsCloset);
}
console.log(" this is the inventory   "+ inventory);


// Multiples of 3 and 5 
var x = 0;
for (i=0; i<1000; i++) {
if(i%3 === 0 || i%5 === 0){
    
    var x = x + i;
}

};
console.log("the total nb is    " + x);