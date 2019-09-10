
import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash'
import style from './App.css'

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>รายการซื้อสินค้าสำหรับ {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }