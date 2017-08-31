// ClozeCard constructor takes in two arguments: text contains the entire text and cloze is the deleted portion from that text
let ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard) {
        this.full = text;
        this.cloze = cloze;
        this.partial = showPartial();

        function showPartial() {
            if(!text.includes(cloze)) {
                console.log("Error. Cloze deletion does not appear within full text.");
            } else {

            } return text.replace(cloze,"...");
        }

    } else {
        return new ClozeCard(text,cloze);
    }


}


module.exports = ClozeCard;

