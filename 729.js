var MyCalendar = function() {
  this.root = {
      next: null,
      start: 0,
      end: 0
  }
  this.tail = this.root
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
  if (start >= this.tail.end) {
      let temp = {
          next: null,
          start,
          end
      }
      this.tail.next = temp
      this.tail = temp
      return true
  } else {
      let root = this.root
      while (root) {
          if (
              (root.start <= start && root.end > start) ||
              (root.end >= end && root.start < end)
          ) {
              return false
          } else {
              if (root.start <= start && root.next.start >= end) {
                  let temp = {
                      next: root.next,
                      start,
                      end
                  }
                  root.next = temp
                  return true
              } else {
                  root = root.next
              }
          }
      }
      return false
  }
};

/**
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/