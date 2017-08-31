// BasicCard constructor takes two arguments: what is in front of the card, and what is on the back of the card
let BasicCard = function(front, back) {
    if(this instanceof BasicCard) {
        this.front = front;
        this.back - back;
    } else {
        return new BasicCard(front,back);
    }
}

module.exports = BasicCard;