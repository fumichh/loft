const productRow = document.querySelector("#productRow")
const id = localStorage.getItem("productId");

function getProduct() {
    fetch(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => drowProduct(data))
        .catch(error => console.log(error))
}
getProduct();


function drowProduct(data) {
    console.log(data);
    productRow.innerHTML = `
  <div class="product-col">
  <img src="${data.url}" alt="">
</div>
<div class="product-col" >
  <img src="./img/star.png" alt="">
  <h1 class="product-title">${data.title?data.title:"..."}</h1>
  <p class="product-subtitle">${data.name}</p>
  <div class="product-details">
      <div class="product-price">${data.price}₽</div>
      <div class="product-btn">Купить</div>
      <div class="product-heart">
          <img src="./img/heart-def.jpg" alt="">
          <span>Добавить в желаемое</span>
      </div>
  </div>
  <div class="product-settings">
      <input type="color" value="${data.color}">
      <input type="number" value="1">
      <div class="product-size">${data.width?data.width:"0"} СМ x ${data.depth?data.depth:0} СМ x ${data.heigth?data.heigth:0} СМ</div>
  </div>
  <div class="product-comment">Описание</div>
  <div class="product-text">
      Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс».
      Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и
      функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи
      или компании друзей!
  </div> 
</div>
   
  `


}