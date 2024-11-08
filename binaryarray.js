'use strict';

class BinaryArray {
    #binaryArray = undefined;
    length = undefined;

    constructor(...numbers) {
        this.#binaryArray = [];
        this.length = 0;

        for (const n of numbers) {
            this.add(n);
        }
    }

    add(n) {
        if (typeof(n) !== 'number') {
            throw new TypeError();
        }

        if (this.length === 0) {
            this.#binaryArray.push(n);
        }
        else {
            let insertIndex = this.#_closestIndexOf(n);
            const closestVal = this.at(insertIndex);

            if (closestVal < n) {
                insertIndex += 1;
            }

            this.#binaryArray.splice(insertIndex, 0, n);
        }

        this.length += 1;
    }

    at(i) {
        return this.#binaryArray.at(i);
    }

    #_closestIndexOf(n, min = 0, max = this.length - 1) {
        const mid = Math.floor((max + min) / 2);
        const val = this.at(mid);

        if (val === n) {
            return mid;
        }
        else if (val < n) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }

        if (min > max) {
            return mid;
        }
        else {
            return this.#_closestIndexOf(n, min, max);
        }
    }

    find(fn) {
        const i = this.#_findIndex(fn);
        return (i > 0) ? this.at(i) : undefined;
    }

    findIndex(fn) {
        return this.#_findIndex(fn);
    }

    #_findIndex(fn, min = 0, max = this.length - 1) {
        const mid = Math.floor((max + min) / 2);
        const val = this.at(mid);
        const res = fn(val);

        if (res === 0) {
            return mid;
        }
        else if (res < 0) {
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }

        if (min > max) {
            return -1;
        }
        else {
            return this.#_findIndex(fn, min, max);
        }
    }

    includes(n) {
        const i = this.#_closestIndexOf(n);
        return (this.at(i) === n);
    }

    indexOf(n) {
        const i = this.#_closestIndexOf(n);
        return (this.at(i) === n) ? i : -1;
    }

    join(separator) {
        return this.#binaryArray.join(separator);
    }

    toString() {
        return this.join();
    }
}

export { BinaryArray };
