import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function isSearched(searchTerm) {
    return function (item) {
        // self-defined String.prototype.includes for IE
        if (!String.prototype.includes) {
            String.prototype.includes = function (search, start) {
                if (typeof start !== 'number') {
                    start = 0;
                }

                if (start + search.length > this.length) {
                    return false;
                } else {
                    return this.indexOf(search, start) !== -1;
                }
            };
        }

        return !searchTerm ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

const Table = ({ list, pattern }) =>
    <div className="table">
        {list.records.filter(isSearched(pattern)).map(item =>
            <div key={item.objectID} className="table-row">
                <Container fluid="true">
                    <Row className="show-grid">
                        <Col xs="12" sm="6" md="4">
                            <i className="iconfont">&#xe684;</i>
                            &nbsp;{item.name}
                        </Col>
                        <Col xs="12" sm="6" md="4">
                            {item.email}
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            {item.time}
                        </Col>
                        <Col xs="12" sm="6" md="1">
                            <i className="iconfont">&#xe600;</i>
                        </Col>
                    </Row>
                </Container>
            </div>
        )}
    </div>

export default Table;