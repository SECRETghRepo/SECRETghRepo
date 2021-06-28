import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------CANVAS CODE--------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
// var nodeRadius = 40
// var nodes = []
// var selctedNode = -1;


// function MakeNodesDragable(){
//     canvas.addEventListener('mousedown', (e) => {
//         console.log('Dragging node')
//         nodes.forEach((node, index) => {
//             if((e.clientX - node.x) * (e.clientX - node.x) + (e.clientY - node.y) * (e.clientY - node.y) < nodeRadius * nodeRadius) {
//                 selctedNode = index;
//                 console.log('Dragging ', node.data);
//             }
//     }
//         )});
//     function refreshCanvas(){
//         c.clearRect(0, 0, canvas.width, canvas.height)
//         nodes.forEach((a) => {
//             a.children.forEach((ChildNode) => {
//                 c.beginPath()
//                 c.moveTo(a.x, a.y);
//                 c.lineWidth = 3;
//                 c.lineTo(ChildNode.x, ChildNode.y);
//                 c.stroke();
//                 c.lineWidth = 1;
//                 c.closePath();
//             })
//         })
//         nodes.forEach((node) => node.draw());
//     }
//     canvas.addEventListener('mousemove', (e) => {
//         if(selctedNode != -1){
//             nodes[selctedNode].x = e.clientX
//             nodes[selctedNode].y = e.clientY
//             refreshCanvas();
//         }
//     })
        
//     canvas.addEventListener('mouseup', () => {
//         if(selctedNode != -1) {
//             nodes[selctedNode].draw()
//             selctedNode = -1;   
//         }
//     })
// }

// function Node(x, y, data = 0, color = 'red'){
//     this.x = x;
//     this.y = y;
//     this.data = data;
//     this.children = [];
//     this.draw = (data = this.data, colorNew = color) => {
//         c.beginPath();
//         c.arc(this.x, this.y, nodeRadius, 0, Math.PI * 2);
//         c.fillStyle = colorNew;
//         c.stroke();
//         c.fill();
//         c.font = '20px monospace'
//         c.fillStyle = 'black';
//         c.fillText(data, this.x - 15, this.y + 10)
//         c.closePath();
//         window.scrollTo({
//           top: window.innerHeight,
//           behavior: 'smooth'
//         });
//     }
//   }
// function MatrixToTree(){
//     var nodeRadius = 40;
//     var leaves = 0; // width
//     var depth = 0; // height
//     var tree = [];
            
//     var vertex = 5;
//     function CreateMatrix(){
//       //take string args and convert to matrix
//       tree = [[
//           //  0  1  2  3  4  5  6  7  8  9  a  b  c DATA Depth
//               0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51,   0 // 0
//           ], [
//               0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 52,   0 // 1
//           ], [
//               0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 53,   0 // 2
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 54,   0 // 3
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55,   0 // 4
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 56,   0 // 5
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57,   0 // 6 
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 58,   0 // 7
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59,   0 // 8
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60,   0 // 9
//           ], [
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61,   0 // a
//           ], [ 
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62,   0 // b
//           ], [ 
//               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63,   0 // b
//       ]];


//       //EXAMPLE 2:
//       tree = [[
//           0, 1, 1, 0, 0 ,51, 0
//       ],[
//           0, 0, 0, 1, 1, 52, 0
//       ],[
//           0, 0, 0, 0, 0, 53, 0
//       ],[
//           0, 0, 0, 0, 0, 54, 0
//       ],[
//           0, 0, 0, 0, 0, 55, 0
//       ]];

//     //   tree = [[
//     //       0, 1, 1, 0, 0 ,51, 0
//     //   ],[
//     //       0, 0, 1, 0, 0, 52, 0
//     //   ],[
//     //       0, 0, 0, 1, 0, 53, 0
//     //   ],[
//     //       0, 0, 0, 0, 1, 54, 0
//     //   ],[
//     //       0, 0, 0, 0, 0, 55, 0
//     //   ]];
//     }
//     function CountLeaves(){
//         loop1:
//         for(let i = 0; i < vertex; i++){
//             for(let j = 0; j < vertex; j++){
//                 if(tree[i][j] == 1){
//                     continue loop1;
//                 } 
//             }
//             leaves++;
//         }
//     }

//     function CalcDepth(){
//         for (let i = 0; i < vertex; i++){
//             let currNodeDepth = 1;
//             var child = i;
//             while (child != 0) {
//                 for (let j = 0; j < vertex; j++){
//                     //No parent case
//                     if (tree[j][child] == 1) {
//                         child = j;
//                         break;
//                     }
//                 }
//                 currNodeDepth++;
//             }
//             tree[i][vertex + 1] = currNodeDepth;
//             console.log('Depth of', tree[i][vertex], 'is', tree[i][vertex + 1]);
//             depth = Math.max(currNodeDepth, depth);
//         }
//     }
//     function getNodeRadius(){
//         nodeRadius = Math.min(40, Math.min(Math.floor(1280 / leaves - 75), Math.floor(720 / depth - 75)));
//         if(nodeRadius < 0) {
//             console.log('Cant fit tree in canvas');
//             return;
//         }
//     }
//     var leaveX = 0;   //For dfs()
//     function dfs(curr = 0){
//         let childCount = 0;
//         var children = [];
//         let x = 0;
//         for(let i = 0; i < vertex; i++){
//             if(tree[curr][i] == 1){
//                 childCount++;
//                 tree[i][curr] = 0;
//                 dfs(i);
//                 x += nodes[nodes.length - 1].x;
//                 children.push(nodes[nodes.length - 1]);
//             }
//         }  
//         var a;
//         if(childCount == 0){
//             leaveX++;
//             a = new Node(leaveX * 150 , tree[curr][vertex + 1] * 150 - 2 * nodeRadius, tree[curr][vertex]);
//             nodes.push(a);
//             // a.draw();
//         }else{
//             let output = 'for ' + curr + ', took ';
//             console.log(output);
//             a = new Node(x / childCount, tree[curr][vertex + 1] * 150 - 2 * nodeRadius, tree[curr][vertex]);
//             a.children = children;
//             nodes.push(a);
//             // a.draw();
//         }

//         // for(let i = 0; i < children.length; i++){
//         //     c.moveTo(a.x, a.y);
//         //     c.lineWidth = 3;
//         //     c.lineTo(children[i].x, children[i].y);
//         //     c.stroke();
//         // }
        
//     }
//     function DrawEdge(){
//         nodes.forEach((a) => {
//             a.children.forEach((ChildNode) => {
//                 c.moveTo(a.x, a.y);
//                 c.lineWidth = 3;
//                 c.lineTo(ChildNode.x, ChildNode.y);
//                 c.stroke();
//                 console.log('joined')
//             })
//         })
//     }
//     CreateMatrix();
//     CountLeaves();
//     CalcDepth();
//     getNodeRadius();
//     dfs();
//     DrawEdge();
//     for(let i = 0; i < nodes.length; i++){
//         nodes[i].draw();
//     }

//     console.log(nodes);
//     console.log('leaves:', leaves);
//     console.log('depth: ' + depth);
//     console.log(nodeRadius);


// }
// function MakeNodeEditable(){
//     canvas.addEventListener('mouseenter', (e) => {
//         window.scrollTo({
//             top: window.innerHeight,
//             behavior: 'smooth'
//         })
//         console.log('mouse enter')
//     })
//     canvas.addEventListener('dblclick', (e) => {
//         for(let i = 0;i < nodes.length; i++){
//             let node = nodes[i];
//             if((e.clientX - node.x) * (e.clientX - node.x) + (e.clientY - node.y) * (e.clientY - node.y) < nodeRadius * nodeRadius) {
//                 var value = parseInt(prompt('Enter node value: ', node.data));
//                 if(!isNaN(value)){
//                     node.draw(value);
//                     node.data = value;
//                 }
//                 else{
//                     console.log('Enter a valid number')
//                 }
//                 return;
//             }
//         }


//         var value = parseInt(prompt('Enter node value: ', '0'));
//         if(!isNaN(value)){
//             var newNode = new Node(Math.floor(e.clientX), Math.floor(e.clientY));
//             nodes.push(newNode)
//             nodes[nodes.length - 1].data = value;
//             nodes[nodes.length - 1].draw();
//         }
//         else{
//             console.log('Enter a valid number');
//         }
//     })
// }

// MakeNodeEditable();
// MakeNodesDragable();
// MatrixToTree();
