const reduxStore = {
  persons: [
    {
      name: 'Maximus Arelius',
      occupation: 'Gladiator',
      rank: 1
    }
  ]
};

Object.freeze(reduxStore);

const getReduxState = () => JSON.parse(JSON.stringify(reduxStore));

function funcA() {
  const { persons } = getReduxState();
  console.log(persons[0]);
  persons[0].rank = 10;
  console.log(persons[0]);
}

function funcB() {
  const { persons } = getReduxState();
  console.log(persons[0]);
  persons[0].rank = 10;
  console.log(persons[0]);
}
funcA()
funcB()

console.log('the rank is', reduxStore.persons[0]);
