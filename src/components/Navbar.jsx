import React from 'react'
import {NavLink} from 'react-router-dom'

function NavbarItem( {text, link, onclick} ){
    var nb_Item = (
        <div className = 'NavbarItem' onClick = {onclick}>
            <NavLink exact to = { link }> { text } </NavLink>
        </div>
    )

    return nb_Item
}

export const Navbar = () => {
    return (
        <div className = 'Navbar'>
            <NavbarItem text = 'HOME' link = '/'/>
            <div style ={{ backgroundColor: 'white', height: 60, width: '1px', border: 'solid 2px white' ,borderRadius: 10, margin: '0 15px'}} ></div>
            <NavbarItem text = 'SORTING ALGRITHMS' link = '/sorting-algorithms'/>
            <NavbarItem text = 'MATRIX TO TREE' link = '/matrix-to-tree'/>
            <NavbarItem text = 'GRAPH TO MATRIX' link = '/graph-to-matrix'/>
        </div>
    )
}

NavbarItem.defaulProps = {
    text: "link",
    link: '/',
    onclick: () => {console.log( 'clicked', this.text)}
}
