export default function Footer({items}) {
  // Jika item kosong
  if(items.length === 0) return <footer className="stats">Daftar belanja masih kosong.</footer>;

  // Jika item ada
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentItems = Math.round((checkedItems / totalItems) * 100);

  return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentItems}%)</footer>;
}