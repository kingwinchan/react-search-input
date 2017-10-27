import React from 'react';

function isSearched(searchTerm) {
    return function (item) {
        return !searchTerm ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

const Table = ({ list, pattern }) =>
    <div className="table">
        {list.records.filter(isSearched(pattern)).map(item =>
            <div key={item.objectID} className="table-row">
                <span style={{ width: '40%' }}>
                    <i className="iconfont">&#xe684;</i>
                    &nbsp;{item.name}
                </span>
                <span style={{ width: '40%' }}>
                    {item.email}
                </span>
                <span style={{ width: '20%' }}>
                    {item.time}
                </span>
                <span style={{ width: '10%' }}>
                    <i className="iconfont">&#xe600;</i>
                </span>
            </div>
        )}
    </div>

export default Table;