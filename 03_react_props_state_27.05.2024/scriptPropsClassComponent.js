const root = ReactDOM.createRoot(document.getElementById("root"));

class Student extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <>
        <h1>Name:{name} </h1>
        <h2>Age:{age} </h2>
      </>
    );
  }
}

root.render(
  <>
    <Student name=" Peter" age={39} />
    <Student name=" Mary" age={46} />
    <Student name=" Boris" age={30} />
    <Student name=" Katy" age={25} />
  </>
);
