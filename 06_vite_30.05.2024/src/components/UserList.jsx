//rce - snipet dlya sozdaniya classa componenta

import { Component } from "react";
import User from "./User";

export class UserList extends Component {
  //1   для работы с локальным состоянием в классовом компоненте нужно сначала создать конструктор
  //который принимает в качестве параметров пропсы через ключевое слово супер
  //2  далее мы можем описывать внутри этого конструктора всё что угодно в том числе и локальное состояние
  //в классовом компоненте локальное состояние может быть только одно в отличие от функционального компонента в котором может быть несколько
  //локальное состояние пишется через ключевое слово This , в нём мы описываем стартовое состояние

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, isLoading: false });
      });
  }

  render() {
    const { users, isLoading } = this.state;

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }

    // return (
    //   <div>
    //     {users.map((user) => (
    //       <p key={user.id}>{user.name}</p>
    //     ))}
    //   </div>
    // );

    return isLoading ? (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      // <div>Loading...</div>
      <div>
        {users.map((user) => (
          <User key={user.id} person={user} />
          // <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default UserList;
