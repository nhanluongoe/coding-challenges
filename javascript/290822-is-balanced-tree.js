class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }
}

function isBalanced(treeRoot) {
  if (!treeRoot) return true

  const depths = []

  const nodes = []
  nodes.push([treeRoot, 0])

  while (nodes.length) {
    const [node, depth] = nodes.pop()

    if (!node.left && !node.right) {
      if (depths.indexOf(depth) < 0) depths.push(depth)

      if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) return false
    } else {
      if (node.left) nodes.push([node.left, depth + 1])
      if (node.right) nodes.push([node.right, depth + 1])
    }
  }

  return true
}

// Tests

let desc = 'full tree'
let treeRoot = new BinaryTreeNode(5)
let leftNode = treeRoot.insertLeft(8)
leftNode.insertLeft(1)
leftNode.insertRight(2)
let rightNode = treeRoot.insertRight(6)
rightNode.insertLeft(3)
rightNode.insertRight(4)
assertEquals(isBalanced(treeRoot), true, desc)

desc = 'both leaves at the same depth'
treeRoot = new BinaryTreeNode(3)
leftNode = treeRoot.insertLeft(4)
leftNode.insertLeft(1)
rightNode = treeRoot.insertRight(6)
rightNode.insertRight(9)
assertEquals(isBalanced(treeRoot), true, desc)

desc = 'leaf heights differ by one'
treeRoot = new BinaryTreeNode(6)
leftNode = treeRoot.insertLeft(1)
rightNode = treeRoot.insertRight(0)
rightNode.insertRight(7)
assertEquals(isBalanced(treeRoot), true, desc)

desc = 'leaf heights differ by two'
treeRoot = new BinaryTreeNode(6)
leftNode = treeRoot.insertLeft(1)
rightNode = treeRoot.insertRight(0)
rightNode.insertRight(7).insertRight(8)
assertEquals(isBalanced(treeRoot), false, desc)

desc = 'three leaves total'
treeRoot = new BinaryTreeNode(1)
leftNode = treeRoot.insertLeft(5)
rightNode = treeRoot.insertRight(9)
rightNode.insertLeft(8)
rightNode.insertRight(5)
assertEquals(isBalanced(treeRoot), true, desc)

desc = 'both subtrees superbalanced'
treeRoot = new BinaryTreeNode(1)
leftNode = treeRoot.insertLeft(5)
rightNode = treeRoot.insertRight(9)
rightNode.insertLeft(8).insertLeft(7)
rightNode.insertRight(5)
assertEquals(isBalanced(treeRoot), false, desc)

desc = 'both subtrees superbalanced two'
treeRoot = new BinaryTreeNode(1)
leftNode = treeRoot.insertLeft(2)
leftNode.insertLeft(3)
leftNode.insertRight(7).insertRight(8)
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9)
assertEquals(isBalanced(treeRoot), false, desc)

desc = 'three leaves at different levels'
treeRoot = new BinaryTreeNode(1)
leftNode = treeRoot.insertLeft(2)
const leftLeft = leftNode.insertLeft(3)
leftNode.insertRight(4)
leftLeft.insertLeft(5)
leftLeft.insertRight(6)
treeRoot.insertRight(7).insertRight(8).insertRight(9).insertRight(10)
assertEquals(isBalanced(treeRoot), false, desc)

desc = 'only one node'
treeRoot = new BinaryTreeNode(1)
assertEquals(isBalanced(treeRoot), true, desc)

desc = 'linked list tree'
treeRoot = new BinaryTreeNode(1)
treeRoot.insertRight(2).insertRight(3).insertRight(4)
assertEquals(isBalanced(treeRoot), true, desc)

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
