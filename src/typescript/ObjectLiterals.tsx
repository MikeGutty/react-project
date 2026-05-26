interface Person {
  age: number;
  firsName: string;
  lastName: string;
  address: Address
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {

  const person: Person = {
    age: 38,
    firsName: 'Fernando',
    lastName: 'Herrera',
    address: {
      country: 'Canada',
      houseNo: '615'
    }
  }

  return (
    <>
      <h3>{JSON.stringify(person)}</h3>
    </>
  )
}