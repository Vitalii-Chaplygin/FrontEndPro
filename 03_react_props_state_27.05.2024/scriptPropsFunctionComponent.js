const root = ReactDOM.createRoot(document.getElementById("root"));

const Student = ({ name, age }) => {
  // console.log(name, age);
  // const { name, age } = props;
  return (
    <>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
    </>
  );
};
root.render(
  <>
    <Student name=" Peter" age={36} />
    <Student name=" Mary" age={46} />
    <Student name=" Boris" age={30} />
    <Student name=" Katy" age={25} />
  </>
);
