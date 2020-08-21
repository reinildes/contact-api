
calculateAge = (birthDate) => {
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    return today.getMonth() > birthDate.getMonth() ? age : age - 1;
}

class Contact{
    constructor(name, gender, birthDate) {

        if(calculateAge(birthDate) < 18) {
            throw new Error("Not safe for minors!")
        }

        this.name = name
        this.gender = gender
        this.birthDate = birthDate
    }

    getAge = () => {
        return calculateAge(this.birthDate)
    }

};

module.exports = Contact