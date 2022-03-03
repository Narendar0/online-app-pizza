import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Pizza from '../components/Pizza';
import {useSelector,useDispatch} from "react-redux";
import {getAllPizzas} from '../actions/pizzaAction'


const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const {loading, pizzas ,error} =pizzastate

  useEffect(() =>{dispatch(getAllPizzas())} ,[dispatch])
  return (
   <>
    <Container>
    {
     
        loading ? (<h1>Loading...</h1>)
              : error ? (<h1>Error While Fetching pizzas</h1>)
              : (<Row>

                { pizzas.map((pizza) => (
                 <Col md={4} key = {pizza._id}>
                     <Pizza pizza={pizza} />
            </Col>
                ))}
              </Row>)

        }
        
    </Container>
   </>
  )
}

export default HomeScreen