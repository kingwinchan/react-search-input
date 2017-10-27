import React from 'react';

const Search = ({ value, onChange }) =>
    <form>
        <i className="iconfont">&#xe681;</i>
        &nbsp;
        <input
            type="text"
            placeholder="search"
            value={value}
            onChange={onChange}
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "search"}
        />
    </form>

export default Search;