import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { useSearch } from "@/hooks";

export function Header() {
  const { searchText, setSearchText } = useSearch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <Link to="/">Dashboard</Link>
      <div>
        <form role="search">
          <label htmlFor="search">Search users:</label>
          <input
            id="search"
            type="search"
            value={searchText}
            onChange={handleChange}
            placeholder="Search"
          />
          <button
            onClick={e => e.preventDefault()}
            type="submit"
            aria-label="Search"
          >
            🔍
          </button>
        </form>
        <Link to="/adduser">Add New</Link>
      </div>
    </div>
  );
}
