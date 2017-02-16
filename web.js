class Person {


    constructor(name) {
        this._name = name;

    }


}

class Student extends Person {

    constructor(name) {
        super(name);

        this.daysAb = [];
        this.daysLate = [];
    }

    addLateDays(day) {
        this.daysLate.push(day);
    }

    get LateDays() {
        return this.daysLate;
    }

}

const Malik = new Student('Malik');
Malik.addLateDays('Today');
console.log(Malik.LateDays);