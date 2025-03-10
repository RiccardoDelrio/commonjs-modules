const namefull = require('./name')
const hobbies = require('./hobbies')


const peopleObj = () => {
    const fullname = namefull("riccardo", "delrio")
    const hobbie = hobbies("dormire", "mangiare", "giocare")
    const people = {
        fullname,
        hobbie
    }
    return people
}
console.log(peopleObj());
