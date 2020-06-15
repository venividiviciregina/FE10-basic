function multiplyWithLast(x) {

    let last;

    return function (a) {

        if (last === undefined) {
            last = x * a;
            console.warn(last, x, a);
            return last;
        }
        last = last * a;

        console.warn('second ', last, x, a);
        return last;
    }

}
