/*
Một số phương thức phổ biến khi sử dụng DOM
Node.getElementsByTagName(‘tagName’)
trả về một danh sách các node con, cháu của một node với tag là ‘tagName’.

Ở đây, tagName có thể là body, h1, p, img, …

Node.getElementsByClassName(‘className’)
Tương tự như phương thức trên, phương phức này trả về một danh sách các node con, cháu của một node với thuộc tính class = ‘className’.

Node.getElementById(‘id’)
trả về node có thuộc tính id = ‘id’.

Node.removeChild(child)
bỏ đi node child của một node và trả về node bị bỏ đi.

Node.appendChild(child)
thêm node child vào cuối danh sách childNodes của một node.

Node.insertBefore(newNode, referenceNode)
chèn thêm node newNode vào phía trước node referenceNode.

Node.replaceChild(newChild, oldChild)
thay thế node oldChild bằng node newChild.

Document.createTextNode(data)
Tạo ra một node kiểu text với giá trị text là data.

Document.createElement(tagName)
Tạo ra một node mới có kiểu là tagName (h1, h2, p, img, div,…)

Document.querySelector(selectors)
*/