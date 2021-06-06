import React, { useState } from 'react'
import { SelectStars } from '../styles/componensts'

const Starts = () => {
    const [starts, setStart] = useState(5)
    return (
        <SelectStars selected={starts}>
            <span onClick={() =>setStart(1)}>★</span>
            <span onClick={() =>setStart(2)}>★</span>
            <span onClick={() =>setStart(3)}>★</span>
            <span onClick={() =>setStart(4)}>★</span>
            <span onClick={() =>setStart(5)}>★</span>
        </SelectStars>
    )
}

export default Starts 
