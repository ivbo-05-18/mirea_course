/* eslint-disable max-classes-per-file */
const COLORS = [0, 1, 2, 3, 4]; // TODO: tie this together with the COLORS from App.js

const randomIndexFromCollection = (collection) => {
  let index = 0;
  for (let i = 1, max = collection.length; i < max; i++) {
    if (Math.random() < 1 / (i + 1)) {
      index = i;
    }
  }
  return index;
};

class Node {
  constructor(id, color) {
    this.id = id;
    this.color = color;
  }
}

class Edge {
  constructor(sourceId, destId, weight) {
    this.sourceId = sourceId;
    this.destId = destId;
    this.weight = weight;
  }
}

class Graph {
  constructor(size = 3) {
    this.size = size;
    this.nodes = {};
    this.edgesByNode = {};
    for (let i = 0; i < size * size; i++) {
      this.nodes[i] = new Node(i, randomIndexFromCollection(COLORS));
    }
    this.setEdgeWeights();
  }

  setEdgeWeight(id) {
    const node = this.nodes[id];
    const nodeId = node.id;
    const edges = [];

    const topIndex = nodeId - this.size;
    const rightIndex = nodeId + 1;
    const bottomIndex = nodeId + this.size;
    const leftIndex = nodeId - 1;

    if (topIndex >= 0) {
      const w = this.sameColor(nodeId, topIndex) ? 0 : 1;
      edges.push(new Edge(nodeId, topIndex, w));
    }

    if (rightIndex % this.size > 0) {
      const w = this.sameColor(nodeId, rightIndex) ? 0 : 1;
      edges.push(new Edge(nodeId, rightIndex, w));
    }

    if (bottomIndex < this.size * this.size) {
      const w = this.sameColor(nodeId, bottomIndex) ? 0 : 1;
      edges.push(new Edge(nodeId, bottomIndex, w));
    }

    if (nodeId % this.size !== 0) {
      const w = this.sameColor(nodeId, leftIndex) ? 0 : 1;
      edges.push(new Edge(nodeId, leftIndex, w));
    }

    this.edgesByNode[nodeId] = edges;
  }

  setEdgeWeights() {
    Object.keys(this.nodes).forEach((id) => {
      this.setEdgeWeight(id);
    });
  }

  updateColor(id, color) {
    this.nodes[id].color = color;
  }

  colorFill(color) {
    const seenIds = [];
    const processing = [0]; // starting at the top left corner (this is a stack)
    const updateEdgeWeights = [];
    while (processing.length > 0) {
      const currentNodeId = processing.pop();
      this.updateColor(currentNodeId, color);
      seenIds.push(currentNodeId);
      this.edgesByNode[currentNodeId].forEach((edge) => {
        if (seenIds.indexOf(edge.destId) > -1) {
          return; // bail if we've seen it
        }
        if (edge.weight === 0) {
          processing.push(edge.destId); // process it there is no weight cost
        }
        if (edge.weight === 1 && this.nodes[currentNodeId].color === color) {
          updateEdgeWeights.push(currentNodeId);
          // update the edge weghts after we finish color filling
        }
      });
    }
    updateEdgeWeights.forEach((nodeId) => this.setEdgeWeight(nodeId));
    // BUG: The graph is now in a state that works but not all edges are accurate.
  }

  sameColor(nodeAId, nodeBId) {
    return this.nodes[nodeAId].color === this.nodes[nodeBId].color;
  }
}

export default Graph;
// update a node's color
// which will update the weights of the nodes.
// i can update colors and *then* update the weights
