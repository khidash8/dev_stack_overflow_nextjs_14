import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton />
      <h1>Home sweet home</h1>
    </div>
  );
};

export default Home;
