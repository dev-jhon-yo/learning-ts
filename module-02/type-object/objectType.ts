/* eslint-disable prettier/prettier */
export {};

// Example 1 - Basic example of using Type Object
const people = {
  name: 'Jhonata',
  surname: 'Moura',
  year: 21,
  role: 'Developer',
};

console.log(people);

// Example 2 - object as function parameters (they can be anonymous)
function onboardingOne(functionary: { name: string }) {
  return 'Welcome' + functionary.name;
}

console.log(onboardingOne({ name: 'Jhonata Moura' }));

// Example 3 - named object
interface People {
  name: string;
  role: string;
}

function onboardingTwo(people: People) {
  return (
    'Welcome ' +
    people.name +
    '!' +
    ' Your role here at the company will be ' +
    people.role +
    '.'
  );
}

console.log(onboardingTwo({ name: 'Jhonata Moura', role: 'Developer' }));

// Exampple 4 - object as type alias
type PeopleThree = {
  name: string;
  role: string;
  language: string;
};

function onboardingThree(people: PeopleThree) {
  return (
    'Welcome ' +
    people.name +
    '!' +
    ' Your role here at the company will be ' +
    people.role +
    '.' +
    ' You will work with language ' +
    people.language +
    '.'
  );
}

console.log(
  onboardingThree({
    name: 'Jhonata Moura',
    role: 'Developer',
    language: 'JavaScript/Typescript',
  }),
);

// Example 5 - using optional in object
interface PessoaFour {
  name: string;
  role: string;
  language: string;
  email?: string;
}

function onboardingFour(people: PessoaFour) {
  return (
    'Welcome ' +
    people.name +
    '!' +
    ' Your role here at the company will be ' +
    people.role +
    '.' +
    ' You will work with language ' +
    people.language +
    '.'
  );
}

console.log(
  onboardingFour({
    name: 'Jhonata Moura',
    role: 'Developer',
    language: 'JavaScript/Typescript',
  }),
);

// Example 6 - 'readonly' property (if you want to prohibit devs from modifying a certain object, use ' //readonly)
interface PeopleFive {
  name: string;
  role: string;
  language: string;
  readonly email: string;
}

function onboarding05(people: PeopleFive) {
  return (
    'Welcome ' +
    people.name +
    '!' +
    ' Your role here at the company will be ' +
    people.role +
    '.' +
    ' You will work with language ' +
    people.language +
    '.' +
    ' Your email will be ' +
    people.email
  );
}

console.log(
  onboarding05({
    name: 'Jhonata Moura',
    role: 'Developer',
    language: 'JavaScript/Typescript',
    email: 'dev.jhon.yo@gmail.com',
  }),
);

// Example 7 - types of extensions (inheritance)
interface Mother {
  name: string;
}

interface Father {
  surname: string;
}

interface Child extends Mother, Father {
  year: number;
}

const child: Child = {
  name: 'Claudia',
  surname: 'Moura',
  year: 21,
};

console.log(child);

// Example 8 - Types of Intersections
interface Dog {
  type: string;
}

interface Cat {
  type: string;
}

type Animal = Dog & Cat;

// Example 9 - Generic Objects
type User = {
  name: string;
  email: string;
};

type Admin = {
  name: string;
  email: string;
  admin: true;
};

const user: User = {
  name: 'Glaucia Lemos',
  email: 'something@gmail.com',
};

const admin: Admin = {
  name: 'Jhonata Moura',
  email: 'dev.jhon.yo@gmail.com',
  admin: true,
};

function acessSystem<T>(user: T): T {
  return user;
}

console.log(acessSystem<User>(user));
console.log(acessSystem<Admin>(admin));
