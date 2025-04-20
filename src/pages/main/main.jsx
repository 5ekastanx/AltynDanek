import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../home/home.jsx'
import Fructs from '../fructs/fructs.jsx'
import Vegetables from '../vegetables/vegetables.jsx'
import Driedfruits from '../driedfruits/driedfruits.jsx'
import Card from '../../components/card/card.jsx'
import Basket from '../../components/basket/basket.jsx'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/fruits' element={<Fructs/>} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/driedfruits" element={<Driedfruits />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/fructs/:id" element={<Card />} /> 
            <Route path="/vegetables/:id" element={<Card />} /> 
        </Routes>
    </div>
  )
}

export default Main
