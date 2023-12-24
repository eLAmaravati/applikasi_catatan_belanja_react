import { useState } from 'react';
import Form from './components/Form';
import GroceryList from './components/Grocery';
import Footer from './components/Footer';

const groceryItems = [
      {
        id: 1,
        name: 'Kopi Bubuk',
        qty: 2,
        checked: true,
      },
      {
        id: 2,
        name: 'Gula Pasir',
        qty: 5,
        checked: false,
      },
      {
        id: 3,
        name: 'Air Mineral',
        qty: 3,
        checked: true,
      },
    ];


export default function App() {
  const [items, setItems] = useState(groceryItems);

  // Untuk mengelola ketika item ditambahkan
  function handleAddItem(item) {
    setItems([...items, item]);
  }

  // Untuk mengelola delete item
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Untuk mengelola checked
  function handleCheckedItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked }
    : item ))
  }

  // Menghapus daftar belanja
  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onCheckedItem={handleCheckedItem} onClearItems={handleClearItems}/>
        <div className="grocery">
        </div>
          <Footer items={items}/>
    </div>
  );
}
