// Iteration 1: Names and Input
let hacker1 = "leogenuit";
console.log("The driver's name is", hacker1);

let hacker2 = "celinepoinson";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log("error");
}
hacker1 = hacker1.split("").reverse().join(" ");
// Iteration 3: Loops
console.log(hacker1.toUpperCase());

let hackers = [hacker1, hacker2];
hackers.sort();
console.log(hackers[0]);
