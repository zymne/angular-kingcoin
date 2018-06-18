
function Queue(qsize, qname) {
    this.size = qsize;
    this.qname = qname;
}


function init() {
    var q = new Queue(5, 'queue1');
    alert(q.qname);
}