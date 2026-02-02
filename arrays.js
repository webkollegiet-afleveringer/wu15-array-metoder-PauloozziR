let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 

// --- opgave 1 ---
let newNumbers = [numbersArray.filter((element) => element > 20)];
console.log("Opgave 1", newNumbers);

// --- opgave 2 ---
let newCats = catsArray.push("Sniffles");
console.log("Opgave 2", catsArray);

// --- opgave 3a ---
let nameCheck = dogsArray.includes("Trixie");
console.log("Opgave 3a", nameCheck);

// --- opgave 3b ---
nameCheck = dogsArray.includes("Baxter");
console.log("Opgave 3b", nameCheck);

// --- opgave 4a  ---
nameCheck = catsArray.find(( element ) => element === "Bagheera");
console.log("Opgave 4a", nameCheck);

// --- opgave 4a ---
nameCheck = catsArray.find(( element ) => element === "Salem");
console.log("Opgave 4b", nameCheck);

// --- opgave 5 ---
let newNumberArray = [];
numbersArray.forEach((numbersArray) => {
    newNumberArray.push(numbersArray * 3);
});
console.log("Opgave 5", newNumberArray);

// --- opgave 6 ---
console.log("Opgave 6", dogsArray.join(""));

// --- opgave 7 ---
console.log("Opgave 7", );