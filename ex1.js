for (let i = 1; i <= 10; i++) {
    let line = '';
    for (let j = 1; j <= 10; j++) {
        // console.log(`i=${i}, j=${j}, i*j=${i*j}`);
        line += `${i*j}\t`;
    }
    console.log(line);
}