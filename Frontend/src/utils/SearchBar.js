import { Button } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBar = ({ keyword, onChange }) => {
  const BarStyle = { width: "17rem", background: "#F0F0F0", border: "none", padding: "0.5rem", height: '2.5rem', borderRadius: "10px" };
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = () => { 

  }
  const handleClearSearch = () => {
    setSearchQuery('');
  };
  return (
    <form style={{ display: 'flex', right: 0 }}>
      <input
        style={{ margin: 0, height: '2vmax', width: '18vmax', overflow: 'hidden', textOverflow: 'ellipsis' }}
        placeholder="Search Your Restaurant"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button
        type="button"
        style={{
          backgroundColor: 'gray',
          color: 'whitesmoke',
          width: '60px',
          margin: 0,
          marginLeft: '5px',
          height:'2.4vmax'
        }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
      <Button
        type="button"
        style={{
          backgroundColor: 'gray',
          color: 'whitesmoke',
          width: '90px',
          margin: 0,
          marginLeft: '5px',
          height: '2.4vmax'
        }}
        onClick={handleClearSearch}
      >
        Clear
      </Button>
    </form>
  );
}
export default SearchBar;