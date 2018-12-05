## Max Depth
class Node:
  # Constructor to create a new node
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None

def maxDepth(node):
  if node is None:
    ## minus root 'jump'
    return -1
  else:
    return max(maxDepth(node.left), maxDepth(node.right)) + 1

root = Node(3)
root.left = Node(2)
root.left.left = Node(1)

root.right = Node(5)
root.right.left = Node(4)
root.right.right = Node(6)
root.right.right = Node(7)
root.right.right.right = Node(8)

print(maxDepth(root));