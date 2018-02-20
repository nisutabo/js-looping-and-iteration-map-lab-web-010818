// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function (name) {return name.toLowerCase()})
}

function nameToAttributes (array){
  let result = [];
  for (const name of array){
    let full_name = {};
    let first_name = name.split(" ")[0];
    let last_name = name.split(" ")[1];
    full_name["firstName"] = first_name;
    full_name["lastName"] = last_name;
    result.push(full_name);
  }
  return result;
}

function attributesToPhrase(array){
  let result = [];
  for (const person of array){
    result.push(`${person.name} is from ${person.hometown}`);
  }
  return result;
}
