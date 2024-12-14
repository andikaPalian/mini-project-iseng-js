function whoIsPay(names) {
    const randomName = Math.floor(Math.random() * listName.length);
    const name = names[randomName];
    return `Yang harus membayar adalah ${name}`;
};

const listName = ["Nopal", "Shafly", "Rafly", "Imran", "Arnov", "Moren", "Andika"];
console.log(whoIsPay(listName));