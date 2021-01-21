//First problem: Kilometer to meter convert

function KilometerToMeter(kilo) {
    // if user give 0 or a invalid input,then show this message
    if (kilo <= 0) {
        console.log('Please enter a valid number');
    }
    // if input is valid
    else {
        var meter = kilo * 1000;
        return meter;
    }

}
var result = KilometerToMeter(20);
console.log('Meter :', result);








//Second problem: The budget calculator


function budgetCalculator(watch, phone, laptop) {

    // Multiplying all parameter with their fixed price

    var watchprice = watch * 50;
    var phoneprice = phone * 100;
    var laptopprice = laptop * 500;

    var total = watchprice + phoneprice + laptopprice;

    return total;

}
var budget = budgetCalculator(3, 2, 1);
console.log('Total budget is :', budget);









//Third problem: Total cost in hotel

function hotelCost(days) {


    if (days <= 10) {
        var amount = days * 100;
        return amount;

    } else if (days <= 20) {
        var amount2 = (days - 10) * 80;
        var secondTotal = (10 * 100) + amount2;
        return secondTotal;
    } else {
        var ammount3 = (days - 20) * 50;
        var finalTotal = (10 * 100) + (10 * 80) + ammount3;
        return finalTotal;
    }

}

var result = hotelCost(22);
console.log("Hotel Cost: ", result);











// Fourth problem: Finding the largest name in a array

var arr = ['Sakib', 'Rakib', 'Robinhood', 'Kolinfarzzzz', 'DonaldTrump'];


function megaFriend(arr) {

    var char = 0;
    var long;
    // If the array is empthy and does not contain name
    if (arr === undefined || arr.length == 0) {
        console.log("Enter a valid array with name");
    }
    // If the array is valid and contain name
    else {
        for (var i = 0; i < arr.length; i++) {

            if (arr[i].length > char) {
                var char = arr[i].length;
                long = arr[i];
            }

        }
    }
    return long;


}

var LargeName = megaFriend(arr);
console.log('The largest name is this array is :', LargeName);