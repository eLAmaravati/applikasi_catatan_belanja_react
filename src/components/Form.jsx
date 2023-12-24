import { useState } from "react";

export default function Form({onAddItem}) {
  const [name, setName] = useState('');
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    
    const newItem = { name, qty, checked: false, id: Date.now()};
    onAddItem(newItem);

    setName('');
    setQty(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={ i + 1 } key={ i + 1 }>{ i + 1 }</option>
  ));

  return (
    <form className="form__add" onSubmit={handleSubmit}>
      <p className="form__header">Hari ini belanja apa kita?</p>
      <div className='form__content'>
        <select className='form__jumlah-barang' value={qty} onChange={(e) => setQty(Number(e.target.value))} aria-label='Pilih jumlah barang'>
          {quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." className='form__input-barang' value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit" className='button button--solid'>Tambah</button>
      </div>
    </form>
  );
}