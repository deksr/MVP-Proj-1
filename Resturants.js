console.log("Javascript file linked")

//-------template-the constructor
var Menu = function Menu(name, price) {
    this.name = name;
    this.price = price;
};

Menu();
//--------creating new objects
var sicilianPizza = new Menu("Sicilian-pizza", 12.50);
var deepdishpizza = new Menu("Deep-Dish-pizza ", 15.50);
var newyorkstylepizza = new Menu("New-York-style-pizza", 14.50);
var nepolitanipizza = new Menu("Neapolitan-pizza", 13.50);


//--------select the domquery/addeventlistner/event object
//-for sisclian image---

var sicilian = document.querySelector("#sicilian-pizza");
sicilian.addEventListener('click', function(event) {
    // console.log(event.currentTarget);
    if (event.target === sicilian) {
        var displayline = document.getElementById("display");
        var totalline = document.createElement("li");
        totalline.textContent = sicilianPizza.name + " " + "$" + sicilianPizza.price;
        displayline.appendChild(totalline);

        //--
        emptyarray.push(sicilianPizza.price);
        // console.log(emptyarray);

    }
});




//----for deepdish image----

var deepdish = document.querySelector("#deepdishpizza");
deepdish.addEventListener('click', function(event) {
    // console.log(event.currentTarget);
    if (event.target === deepdish) {
        var displayline = document.getElementById("display");
        var totalline = document.createElement("li");
        totalline.textContent = deepdishpizza.name + " " + "$" + deepdishpizza.price;
        displayline.appendChild(totalline);

        //--
        emptyarray.push(deepdishpizza.price);
        // console.log(emptyarray);

    }
});




//----for newyorkstylepizza image----

var newyork = document.querySelector("#new-york-style-pizza");
newyork.addEventListener('click', function(event) {
    // console.log(event.currentTarget);
    if (event.target === newyork) {
        var displayline = document.getElementById("display");
        var totalline = document.createElement("li");
        totalline.textContent = newyorkstylepizza.name + " " + "$" + newyorkstylepizza.price;
        displayline.appendChild(totalline);

        //--
        emptyarray.push(newyorkstylepizza.price);
        // console.log(emptyarray);
    }
});




//----for nepolitani image----

var nepolitani = document.querySelector("#neapolitan-pizza");
nepolitani.addEventListener('click', function(event) {
    // console.log(event.currentTarget);
    if (event.target === nepolitani) {
        var displayline = document.getElementById("display");
        var totalline = document.createElement("li");
        totalline.textContent = nepolitanipizza.name + " " + "$" + nepolitanipizza.price;
        displayline.appendChild(totalline);

        //--
        emptyarray.push(nepolitanipizza.price);
        // console.log(emptyarray);

    }
});



//---------------calculate price 
//---create empty array---
//---sicilian calculation

var emptyarray = [];
var totalitems = document.querySelector(".total");
var taxbox = document.querySelector(".taxinhere");
var subtotalbox = document.querySelector(".subtotalhere");
var subtotal;

sicilian.addEventListener('click', function() {
    // console.log(emptyarray);
    var total = 0;
    for (var i = 0; i < emptyarray.length; i++) {
        total = total + emptyarray[i];
        total = Number((total).toFixed(2));  
        totalitems.textContent = total;
        // console.log(total);

        //----tax
        var tax = 0.0875 * total;
        tax = Number(tax.toFixed(2));
        // tax=parseInt(tax);//this is changed
        taxbox.textContent = tax;
        // console.log(tax);

        //---subtotal
        // var subtotal=total+Number(tax)//****original
        //note: changed on html from subtotal to grand-total(have been using the wrong word.)
        subtotal = total + Number(tax);
        // console.log(parseInt(tax));

        // edits-subtotal=subtotal.toFixed(2)
        subtotalbox.textContent = subtotal;
        // console.log(subtotal);
    }
});




//-----deepdish calculation

deepdish.addEventListener('click', function() {
    // console.log(emptyarray);
    var total = 0;
    for (var i = 0; i < emptyarray.length; i++) {
        total = total + emptyarray[i];
        total = Number((total).toFixed(2));   
        totalitems.textContent = total;
        // console.log(total);

        //----tax
        var tax = 0.0875 * total;
        tax = Number(tax.toFixed(2));
        taxbox.textContent = tax;
        // console.log(tax);

        //---subtotal
        subtotal = total + Number(tax);
        // console.log(parseInt(tax));

        // edits-subtotal=subtotal.toFixed(2)
        subtotalbox.textContent = subtotal;
        // console.log(subtotal);
    }
});


//----newyork style calculation

newyork.addEventListener('click', function() {
    // console.log(emptyarray);
    var total = 0;
    for (var i = 0; i < emptyarray.length; i++) {
        total = total + emptyarray[i];
        total = Number((total).toFixed(2));  
        totalitems.textContent = total;
        // console.log(total); 

        //----tax
        var tax = 0.0875 * total;
        tax = Number(tax.toFixed(2));
        taxbox.textContent = tax;
        // console.log(tax);

        //---subtotal
        // var subtotal=total+Number(tax)
        subtotal = total + Number(tax);
        // console.log(parseInt(tax));

        // edits-subtotal=subtotal.toFixed(2)
        subtotalbox.textContent = subtotal;
        // console.log(subtotal);
    }
});


//----nepolitani calculation

nepolitani.addEventListener('click', function() {
    var total = 0;
    for (var i = 0; i < emptyarray.length; i++) {
        total = total + emptyarray[i];
        total = Number((total).toFixed(2));   
        totalitems.textContent = total;
        // console.log(total);

        //----tax
        var tax = 0.0875 * total;
        tax = Number(tax.toFixed(2)); //used to fixed...//****
        // tax=parseInt(tax);//this is changed
        taxbox.textContent = tax;
        // console.log(tax);

        //---subtotal
        // var subtotal=total+Number(tax)//****original
        subtotal = total + Number(tax); //****
        // console.log(parseInt(tax)); //****

        // edits-subtotal=subtotal.toFixed(2)
        subtotalbox.textContent = subtotal;
        // console.log(subtotal);

    }
});


/////--tip calculation---

var tiphtml = document.querySelector(".revealtipamount");
var tips; //global 

var tip = function() {
    // console.log(subtotal);
    tips = (0.2 * subtotal).toFixed(2);
    // console.log(tips);
    tips = Number(tips);
    // console.log(tips);
    tiphtml.textContent = tips;
    tips = (tips + subtotal).toFixed(2);
    // console.log(tips);
    subtotalbox.textContent = tips;

};

///-----------tip button
var buttonfortips = document.querySelector(".tipbutton");
buttonfortips.addEventListener('click', tip);



////--------------------cashexchange------------


var take = document.querySelector(".takecash");
var give = document.querySelector(".returncash");

var cashexchange = function(event) {
    var cash = Number(event.target.value);
    // console.log(cash);
    // console.log(subtotal);
    cash = cash - tips;
    // console.log(cash);
    give.value = cash.toFixed(2);
 console.log(cash.toFixed(2));
};

take.addEventListener('keydown', cashexchange);