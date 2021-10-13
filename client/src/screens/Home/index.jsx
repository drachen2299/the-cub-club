const Home = (props) => {
  return (
    <section>
      {props.user?.username}
    </section>
  );
};

export default Home;