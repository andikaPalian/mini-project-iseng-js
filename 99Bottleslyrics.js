let bottle = 99;
while (bottle >= 1) {
    console.log(`${bottle} bottles of beer on the wall, ${bottle} bottles of bear`);
    bottle--;
    console.log(`Take one down, pass it around, ${bottle} bottles of beer on the wall`);
    if (bottle === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer");
    }
};