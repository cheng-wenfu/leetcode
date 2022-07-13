/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity
  this.count = 0
  this.map = new Map()
  // 保护节点
  this.head = new Node()
  this.tail = new Node()
  this.head.next = this.tail
  this.tail.pre = this.head
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
      let node = this.map.get(key)
      // 放在链尾
      this.delete(node)
      this.add(node)
      return node.value
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
      let node = this.map.get(key)
      node.value = value
      this.delete(node)
      this.add(node)
      return
  }
  let newNode = new Node(key, value)
  if (this.count === this.capacity) {
      let node = this.head.next
      this.map.delete(node.key)
      this.delete(node)
  } else {
      this.count += 1
  }
  this.map.set(key, newNode)
  this.add(newNode)
};

// 链尾插入
LRUCache.prototype.add = function(node) {
  let pre = this.tail.pre
  pre.next = node
  node.next = this.tail
  node.pre = pre
  this.tail.pre = node
};


LRUCache.prototype.delete = function(node) {
  let pre = node.pre
  let next = node.next
  pre.next = next
  next.pre = pre
};

function Node (key = 0, value = 0) {
  this.key = key
  this.value = value
  this.next = null
  this.pre = null
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/