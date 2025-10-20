import '@/styles/index.css';

export function Header() {
  return (
    <div className="header">
      <h1 className="header-item-1">Dashboard</h1>
      <div className="header-item-2">
        <input id="search" placeholder="Search" type="search" />
        <button>Add New</button>
      </div>
    </div>
  );
}
