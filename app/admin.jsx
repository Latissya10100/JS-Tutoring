import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Jumbotron,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Card,
    CardTitle,
    CardText,
    Table
} from 'reactstrap'

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Sidelist = [1,2,3];
        const People = [
            { name: "Dan", age: 34, gender: 'Male', k: 1},
            { name: "Dan", age: 34, gender: 'Male', k: 2},
            { name: "Dan", age: 34, gender: 'Male', k: 3}
        ];
        return <div>
            <Row>
                <Col md={12}>
                    <Navbar color={"faded"}>
                        <NavbarBrand href="/">User Admin Dash</NavbarBrand>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <ListGroup>
                        {Sidelist.map((listItem) => <ListGroupItem key={listItem}>{`Page ${listItem}`}</ListGroupItem> )}
                    </ListGroup>
                </Col>


                <Col md={10}>
                    <Row>
                        <Col md={12}>
                            <Jumbotron>
                                <h1>Admin</h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        {Sidelist.map((item) => <Col key={item}>
                            <Card block>
                                <CardTitle>{`Card ${item}`}</CardTitle>
                                <CardText>Pretty kool</CardText>
                            </Card>
                        </Col>)}
                    </Row>
                    <Row>
                        <Table>
                            <thead>
                                <tr>
                                    <td>Name</td><td>Age</td><td>Gender</td>
                                </tr>
                            </thead>
                            <tbody>
                            {People.map((p) => <tr scope={'row'} key={p.k}>
                                <td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td>
                            </tr>)}
                            </tbody>
                        </Table>
                    </Row>
                </Col>
            </Row>
        </div>
    }
}