import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Pizza from '../components/Pizza';
import {useSelector,useDispatch} from "react-redux";
import {getAllPizzas} from '../actions/pizzaAction'
import Loader from '../components/Loader';
import Error from '../components/Error';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer)
  const {loading, pizzas ,error} =pizzastate

  useEffect(() =>{dispatch(getAllPizzas())} ,[dispatch])
  return (
   <>
    <Container>
    {
     
        loading ? (<Loader/>)
              : error ? (<Error>Error while fetching pizzas{error}</Error>)
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