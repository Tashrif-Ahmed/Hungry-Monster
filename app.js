const search = document.getElementById('itemSearch');
const button = document.getElementById('searchBtn');
const items = document.querySelector('.items');



button.addEventListener('click', function () {
    if (search.value == '') {
        alert("you haven't search anything");
    }
    else{
        items.innerHTML = "";
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search.value + '')
        .then(res => res.json())
        .then(data => {
            console.log(data.meals.length);
            for (let i = 0; i < data.meals.length; i++) {
                var itemImgSrc = data.meals[i].strMealThumb;
                var itemName = data.meals[i].strMeal;

                var div1 = document.createElement('div');
                div1.setAttribute('class', 'item');



                var div2 = document.createElement('div');
                div2.setAttribute('class', 'itemBody');


                var img = document.createElement('img');
                img.setAttribute('class', 'itemImg');
                img.src = itemImgSrc;


                var h5 = document.createElement('h5');
                h5.setAttribute('class', 'itemName');
                h5.innerText = itemName;

                var btn = document.createElement('button');
                btn.setAttribute('class', 'btn btn-secondary rBtn');
                btn.setAttribute('id', data.meals[i].idMeal);
                btn.innerHTML = 'Recipe';


                items.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(img);
                div2.appendChild(h5);
                div2.appendChild(btn);


                const rButton = document.getElementById(data.meals[i].idMeal);
                rButton.addEventListener('click', function () {

                    var recipeBody = document.querySelector('.recipeBody');
                    recipeBody.innerHTML = "";

                    console.log('clicked' + data.meals[i].strMeal);
                    document.querySelector('.items').style.display = 'none'
                    document.getElementById('container').style.display = 'none'
                    document.getElementById('recipe').style.display = 'block'

                    var btn = document.createElement('button');


                    var img = document.createElement('img');
                    img.src = data.meals[i].strMealThumb;

                    var h4 = document.createElement('h4');
                    h4.innerText = data.meals[i].strMeal;

                    var h2 = document.createElement('h2');
                    h2.setAttribute = ('class', 'Name');
                    h2.innerText = 'Ingredients:';

                    var btn = document.createElement('button');
                    btn.setAttribute('class', 'btn btn-secondary');
                    btn.setAttribute('id', 'btn');
                    btn.innerHTML = 'Return';

                    var br = document.createElement('br');

                    var ul = document.createElement('ul');

                    var secondh2 = document.createElement('h2');
                    secondh2.innerText = 'Cooking Instructions:';

                    var p = document.createElement('p');
                    p.setAttribute('class', 'cookingInstructions');

                    p.innerHTML =data.meals[i].strInstructions ;

                   
                
                    


                    recipeBody.appendChild(btn);
                    recipeBody.appendChild(br);
                    recipeBody.appendChild(br);

                    recipeBody.appendChild(img);
                    recipeBody.appendChild(h4);
                    recipeBody.appendChild(h2);
                    recipeBody.appendChild(ul);
                    recipeBody.appendChild(secondh2);
                    recipeBody.appendChild(p);

                    
                        
                 
                    for (let index = 1; index <=20; index++) {
                        var it =data.meals[i][`strIngredient${index}`]
                        
                        

                        var li =document.createElement('li');
                        li.innerHTML =it
                        ul.appendChild(li);

                    }



                    document.getElementById('btn').addEventListener('click', function () {
                        document.querySelector('.items').style.display = 'flex'
                        document.getElementById('container').style.display = 'flex'
                        document.getElementById('recipe').style.display = 'none'
                    })
                })


            }

        })
        .catch(err => alert('No result found'))
    }
    


    

})



