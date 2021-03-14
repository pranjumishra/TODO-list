let input = prompt("What would you like to do");
let arr = [];
while (input !== "quit") {
  if (input === "new") {
    let n = prompt("What would you like to add");
    arr.push(n);
    for (let i of arr) console.log(`${i} added`);
  } else if (input === "list") {
    console.log("********************");
    for (let i of arr) console.log(i);
    console.log("********************");
  } else if (input === "delete") {
    let del = prompt("Enter index from where you would like to delete");
    arr.splice(del, 1);
    for (let i of arr) console.log(`${i} deleted`);
  }
  input = prompt("What would you like to do");
}
console.log("Fine,You quit");
