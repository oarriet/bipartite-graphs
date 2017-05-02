VERTICAL = 0;
HORIZONTAL = 1;
BOTTOM = 2;
TOP = 3;
RIGHT = 4;
LEFT = 5;

function Node () {
    this.x = 0;
    this.y = 0;
    this.label = "";
    this.data = 0;
    this.pos = 0;
    this.neighbors = [];
    this.type = 0;
}

function OrderedNode () {
    this.index = 0;
    this.average = 0;
}

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
}

function drawLinks(draw,nodesU,nodesV) {
    var n = nodesU.length;
    for (var i =0; i<n; i++) {
        var neighbors = nodesU[i].neighbors;
        for (var j=0; j < neighbors.length; j++) {
            var k = neighbors[j];
            draw.beginPath();
            draw.moveTo(nodesU[i].x,nodesU[i].y);
            draw.lineTo(nodesV[k].x,nodesV[k].y);
            draw.stroke();
        }
    }
}

function drawNodes(draw,nodes) {
    var N = nodes.length;
    for (var i =0; i<N; i++) {
        draw.beginPath();
        draw.arc(nodes[i].x,nodes[i].y,2,0,2*Math.PI);
        draw.fillStyle = 'white';
        draw.fill();
        draw.stroke();
    }
}

function drawLabels(draw,nodes) {
    var N = nodes.length;
    draw.textBaseline="middle"
    draw.fillStyle = 'black';
    for (var i =0; i<N; i++) {
        var xoffset = 0;
        if (nodes[i].align==RIGHT) {
            draw.textAlign="right";
            xoffset = -4;
        } else {
            draw.textAlign="left";
            xoffset = 4;
        }
        draw.fillText(nodes[i].label,nodes[i].x+xoffset,nodes[i].y)
    }
}

function positionOfNode(i,nodes,orderedNodes) {
    var N = nodes.length;
    if (orderedNodes[nodes[i].position].index != i)
        for (var p = 0; p <= N-1; p++)
            nodes[orderedNodes[p].index].position = p;
    return nodes[i].position;
}

function comparator(a,b) {
    if (a.average < b.average)
        return -1;
    if (a.average > b.average)
        return 1;
    return 0;
}

function angle(nodes,p) {
    var N = nodes.length;
    return p*2*Math.PI/N;
}

function drawRadialAxis(draw,x,y,r) {
    draw.save();
    draw.lineWidth = 0.25;
    draw.beginPath();
    draw.arc(x,y,r/2,0,2*Math.PI);
    draw.stroke();
    draw.restore();
}

function circularLayout(nodes,order,dx,dy,w) {
    var N = nodes.length;
    for (var i=0; i < N; i++) {
        var index = order[i].index;
        var radians = angle(nodes,i);
        nodes[index].x = Math.cos(radians)*w/2+dx;
        nodes[index].y = Math.sin(radians)*w/2+dy;
        if ((radians>=Math.PI/2) && (radians<=3*Math.PI/2))
            nodes[index].align = RIGHT;
        else
            nodes[index].align = LEFT;
    }
}

function orderedArray(nodes) {
    var N = nodes.length;
    var orderedNodes = [];
    for (var i=0; i < N; i++) {
        var node = new OrderedNode();
        node.index = i;
        orderedNodes.push(node);
    }
    return orderedNodes;
}

function centroid(nodesU,nodesV) {
    var N = nodesV.length;
    for (var i = 0; i < N; i++) {
        var node1 = nodesV[i];
        var degree = node1.neighbors.length;
        for (var j = 0; j < degree; j++) {
            var index = node1.neighbors[j];
            var node2 = nodesU[index];
            node1.x += node2.x;
            node1.y += node2.y;
        }
        node1.x /= degree;
        node1.y /= degree;
    }
}

function main() {
    display = document.getElementById('canvas');
    draw = display.getContext('2d');
    draw.strokeStyle = 'black';
    draw.fillStyle = 'black';
    draw.font = "12px Arial";

    nodesU = initU();
    nodesV = initV();

    orderU = orderedArray(nodesU);
    orderV = orderedArray(nodesV);
    circularLayout(nodesU,orderU,350,250,400);
    centroid(nodesU,nodesV);
    drawRadialAxis(draw,350,250,400)
    drawLinks(draw,nodesU,nodesV);
    drawNodes(draw,nodesU);
    drawNodes(draw,nodesV);
    drawLabels(draw,nodesU,RIGHT);
    drawLabels(draw,nodesV,LEFT);
}

main();