const profile= {
    name: "Kay",
    address: "453 sixth lane",
    city: "Charlotte",
    state: "NC",
    zipcode: "28111",
    avatar: "zumba"
}

const profileUpdate= {
    name: "Paul",
    city: "Raleigh"
}


function getProfileUpdate(){
    Object.assign(profileUpdate, profile);
    return profileUpdate.name, profileUpdate.city;
}
console.log(profileUpdate.name, profileUpdate.city);

 function updateProfile(){
       const newProfile= Object.assign({}, profile, {
           address: "451 sixth lane",
           avatar: "Mud"
       });
       console.log(newProfile.address + newProfile.avatar);
       console.log(newProfile);
       
       
     }

console.log(updateProfile());


