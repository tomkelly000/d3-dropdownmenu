# d3-dropdownmenu

A d3 extension for easily making dropdown menus with d3

See a demo [here](bl.ocks.org/tomkelly000/6110163)

## API

The module treats a menu as a null-terminated tree with the containing element as the root.  Like d3, it supports method chaining.

First, select the containing element to get the root.
```
d3.element.dropdownmenu('#demo')
```

The root is a node, and is hidden like all other nodes, so we must explicitly show it by using
```
root.show()
```

### Nodes
These are all the methods for a node, including the root.

Add a subtree in json format
```
node.add(json)
```

There are several tree traversing methods, which are self-explanatory
```
node.root()
node.firstChildNode()
node.lastChildNode()
node.parentNode()
node.nextSiblingNode()
node.previousSiblingNode()
node.prevSiblingNode()

node.links()
node.parentLink()
node.childLink()
```
Some return d3 multiple-selectors for styling and the like
```
node.childNodes() // direct children
node.nodes()
node.links()

### Links
A link is the connection between multiple menu items and their parent node

Most important is the ability to turn a link horizontal
```
link.horizontal()
```

There are also tree traversal methods
```
link.root()
link.firstChildNode()
link.lastChildNode()
link.parentNode()
```

And methods that return d3 multiple-selectors
```
link.nodes()
link.links()
link.childNodes()
```