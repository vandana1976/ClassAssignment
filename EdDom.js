const unorderedLi = document.querySelector('#list');
const coffee = unorderedLi.children[1];
console.log(coffee);
coffee.innerHTML = "Fair Trade Coffee";

const twinkies = unorderedLi.children[3];
console.log(twinkies);
twinkies.remove();

const newItem = document.createElement('li');
newItem.innerHTML = "Cheese Whiz";
unorderedLi.appendChild(newItem);
console.log(newItem);

unorderedLi.innerHTML = "";
const newArray = ['protein powder', 'muscle milk', 'power bars']
newArray.forEach(function(item){
    var li = document.createElement('li');
    li.innerHTML= item;
    unorderedLi.appendChild(li);
})

unorderedLi.children[1].className = "important";







