const fs = require('fs');

class Thing {
    constructor() {
        this.entries = {};
    }

    addEntry(val) {
        let count = ++Thing.count;
        this.entries[count] = `${val}`;
        return count;
    }

    removeEntry(idx) {
        delete this.entries[idx];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    // here we mixed the responsibility of Thing() class
    // saveToFile(fn) {
    //     fs.writeFileSync(fn, toString());
    // }
    //
    // saveFromAPI() {
    //     // some implementations
    // }


}

// APPLY SOLIDS:
class filePersistance {
    constructor() {}
    saveToFile(fn, val) {
        fs.writeFileSync(fn, val);
    }
}

// base the count.
Thing.count = 0;

const a = new Thing();
a.addEntry('9898');
console.log(a.entries);

const p = new filePersistance()
p.saveToFile('ThingToFile', 'some val')
