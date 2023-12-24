
export default function Item({item, onDeleteItem, onCheckedItem}) {
  return(
    <li key={item.id} className='list__item'>
          <input type="checkbox" id={`${item.name.replace(/\s/g, '').toLowerCase()}${item.id}`} name={`${item.name.replace(/\s/g, '').toLowerCase()}${item.id}`}  className='list__input' checked={item.checked} onChange={() => onCheckedItem(item.id)}/>
          <label htmlFor={`${item.name.replace(/\s/g, '').toLowerCase()}${item.id}`} className='list__label'>{item.qty} {item.name}</label>
          <span className="checkmark"></span>
          <button onClick={() => onDeleteItem(item.id)} className='button button--delete'>✖</button>
    </li>
  );
}