BOTTOM = 1;
TOP = 2;

TOP_SPACE = 100;
BOTTOM_SPACE = 100;
LEFT_SPACE = 100;

function Node () {
    this.x = 0;
    this.y = 0;
    this.label = "";
    this.pos = 0;
    this.neighbors = [];
    this.type = 0;
}

//DATA.
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
//end of DATA.

/**
 * Descending order by amount of neighbors.
 *
 * @param a Node a
 * @param b Node b
 * @returns {number}
 */
function comparator(a, b) {
    if (a.neighbors.length > b.neighbors.length)
        return -1;
    if (a.neighbors.length < b.neighbors.length)
        return 1;
    return 0;
}

function getYDistance(nodes, drawHeight) {
    var amount = 0;
    var currentNeighbors = 0;

    for (var i = 0; i < nodes.length; i++) {
        if (currentNeighbors != nodes[i].neighbors.length){
            currentNeighbors = nodes[i].neighbors.length;
            amount++;
        }
    }

    return Math.round( (drawHeight - TOP_SPACE - BOTTOM_SPACE ) / amount );
}

function getXDistance(nodes, drawWidth) {
    return Math.round( (drawWidth - LEFT_SPACE) / (nodes.length + 1) );
}

function setUCoordenates(nodes, drawHeight, drawWidth) {
    //Get the distance between nodes in Y.
    var distanceBetweenY = getYDistance(nodes, drawHeight);
    var distanceBetweenX = getXDistance(nodes, drawWidth);

    var currentNeighbors = nodes[0].neighbors.length;
    var currentX = LEFT_SPACE;;
    var currentY = TOP_SPACE;
    for (var i = 0; i < nodes.length; i++) {
        currentX += distanceBetweenX;

        if (currentNeighbors != nodes[i].neighbors.length){
            currentNeighbors = nodes[i].neighbors.length;

            currentY += distanceBetweenY;
        }

        nodes[i].x = currentX;
        nodes[i].y = currentY;
    }
}

function setVCoordenates(nodes, drawHeight, drawWidth) {
    var distanceBetweenX = getXDistance(nodes, drawWidth);
    var currentX = LEFT_SPACE;

    for (var i = 0; i < nodes.length; i++) {
        currentX += distanceBetweenX;

        nodes[i].x = currentX;
        nodes[i].y = drawHeight - BOTTOM_SPACE;
    }
}

function drawNodes(draw,nodes) {
    for (var i =0; i< nodes.length ; i++) {
        draw.beginPath();
        draw.arc(nodes[i].x, nodes[i].y, 2, 0, 2*Math.PI);
        draw.fillStyle = 'white';
        draw.fill();
        draw.stroke();
    }
}

function drawLabels(draw, display, nodes, mode) {
    var xoffset = 4;

    draw.textBaseline="middle"
    draw.fillStyle = 'black';

    if (mode==TOP) {
        draw.save();
        draw.translate( draw.width - 1, 0 );
        draw.rotate(3 * Math.PI / 2);

        draw.textAlign = "left";

        for (var i =0; i < nodes.length; i++) {
            draw.fillText(nodes[i].label, -nodes[i].y + xoffset, nodes[i].x)
        }
    } else if (mode==BOTTOM) {
        draw.save();
        draw.translate( 0, 0 );
        draw.rotate(Math.PI/2);

        draw.textAlign="left";

        for (var i =0; i < nodes.length; i++) {
            draw.fillText(nodes[i].label, nodes[i].y + xoffset, -nodes[i].x)
        }
    }
    draw.restore();
}

function main() {
    display = document.getElementById('canvas');
    draw = display.getContext('2d');
    draw.strokeStyle = 'black';
    draw.fillStyle = 'black';
    draw.font = "12px Arial";

    nodesU = initU();
    nodesV = initV();

    nodesU.sort(comparator);

    setUCoordenates(nodesU, 500, 650);
    setVCoordenates(nodesV, 500, 650);

    drawNodes(draw, nodesU);
    drawNodes(draw, nodesV);

    drawLabels(draw, display, nodesU, TOP);
    drawLabels(draw, display, nodesV, BOTTOM);
}

main();