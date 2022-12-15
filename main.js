name_of_the_food_array = [];

function submit()
{

    for(var i=1;i<=10;i++){
        var food_1 = document.getElementById("ITEM"+i).value;
        name_of_the_food_array.push(food_1);
    }
    
    console.log(name_of_the_food_array);

    document.getElementById("buttdiv").innerHTML = name_of_the_food_array;
    document.getElementById("butt1").style.display = "none";
    document.getElementById("butt2").style.display = "inline-block";
}
function sorting()
{
    name_of_the_food_array.sort()
    document.getElementById("buttdiv").innerHTML = name_of_the_food_array;  
}