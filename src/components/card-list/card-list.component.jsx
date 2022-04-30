import './card-list.style.css'

import Card from '../card/card.component';
import { Component } from "react";

class CardList extends Component {
  render() {
    // console.log(this.props.monsters);
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}
export default CardList;
