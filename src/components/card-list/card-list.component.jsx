import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((m) => {
          return (
            <div key={m.id}>
              <h1>{m.name}</h1>
              <h2>{m.email}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
