// Задание 1

let goods = [
  {name: "Вилка", price: 50},
  {name: "Ложка", price: 40},
  {name: "Нож", price: 30},
  {name: "Тарелка", price: 70},
  {name: "Чашка", price: 60},
  {name: "Блюдце", price: 65}
]

let cart = {
    goodList:[],
    countTotalPrice(){
        let sum = 0;
        this.goodList.length > 0 ? this.goodList.forEach(e => sum += e.price * e.count) : null;
        return sum;
    },
    countTotalNumber(){
        let count = 0;
        this.goodList.length > 0 ? this.goodList.forEach(e => count += e.count) : null;
        return count;
    },
    putProduct(e){
        // если корзина пуста, то добавляем товар
        if(this.goodList.length == 0){
            let pr = e.path[2].children[1].innerText.split(" ");
            this.goodList.push({
                name: e.path[2].children[0].innerText,
                price: +pr[0],
                count:1
            })
        // если в корзине уже что-то есть
        }else{
            let n = e.path[2].children[0].innerText;
            let existName = 0;
            // Проверяем, ести ли уже такой товар в корзине
            // если есть то увеличиваем его количество
            this.goodList.forEach(g => {
                if(g.name == n){
                    g.count++;
                    existName++;
                }
            })
            // Если товара нет в корзине, то добавлем его
            if(existName == 0){
                let pr = e.path[2].children[1].innerText.split(" ");
                this.goodList.push({
                    name: e.path[2].children[0].innerText,
                    price: pr[0],
                    count:1
                })
            }
        }
        this.rendearCart();
    },
    rendearCart(){
        let cart = document.querySelector(".cart");
        if(this.goodList.length == 0) cart.innerText = 'Ваша корзина пуста';
        if(this.goodList.length > 0) {
            let count = this.countTotalNumber();
            let sum = this.countTotalPrice();
            let cart = document.querySelector(".cart");
            cart.innerHTML = `В	корзине: ${count} товаров на сумму ${sum} рублей`;
            // Отрисовка списка товаров с количеством и общей стоимостью
            this.renderGoodListInCart();
        }
    },
    renderGoodListInCart(){ 
      let cart = document.querySelector(".cart");     
      cart.innerHTML += '<br><br>Список товаров в корзине<ul>';
      this.goodList.forEach(e => {
          cart.innerHTML += `
            <li>${e.name} - ${e.count}шт. - ${e.count * e.price}руб.</li>
          `
      })
      cart.innerHTML += '</ul>'
    }    
}

// Отрисовка доступных товаров для покупки
let tbl = '<table class="tbl-good-list">';
goods.forEach(e => {
    tbl += `
        <tr>
            <td>${e.name}</td>        
            <td>${e.price} руб.</td>        
            <td><button class='add' onClick='cart.putProduct(event)'>Купить</button></td>        
        </tr>
    `;
})
tbl += '</table>';
document.querySelector(".good-list").innerHTML += tbl;

// Отрисовка корзины
cart.rendearCart();