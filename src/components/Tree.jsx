import React from 'react'
import { useState } from 'react';
//import MatrixToTree and call at line65
var MATRIX_ = []
function MatrixRow( {i, text} ){
    var row = [];
    let k = parseInt(i);
    let checkboxHeight = (window.innerHeight - 200) / i - 5;
    let checkboxWidth = (window.innerWidth -500 )/ i - 5;

    row.push(<p key='text' style={{ fontFamily: 'monospace', textAlign: 'center', width: checkboxWidth, fontSize: '1.2rem' }}> {text} </p>)
    while (k--){
        let color = k % 2 ? 'rgba(0, 255, 247, 0.1)' : 'rgba(0, 255, 0, 0.2)';
        let display_ = (text === (i - k - 1)) ? 'hidden' : 'visible';
        color = text === (i - k - 1) ? 'rgb(0, 0, 0 , 0.5)' : color;
        row.push(
            <div key={k} style = {{ borderRadius: '5px', visibility: display_, backgroundColor: color, width: checkboxWidth, height: checkboxHeight, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <input  id = { text.toString() +  '_' + (i - k  - 1).toString() } type = 'checkbox' style={{ height: '80%', width:'80%', backgroundColor: color}}/>
            </div> 
        ) 
    }
    return(
        <div className='MatrixRow' style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {row}
        </div>
    )
}

function Matrix( {i} ){
    var matrix = [];
    let k = i;
    while (k--){
        matrix.push(<MatrixRow text = {i - k - 1} i = {i} key = {k}/>)
    }

    return(
        <div className='Matrix' style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {matrix}
        </div>
    )
}

export const Tree = () => {
    const [matrixSize, setmatrixSize] = useState(2)
    function Construct(){
        var nodes = document.querySelectorAll('input');
        let matrix = new Array(matrixSize)
        for(let i = 0; i < matrixSize; i++) {
            matrix[i] = new Array(matrixSize);
            matrix[i].fill(0)
        }
        nodes.forEach((node, i) => {
            if(node.checked) {
                matrix[Math.floor(i / matrixSize)][i % matrixSize] = 1;
                console.log(Math.floor(i / matrixSize), i % matrixSize, i, matrixSize)
            }
        })
        MATRIX_ = matrix
        console.log(MATRIX_)
    }
    return (
        <div className='Tree'>
            <div className = 'ButtonDiv'>
                <button className='Button'> TEXT INPUT </button>
                <button className='Button' onClick = {() => {if(matrixSize < 30) setmatrixSize(matrixSize + 1); else console.log('Use text input for more than 30 vertices')}}> ADD </button>
                <button className='Button' onClick = { () => Construct()}> GO </button>
            </div>
            <Matrix i = {matrixSize}/>
        </div>
    )
}