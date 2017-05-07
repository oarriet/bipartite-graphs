BOTTOM = 1;
TOP = 2;

TOP_SPACE = 100;
BOTTOM_SPACE = 100;
LEFT_SPACE = 0;

//DATA.
function initU() {
    root = [{id:0,x:0,y:0,label:"Lord of the Rings 1",type:1,pos:0,neighbors:[0,1,8]},
        {id:1,x:0,y:0,label:"The Hobbit 1",type:1,pos:0,neighbors:[0,1,8,6]},
        {id:2,x:0,y:0,label:"Pirates of the Caribbean",type:1,pos:0,neighbors:[1,2]},
        {id:3,x:0,y:0,label:"Sin City",type:1,pos:0,neighbors:[0,3,4]},
        {id:4,x:0,y:0,label:"Pulp Fiction",type:1,pos:0,neighbors:[4,5,9]},
        {id:5,x:0,y:0,label:"Unbreakable",type:1,pos:0,neighbors:[4,5]},
        {id:6,x:0,y:0,label:"Star Wars Episode 1",type:1,pos:0,neighbors:[2,5,10]},
        {id:7,x:0,y:0,label:"Cold Mountain",type:1,pos:0,neighbors:[10,7]},
        {id:8,x:0,y:0,label:"Anna Karenina",type:1,pos:0,neighbors:[2,7]},
        {id:9,x:0,y:0,label:"The Aviator",type:1,pos:0,neighbors:[7,8]},
        {id:10,x:0,y:0,label:"Gattaca",type:1,pos:0,neighbors:[7,9]},
        {id:11,x:0,y:0,label:"Hot Fuzz",type:1,pos:0,neighbors:[6]},
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
        {id:6,x:0,y:0,label:"Martin Freeman",type:0,pos:0,neighbors:[2, 11]},
        {id:7,x:0,y:0,label:"Jude Law",type:0,pos:0,neighbors:[7,8,9]},
        {id:8,x:0,y:0,label:"Cate Blanchett",type:0,pos:0,neighbors:[0,1,9]},
        {id:9,x:0,y:0,label:"Uma Thurman",type:0,pos:0,neighbors:[4,10]},
        {id:10,x:0,y:0,label:"Natalie Portman",type:0,pos:0,neighbors:[6,7]},
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

function setUCoordenates(nodesU, nodesV, drawHeight) {
    var distanceBetweenY = getYDistance(nodesU, drawHeight);

    var currentNeighbors = nodesU[0].neighbors.length;
    var currentY = TOP_SPACE;
    for (var i = 0; i < nodesU.length; i++) {

        if (currentNeighbors != nodesU[i].neighbors.length){
            currentNeighbors = nodesU[i].neighbors.length;
            currentY += distanceBetweenY;
        }

        var averageX = getAverageX(nodesU[i].neighbors, nodesV);
        while (nodesU[i].neighbors.length > 1 && checkRepeatedX(nodesU, averageX)){
            averageX += 10;
        }

        nodesU[i].x = averageX;
        nodesU[i].y = currentY;
    }
}

function getFarLeft(neighbors, nodesV) {
    var x = nodesV[neighbors[0]].x;

    for (var i = 0; i < neighbors.length; i++) {
        var currentX = nodesV[neighbors[i]].x;
        if (currentX < x){
            x = currentX;
        }
    }
    return x;
}

function getFarRight(neighbors, nodesV) {
    var x = 0;

    for (var i = 0; i < neighbors.length; i++) {
        var currentX = nodesV[neighbors[i]].x;
        if (currentX > x){
            x = currentX;
        }
    }
    return x;
}

function getAverageX(neighbors, nodesV) {
    return ( (getFarLeft(neighbors, nodesV) + getFarRight(neighbors, nodesV) ) / 2);
}

function checkRepeatedX(nodes, x) {
    var found = false;
    for(var i = 0; i < nodesU.length; i++) {
        if (nodes[i].x == x) {
            found = true;
            break;
        }
    }
    return found;
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

function drawNodes(draw, nodes) {
    for (var i =0; i< nodes.length ; i++) {
        draw.beginPath();
        draw.arc(nodes[i].x, nodes[i].y, 2, 0, 2*Math.PI);
        draw.fillStyle = 'white';
        draw.fill();
        draw.stroke();
    }
}

function drawLinks(draw, nodesU, nodesV) {
    var n = nodesU.length;
    for (var i =0; i<n; i++) {
        var neighbors = nodesU[i].neighbors;
        for (var j=0; j < neighbors.length; j++) {
            var k = neighbors[j];
            draw.setLineDash([5, 15]);
            draw.beginPath();
            draw.moveTo(nodesU[i].x,nodesU[i].y);
            draw.lineTo(nodesV[k].x,nodesV[k].y);
            draw.stroke();
        }
    }
}

function drawLabels(draw, nodes, mode) {
    var xoffset = 4;

    draw.textBaseline="middle"
    draw.fillStyle = 'black';
    draw.textAlign = "left";

    draw.save();

    if (mode==TOP) {
        draw.translate( draw.width - 1, 0 );
        draw.rotate(3 * Math.PI / 2);

        for (var i =0; i < nodes.length; i++) {
            draw.fillText(nodes[i].label, -nodes[i].y + xoffset, nodes[i].x, TOP_SPACE-4)
        }
    } else if (mode==BOTTOM) {
        draw.translate( 0, 0 );
        draw.rotate(Math.PI/2);

        for (var i =0; i < nodes.length; i++) {
            draw.fillText(nodes[i].label, nodes[i].y + xoffset, -nodes[i].x, BOTTOM_SPACE-4)
        }
    }
    draw.restore();
}

function drawSierras(draw, drawHeight, nodesU, nodesV) {
    draw.save();
    var lumPercentage = 0;

    for (var i =0; i < nodesU.length; i++) {
        if (nodesU[i].neighbors.length == 1){
            draw.beginPath();
            draw.moveTo(nodesU[i].x, nodesU[i].y);
            draw.lineTo(nodesU[i].x - 5, drawHeight - BOTTOM_SPACE);
            draw.lineTo(nodesU[i].x + 5, drawHeight - BOTTOM_SPACE);
            draw.closePath();

            draw.stroke();
            draw.fillStyle = "#614126";
            draw.fill();
        } else {
            draw.beginPath();
            draw.moveTo(nodesU[i].x, nodesU[i].y);
            draw.lineTo(getFarLeft(nodesU[i].neighbors, nodesV), drawHeight - BOTTOM_SPACE);
            draw.lineTo(getFarRight(nodesU[i].neighbors, nodesV), drawHeight - BOTTOM_SPACE);
            draw.closePath();

            draw.lineWidth = 2;
            draw.stroke();
            draw.fillStyle = colorLuminance("#556B2F", lumPercentage/100);
            draw.fill();

            lumPercentage += 15;
        }
    }
    draw.restore();
}

function colorLuminance(hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
    }

    return rgb;
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

    setVCoordenates(nodesV, display.height, display.width);
    setUCoordenates(nodesU, nodesV, display.height);

    drawSierras(draw, display.height, nodesU, nodesV);

    drawNodes(draw, nodesU);
    drawNodes(draw, nodesV);

    drawLabels(draw, nodesU, TOP);
    drawLabels(draw, nodesV, BOTTOM);

    drawLinks(draw, nodesU, nodesV);
}

main();