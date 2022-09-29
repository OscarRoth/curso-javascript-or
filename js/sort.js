const sorttest = [1, 5, 8, 2, 7];

let continuar = true;

while (continuar != true) {
    for (i = 0; i < 4; i++) {
        if (sorttest[i] > sorttest[i + 1]) {
            const right = sorttest[i + 1]
            const left = sorttest[i];
            sorttest[i] = right;
            sorttest[i + 1] = left;
            //console.log(sorttest[i + 1]);
            //console.log(i);
        }
        //console.log(sorttest);
        console.log(sorttest);
        //console.log(i);
    }
};

