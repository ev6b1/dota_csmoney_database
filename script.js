var msg = $.ajax({type: "GET", url: "https://cs.money/js/database-skins/library-en-730.js?v=22", async: false}).responseText,
csmoney_db = $.parseJSON(msg.replace("skinsBaseList[730] = ",''));
var secondMsg = $.ajax({type: "GET", url: "https://cs.money/js/database-skins/library-ru-570.js?v=1259", async: false}).responseText,
dota_db = $.parseJSON(secondMsg.replace("skinsBaseList[570] = ",''));


document.querySelector('.search_button').addEventListener('click', () => {
  document.querySelector('.price').innerHTML = '';
  for (var key in csmoney_db) {
    if (csmoney_db[key].m.indexOf(document.querySelector('.search_input').value) != -1) {
      document.getElementsByClassName('price')[0].innerHTML += `<div class="item">${csmoney_db[key].m}, Цена на боте: <strong>${csmoney_db[key].a}$</strong>; Цена на депозит: <strong>${(csmoney_db[key].a * 0.95).toFixed(2)}$</strong>; Выгодно купить на Buff за: <strong>${(csmoney_db[key].a * 0.6 * 7.09).toFixed(0)}￥</strong></div>`;
    }
  }
  for (var key in dota_db) {
    if (dota_db[key].m.indexOf(document.querySelector('.search_input').value) != -1) {
      document.getElementsByClassName('price')[0].innerHTML += `<div class="item">${dota_db[key].m}, Цена на боте: <strong>${dota_db[key].a}$</strong>; Цена на депозит: <strong>${(dota_db[key].a * 0.95).toFixed(2)}$</strong>; Выгодно купить на Buff за: <strong>${(dota_db[key].a * 0.6 * 7.09).toFixed(0)}￥</strong></div>`;
    }
  }
})

document.querySelector('.search_input').addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
  document.querySelector('.price').innerHTML = '';
  for (var key in csmoney_db) {
    if (csmoney_db[key].m.indexOf(document.querySelector('.search_input').value) != -1) {
      document.getElementsByClassName('price')[0].innerHTML += `<div class="item">${csmoney_db[key].m}, Цена на боте: <strong>${csmoney_db[key].a}$</strong>; Цена на депозит: <strong>${(csmoney_db[key].a * 0.95).toFixed(2)}$</strong>; Выгодно купить на Buff за: <strong>${(csmoney_db[key].a * 0.6 * 7.09).toFixed(0)}￥</strong></div>`;
    }
  }
  for (var key in dota_db) {
    if (dota_db[key].m.indexOf(document.querySelector('.search_input').value) != -1) {
      document.getElementsByClassName('price')[0].innerHTML += `<div class="item">${dota_db[key].m}, Цена на боте: <strong>${dota_db[key].a}$</strong>; Цена на депозит: <strong>${(dota_db[key].a * 0.95).toFixed(2)}$</strong>; Выгодно купить на Buff за: <strong>${(dota_db[key].a * 0.6 * 7.09).toFixed(0)}￥</strong></div>`;
    }
  }
}
})




