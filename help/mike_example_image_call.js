function render(state) {
    var playerTemplate = `
    <div class="hand">
        <img class="card" src="img/${playerHand.cards[0][2]}${playerHand.cards[0][1]}.png">
        <img class="card" src="img/${playerHand.cards[1][2]}${playerHand.cards[1][1]}.png">
        <div id="controls">
            <button name='hit'>Hit</button>
            <button name='stand'>Stand</button>
            <button name='double'>Double</button>
            <button name='split'>Split</button>
        </div>
    </div>`;
    if(state==="start"){
        $(dealer).append(`<div class="hand"><img class="card" src="img/${dealerHand.cards[0][2]}${dealerHand.cards[0][1]}.png"></div>`);
        $(player).append(playerTemplate);
    }