var circles = [];
var latestUs = [];
var latestVs = [];
var gridSpacing = 50;
var canvasSpacing = 55;

function initU() {
    root = [{id:0,x:0,y:0,label:"Turdus falcklandii",type:1,pos:0,neighbors:[0,1,2,3,5,6,8]},
        {id:1,x:0,y:0,label:"Mimus thenca",type:1,pos:0,neighbors:[0,1,2,3,6,10,11]},
        {id:2,x:0,y:0,label:"Elania albiceps",type:1,pos:0,neighbors:[0,1,2,3,7,8]},
        {id:3,x:0,y:0,label:"Lycalopex culp",type:1,pos:0,neighbors:[0,1,5,7,9]},
        {id:4,x:0,y:0,label:"Lycalopex gri",type:1,pos:0,neighbors:[0,1,5]},
        {id:5,x:0,y:0,label:"Curaeus curaeus",type:1,pos:0,neighbors:[0,6]},
        {id:6,x:0,y:0,label:"Zonotrichia cap",type:1,pos:0,neighbors:[2,3]},
        {id:7,x:0,y:0,label:"Phytotoma rara",type:1,pos:0,neighbors:[1]},
        {id:8,x:0,y:0,label:"Columba arauc",type:1,pos:0,neighbors:[0]},
        {id:9,x:0,y:0,label:"Colaptes pitius",type:1,pos:0,neighbors:[2]},
        {id:10,x:0,y:0,label:"Colorhamphus par",type:1,pos:0,neighbors:[4]},
        {id:11,x:0,y:0,label:"Xolmis pyrope",type:1,pos:0,neighbors:[4]},
        {id:12,x:0,y:0,label:"Anairetes parulus",type:1,pos:0,neighbors:[4]},
        {id:13,x:0,y:0,label:"Oryctolagus cun",type:1,pos:0,neighbors:[1]}
    ];
    return root;
}

function initV() {
    root = [{id:0,x:0,y:0,label:"Aristotelia chilensis",type:0,pos:0,neighbors:[0,1,2,3,4,5,8]},
        {id:1,x:0,y:0,label:"Lithrea caustica",type:0,pos:0,neighbors:[0,1,2,3,4,7,13]},
        {id:2,x:0,y:0,label:"Schinus polygamus",type:0,pos:0,neighbors:[0,1,2,6,9]},
        {id:3,x:0,y:0,label:"Cestrum parqui",type:0,pos:0,neighbors:[0,1,2,6]},
        {id:4,x:0,y:0,label:"Maytenus boaria",type:0,pos:0,neighbors:[10,11,12]},
        {id:5,x:0,y:0,label:"Muehlenbeckia hast",type:0,pos:0,neighbors:[0,3,4]},
        {id:6,x:0,y:0,label:"Tristerix corymbosus",type:0,pos:0,neighbors:[0,1,5]},
        {id:7,x:0,y:0,label:"Schinus molle",type:0,pos:0,neighbors:[2,3]},
        {id:8,x:0,y:0,label:"Azara dentata",type:0,pos:0,neighbors:[0,2]},
        {id:9,x:0,y:0,label:"Porlieria chilensis",type:0,pos:0,neighbors:[3]},
        {id:10,x:0,y:0,label:"Tristerix aphyllus",type:0,pos:0,neighbors:[1]},
        {id:11,x:0,y:0,label:"Trichocereus chilensis",type:0,pos:0,neighbors:[1]}
    ];
    return root;
}

/*
 function initU() {
 root = [{id:0,x:0,y:0,label:"Lord of the Rings 1",type:1,pos:0,neighbors:[0,1,8]},
 {id:1,x:0,y:0,label:"The Hobbit 1",type:1,pos:0,neighbors:[0,1,8]},
 {id:2,x:0,y:0,label:"Pirates of the Caribbean",type:1,pos:0,neighbors:[1,2]},
 {id:3,x:0,y:0,label:"Sin City",type:1,pos:0,neighbors:[0,3,4]},
 {id:4,x:0,y:0,label:"Pulp Fiction",type:1,pos:0,neighbors:[4,5,9]},
 {id:5,x:0,y:0,label:"Unbreakable",type:1,pos:0,neighbors:[4,5]},
 {id:6,x:0,y:0,label:"Star Wars Episode 1",type:1,pos:0,neighbors:[2,5,6]},
 {id:7,x:0,y:0,label:"Cold Mountain",type:1,pos:0,neighbors:[6,7]},
 {id:8,x:0,y:0,label:"Anna Karenina",type:1,pos:0,neighbors:[2,7]},
 {id:9,x:0,y:0,label:"The Aviator",type:1,pos:0,neighbors:[7,8]},
 {id:10,x:0,y:0,label:"Gattaca",type:1,pos:0,neighbors:[7,9]}
 ];
 return root;
 }

 function initV() {
 root = [{id:0,x:0,y:0,label:"Elijah Wood",type:0,pos:0,neighbors:[0,1,3]},
 {id:1,x:0,y:0,label:"Orlando Bloom",type:0,pos:0,neighbors:[0,1,2]},
 {id:2,x:0,y:0,label:"Keira Knightley",type:0,pos:0,neighbors:[2,6,8]},
 {id:3,x:0,y:0,label:"Jessica Alba",type:0,pos:0,neighbors:[3]},
 {id:4,x:0,y:0,label:"Bruce Willis",type:0,pos:0,neighbors:[3,4]},
 {id:5,x:0,y:0,label:"Samuel L. Jackson",type:0,pos:0,neighbors:[4,5,6]},
 {id:6,x:0,y:0,label:"Natalie Portman",type:0,pos:0,neighbors:[6,7]},
 {id:7,x:0,y:0,label:"Jude Law",type:0,pos:0,neighbors:[7,8,9]},
 {id:8,x:0,y:0,label:"Cate Blanchett",type:0,pos:0,neighbors:[0,1,9]},
 {id:9,x:0,y:0,label:"Uma Thurman",type:0,pos:0,neighbors:[4,10]}
 ];
 return root;
 }*/

nodesU = initU();
nodesV = initV();

// Box width
var bw = (nodesU.length) * gridSpacing;
// Box height
var bh = (nodesV.length) * gridSpacing;
// Padding
var p = 175;

var canvas = document.getElementById("canvas");
canvas.width=nodesU.length*canvasSpacing+p;
canvas.height=nodesV.length*canvasSpacing+p;
var context = canvas.getContext("2d");

function drawBoard(){
    for (var x = 0; x <= bw; x += gridSpacing) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
        index = x/gridSpacing;
        if(index < nodesU.length){
            nodeU = nodesU[x/gridSpacing];
            nodeU.neighbors = nodeU.neighbors.sort((a, b) => a - b);
            latestUs.push(nodeU.neighbors[nodeU.neighbors.length - 1]);
            context.save();
            context.rotate( Math.PI / 2 );
            context.font = "15px Arial";
            context.fillText(nodeU.label,50,-p-gridSpacing-x);
            context.restore();
        }
    }


    for (var x = 0; x <= bh; x += gridSpacing) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
        index = x/gridSpacing;
        if(index < nodesV.length){
            nodeV = nodesV[x/gridSpacing];
            context.font = "15px Arial";
            context.fillText(nodeV.label,20,x+p+gridSpacing);
            if(nodeV.neighbors && nodeV.neighbors.length > 0){
                nodeV.neighbors = nodeV.neighbors.sort((a, b) => a - b);
                latestVs.push(nodeV.neighbors[nodeV.neighbors.length - 1]);
                for (var i = 0; i <= nodeV.neighbors.length; i++) {
                    circles.push({x:p+(nodeV.neighbors[i]+1)*gridSpacing,y:p+(index+1)*gridSpacing});
                }
            }
        }
    }

    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();
clearFillClearCircles();
clearFirstY();
clearFirstX();
clearUnusedV();
clearUnusedU();

function clearFillClearCircles(){
    for (var i = 0; i < circles.length; i++) {
        circle = circles[i];
        context.save();
        context.beginPath();
        context.arc(circle.x-10, circle.y-10, 10, 0, 2 * Math.PI, true);
        context.clearRect(circle.x-10, circle.y-10, 10, 15);
        context.stroke();
        context.restore();
        context.clearRect(circle.x-21, circle.y-21, 10, 21);
        context.clearRect(circle.x-11, circle.y-21, 11, 12);
        context.clearRect(circle.x, circle.y-8, 3, 8);
    }
}

function clearFirstY(){
    context.save();
    context.clearRect(0.5 + p, p, 1, bw + p);
    context.restore();
}

function clearFirstX(){
    context.save();
    context.clearRect(p, p, bh + p, 1);
    context.restore();
}

function clearUnusedV(){
    for(i = 0; i < latestVs.length; i++){
        for(j = latestVs[i]; j < latestUs.length; j++){
            context.save();
            context.clearRect(p+(j+1)*gridSpacing, p+((i+1)*gridSpacing), gridSpacing, 1);
            context.restore();
        }
    }
}

function clearUnusedU(){
    for(i = 0; i < latestUs.length; i++){
        for(j = latestUs[i]; j < latestVs.length; j++){
            context.save();
            context.clearRect(p+((i+1)*gridSpacing), p+(j+1)*gridSpacing, 1, gridSpacing);
            context.restore();
        }
    }
}