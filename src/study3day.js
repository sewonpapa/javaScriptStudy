let onload = function () {
    let a = 5;

    if (true) {
        let a = 2;
        console.log('안쪽 a : ' + a);

        let b = 9;
        a = b;
        console.log(a);
    }
    console.log('바깥쪽 a : ' + a);
    console.log(a);

    let name = '임환기';

    console.log(`안녕 ${name}^^`);

    const add = (a, b) => a + b;
    console.log(add(7, 8));
};
