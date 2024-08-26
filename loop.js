const array = ["N", "a", "t", "a", "l", "i", "a"];
array.forEach((l, index, array) => console.log(
    l,
    index,
    array.length,
    array.length - index - 1,
    array[array.length - index - 1]
));

console.log("-- --- --")

for (const [index, l] of array.entries()) {
    console.log(
        l,
        index,
        array.length,
        array.length - index - 1,
        array[array.length - index - 1]
    )
}

console.log("-- --- --")

let index = 0;
for (const l of array) {
    console.log(
        l,
        index,
        array.length,
        array.length - index - 1,
        array[array.length - index - 1]
    );
    index++;
}

console.log("-- --- --")
{
    let index = 0;
    while (index < array.length) {
        const l = array[index];
        console.log(
            l,
            index,
            array.length,
            array.length - index - 1,
            array[array.length - index - 1]
        );
        index++;
    }
}
console.log("-- --- --")

const dick = {a:1, b:2, c:3};

for(const l of Object.entries(dick)) {
    console.log(l);
}

console.log("-- --- --")

for(const key in dick) {
    console.log([key, dick[key]]);
}

console.log("-- --- --")

for(const l of Object.keys(dick)) {
    console.log([l, dick[l]]);
}