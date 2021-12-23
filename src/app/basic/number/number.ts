

export function increment(num: number) {

    if (num > 100) {
        return 100;
    }

    return ++num;
}