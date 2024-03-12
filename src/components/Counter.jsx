import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
    background: #9badff;
    border-radius: 3px;
    border: 2px solid #617dfb;
    color: #222;
    margin: 0 .5em;
    padding: 10px 20px;
    font-size: 30px;
`
const Container=styled.div`
    width: 450px;
    height: 200px;
    margin: 40px auto;
    padding: 20px 40px;
    border: 10px groove #617dfb;
`

const Counter = () => {
    const [count, setCount]=useState(0)

    const increase= () => {
        setCount(count+1)
    }
    const decrease= () => {
        setCount(count-1)
    }
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </Container>
    );
};

export default Counter;