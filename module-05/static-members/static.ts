export {};

// Example 1 - static properties
class Clerk {
  static hiring = 0;

  constructor(
    private name: string,
    private surname: string,
    private title: string,
  ) {
    // classe name + propriedade name
    Clerk.hiring++;
  }
}

const clerkOne = new Clerk('Jhonata', 'Moura', 'Developer');
const clerkTwo = new Clerk('Hugo', 'Santos', 'Teacher');

console.log(Clerk.hiring);

// Example 2 - static methods
class ClerkOne {
  private static hiring = 0;

  constructor(
    private name: string,
    private surname: string,
    private title: string,
  ) {
    ClerkOne.hiring++;
  }

  public static returnHirings() {
    return ClerkOne.hiring;
  }
}

const clerkThree = new ClerkOne('Glaucia', 'Lemos', 'Developer Advocate');
const clerkFour = new ClerkOne('Jurema', 'Lemos', 'Professora');

console.log(ClerkOne.returnHirings());
