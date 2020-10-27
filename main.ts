import _ from "lodash";

const members: Member[] = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 51 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' }
];

interface Member {
    name: string,
    age?: number
}

function getAge(member: Member) {
    return member.age;
}


function getName(member: Member) {
    return member.name;
}

// 1. Get array of first names of everyone
function getMemberNamesArray(members: Member[]) {
    return _.map(members, getName)
}

// 2. Make everyone's last names in UPPERCASE in given array of objects
function capitializeLastName(members: Member[]) {
    return _.map(members, (member) => {
        let [fName, lName] = _.split(member.name, ' ');
        lName = _.upperCase(lName);
        member.name = _.join([fName, lName], ' ');
        return member;
    })
}

// 3. Get entries where age is between 41-60
function getMembersBetweenAge(memmbers: Member[], minAge: number, maxAge: number) {
    return _.find(members, member => getAge(member) >= minAge && getAge(member) <= maxAge)
}

// 4. Get average age
function getAverageAgeOfMembers(members: Member[]) {
    return _.reduce(members, (sum, { age }) => {
        return age ? sum + age : sum;
    }, 0) / members.length;
}

// 5. Get Person with maximum age
function getPersonWithMaxAge(members: Member[]) {
    return _.last(_.filter(_.sortBy(members, "age"), "age"));
}

// 6. Divide persons in three groups, result should look like
// {
//   'young': [],
//   'old': [],
//   'noage': []
// }
// Less than 35yrs is young, above 35 is old
function groupMembersByAgeGroup(member: Member[], age: number) {
    return _.groupBy(members, ({ age: mAge }) => {
        if (mAge) {
            return mAge <= age ? "young" : "old"
        }
        return "noage";
    });
}

// 7. add a new member to same members array instance at index 2
function addMemberInProvidedIndex(members: Member[], index: number, member: Member) {
    members.splice(index, 0, member);
    return members;
}

//8. extract first and second element using destructing
function getFirstTwoMembers(members: Member[]) {
    let [member1, member2] = members;
    return [member1, member2];
}

// 9. Create a new array instance adding a new member at index 0,
function addMemmberAndGetNewArray(members: Member[], member: Member) {
    return [member, ...members];
}

// 10, 11, 12, 13
function structuringAndDestructuring(members: Member[]) {
    const memberObject = members[0];
    // Extract properties of object using destructuring
    let { name, age } = memberObject;

    // Rename extracted property of object while destructing
    let { name: firstName, age: century } = memberObject;

    // Destructure any property of an object and use spread operator to get remaining properties in an object
    let { name: mName, ...other } = memberObject;

    // Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
    let newMember = { designation: "Software Engineer", ...memberObject };
}

// 14. Use reduce function on array and object
// reduce function on array
function getAverageAgeOfJuniorMembers(members: Member[]) {
    return _.reduce(
        members,
        // sernior member are whos age is morethan 35
        (sum, member) => (member.age < 35 ? member.age + sum : sum),
        0
    ) / members.length;
}

// reduce function on object
function swapPropertiesofMember(members: Member[]) {
    const member = members[0];
    return _.reduce(
        member,
        (result, value, key) => {
            result[value] = key
            return result;
        },
        {}
    );
}
