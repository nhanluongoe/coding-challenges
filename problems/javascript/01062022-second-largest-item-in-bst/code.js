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

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function findSecondLargest(treeRoot) {
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error('Invalid input!')
  }

  const nodes = []
  nodes.push(treeRoot)
  let max = -Infinity
  let secondMax = -Infinity

  while (nodes.length) {
    const node = nodes.pop()
    const { value, left, right } = node

    if (value >= max) {
      secondMax = max
      max = value
    }

    if (value >= secondMax && value < max) {
      secondMax = value
    }

    if (left) {
      nodes.push(left)
    }
    if (right) {
      nodes.push(right)
    }
  }

  // Find the second largest item in the binary search tree

  return secondMax
}

// Tests

let desc = 'full tree'
let treeRoot = new BinaryTreeNode(50)
let leftNode = treeRoot.insertLeft(30)
leftNode.insertLeft(10)
leftNode.insertRight(40)
let rightNode = treeRoot.insertRight(70)
rightNode.insertLeft(60)
rightNode.insertRight(80)
assertEquals(findSecondLargest(treeRoot), 70, desc)

desc = 'largest has a left child'
treeRoot = new BinaryTreeNode(50)
leftNode = treeRoot.insertLeft(30)
leftNode.insertLeft(10)
leftNode.insertRight(40)
rightNode = treeRoot.insertRight(70)
rightNode.insertLeft(60)
assertEquals(findSecondLargest(treeRoot), 60, desc)

desc = 'largest has a left subtree'
treeRoot = new BinaryTreeNode(50)
leftNode = treeRoot.insertLeft(30)
leftNode.insertLeft(10)
leftNode.insertRight(40)
rightNode = treeRoot.insertRight(70)
leftNode = rightNode.insertLeft(60)
leftNode.insertRight(65)
leftNode = leftNode.insertLeft(55)
leftNode.insertRight(58)
assertEquals(findSecondLargest(treeRoot), 65, desc)

desc = 'second largest is root node'
treeRoot = new BinaryTreeNode(50)
leftNode = treeRoot.insertLeft(30)
leftNode.insertLeft(10)
leftNode.insertRight(40)
rightNode = treeRoot.insertRight(70)
assertEquals(findSecondLargest(treeRoot), 50, desc)

desc = 'two nodes root is largest'
treeRoot = new BinaryTreeNode(50)
treeRoot.insertLeft(30)
assertEquals(findSecondLargest(treeRoot), 30, desc)

desc = 'descending linked list'
treeRoot = new BinaryTreeNode(50)
leftNode = treeRoot.insertLeft(40)
leftNode = leftNode.insertLeft(30)
leftNode = leftNode.insertLeft(20)
leftNode = leftNode.insertLeft(10)
assertEquals(findSecondLargest(treeRoot), 40, desc)

desc = 'ascending linked list'
treeRoot = new BinaryTreeNode(50)
rightNode = treeRoot.insertRight(60)
rightNode = rightNode.insertRight(70)
rightNode = rightNode.insertRight(80)
assertEquals(findSecondLargest(treeRoot), 70, desc)

desc = 'one node tree'
treeRoot = new BinaryTreeNode(50)
assertThrowsError(() => findSecondLargest(treeRoot), desc)

desc = 'when tree is empty'
treeRoot = null
assertThrowsError(() => findSecondLargest(treeRoot), desc)

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func()
    console.log(`${desc} ... FAIL`)
  } catch (e) {
    console.log(`${desc} ... PASS`)
  }
}
