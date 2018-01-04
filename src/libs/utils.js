const _ = {
    addEvent (elem, type, fn, capture) {
        // nodeType所对应的节点类型1 => Element, 9 => Document
        if (elem && (elem.nodeType === 1 || elem.nodeType === 9 || _.isWindow(elem))) {
            if (elem.addEventListener) {
              elem.addEventListener(type, fn, !!capture)
            } else if (elem.attachEvent) {
              elem.attachEvent(`on${type}`, fn)
            } else {
              elem[`on${type}`] = fn /* 直接赋给事件 */
            }
        }
    },
    isWindow (obj) {
        return obj !== null && obj !== undefined && obj === obj.window
    },
    removeEvent (elem, type, fn) {
        if (elem && (elem.nodeType === 1 || elem.nodeType === 9 || _.isWindow(elem))) {
            if (elem.removeEventListener) { /* chrome等 */
                elem.removeEventListener(type, fn)
            } else if (elem.detachEvent) {
                elem.detachEvent(type, fn)
            } else {
                elem[`on${type}`] = null
            }
        }
    }
}

export default _
