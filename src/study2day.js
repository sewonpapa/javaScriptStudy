let onload = function () {
    let a = 1 + 2;
    console.log(a);

    a = 1 + 2 - (3 * 4) / 4;
    console.log(a);

    let b = 1;
    b++;
    ++b;
    console.log(b);
    console.log(b++);
    console.log(++b);

    let c = 1;
    c--;
    console.log(c);

    let d = 1;
    d += 3;
    console.log(d);

    const e = !true;
    console.log(e);
    const f = !false;
    console.log(f);

    let g = true && true;
    console.log(g);
    g = true && false;
    console.log(g);
    g = false && true;
    console.log(g);

    let h = true || false;
    console.log(h);
    t = false || true;
    console.log(h);
    t = true || true;
    console.log(h);
    h = false || false;
    console.log(h);

    const i = !((true && true) || (true && false) || !false);
    console.log(i);

    let j = 1;
    let k = 1;
    let equals1 = j === k;
    console.log(equals1);

    let l = 1;
    let m = '1';
    let equals2 = l === m;
    console.log(equals2);

    let equals3 = j == k;
    console.log(equals3);

    let equals4 = l == m;
    console.log(equals4);

    let n = 0;
    let o = false;
    let equals5 = n == o;
    console.log(equals5);
    let equals6 = n === o;
    console.log(equals6);

    let p = null;
    let q = undefined;
    let equals7 = p == q;
    console.log(equals7);
    let equals8 = p === q;
    console.log(equals8);

    const equals9 = 'a' !== 'b';
    console.log(equals9);

    const equals10 = '1' !== 1;
    console.log(equals10);

    const equals11 = '1' != 1;
    console.log(equals11);
};
