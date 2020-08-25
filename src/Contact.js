
calculateAge = (birthDate) => {
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    return today.getMonth() > birthDate.getMonth() ? age : age - 1;
}

class Contact{
    constructor(name, gender, birthDate, enabled = true) {

        if(new Date() < birthDate) {
            throw new Error("Invalid Date. Make sure BirthDate is less than today!")
        }

        if(calculateAge(birthDate) < 18) {
            throw new Error("Not safe for minors!")
        }

        this.name = name
        this.gender = gender
        this.birthDate = birthDate
        this.enabled = enabled
    }

    getAge = () => {
        return calculateAge(this.birthDate)
    }

    equals = (contact) => {
        return contact.name === this.name &&
            contact.gender === this.gender &&
            contact.birthDate.toString() === this.birthDate.toString()
    }

};

module.exports = Contact