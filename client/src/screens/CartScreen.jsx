import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const CartScreen = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={6}>
                <h1>Cart Items</h1>
            </Col>
            <Col md={4}>
                <h1>Payment Info</h1>
            </Col>

        </Row>
    </Container>
    </>
  );
};

export default CartScreen;