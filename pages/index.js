import Link from "next/link";
import faker from "faker";

const Index = ({ users }) => {
  console.log("users :>> ", users);
  return (
    <div>
      <h1>User selection page</h1>
      <p>Select a user</p>
      <ul>
        {users.map(({ name }) => {
          return <li key={name}>
            <Link href={`/user/login/${name}`}>{name}</Link>;
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  // The name will be generated at build time only
  const name = faker.name.findName();

  return {
    props: { users: [{ name }] },
  };
}
