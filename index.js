// Q1

class Movie {
    constructor(title, studio, rating='PG') {
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(Arr) {
        const newArr = []
        Arr.forEach((element) => {
            if(element.rating==='PG') {
                newArr.push(element)
            } 
        })
        return newArr
    }
}

let M1 = new Movie('Casino Royale','Eon Productions','PG13')
let M2 = new Movie('Iron Man','Marvel Studios','PG')
console.log(M1.getPG([M1,M2]))

// Q2

class Circle {
    radius = 1.0
    color = "red"
    constructor(radius, color) {
        this.radius = radius ? radius : this.radius
        this.color = color ? color : this.color
    }
    getRadius() {
        return this.radius
    }
    getColor() {
        return this.color
    }
    setRadius(radius) {
        this.radius = radius
    }
    setColor(color) {
        this.color = color
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    getCircumference() {
        return 2 * Math.PI * this.radius
    }
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`
    }
}

const circle = new Circle(2.0, 'blue')
circle.setRadius(4.0)
circle.setColor('yellow')
console.log('radius',circle.getRadius())
console.log('color',circle.getColor())
console.log('area',circle.getArea())
console.log('circumference',circle.getCircumference())
console.log(circle.toString())

// Q3

class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        this.fName, this.mName, this.address, this.city, this.mailId, this.ph_number, this.role = ""
        this.skills = []
        this.hobbies = []
    }
    setParentsInfo(fName, mName) {
        this.fName = fName
        this.mName = mName
    }
    setContactInfo(address, city, mailId, ph_number) {
        this.address = address
        this.city = city
        this.mailId = mailId
        this.ph_number = ph_number
    }
    setQualifications(role, skillsArr) {
        this.role = role
        skillsArr.forEach((element)=>{
            this.skills.push(element)
        })
    }
    setInterests(hobbiesArr) {
        hobbiesArr.forEach((element)=>{
            this.hobbies.push(element)
        })
    }
    getPersonInfo() {
        return {'name':this.name,'age':this.age,'gender':this.gender}
    }
    getParentsInfo() {
        return {'father-name':this.fName, 'mother-name':this.mName}
    }
    getContactInfo() {
        return {'address':this.address,'city':this.city,'mailId':this.mailId,'phone-number':this.ph_number}
    }
    getQualifications() {
        return {'role':this.role,'skills':this.skills}
    }
    getInterests() {
        return {'hobbies':this.hobbies}
    }
}

const boo = new Person('Deebhika', 20, 'Female')
boo.setParentsInfo('Kumaran','Jessy')
boo.setContactInfo('14, Big Street', 'Nagai', 'deebhika04@gmail.com', '+91 9498050916')
boo.setQualifications('DS student', ['Python', 'Flask', 'AWS'])
boo.setInterests(['Books', 'Table Tennis', 'Chess'])
console.log(boo.getPersonInfo())
console.log(boo.getParentsInfo())
console.log(boo.getContactInfo())
console.log(boo.getQualifications())
console.log(boo.getInterests())

// Q4

class Uber {
    constructor(baseFare, costPerKm, costPerMin) {
        this.baseFare = baseFare
        this.costPerKm = costPerKm
        this.costPerMin = costPerMin
        this.totalPrice = 0
    }

    calcPriceBeforeRide(distance) {
        const distanceCost = distance * this.costPerKm
        this.totalPrice += this.baseFare + distanceCost 
        return this.totalPrice
    }

    calcPriceAfterRide(estTime, timeTaken) { 
        if (estTime < timeTaken) {
            const timeCost = (timeTaken-estTime) * this.costPerMin
            this.totalPrice += timeCost
        }
        return this.totalPrice
    }
}

const uber = new Uber(5, 15, 2)
console.log("Total price before ride:", uber.calcPriceBeforeRide(10))
console.log("Total price after ride:", uber.calcPriceAfterRide(20, 50))
