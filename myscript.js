const product=[
    {
    id:0,
    title:'Apple',
    price:$5,
    },
    {
        id:1,
    title:'Orange',
    price:$6,

    },
    {
        id:2,
        title:'Pineapple',
        price:$10,
    
    },
    {
        id:3,
        title:'Watermelon',
        price:$20,
    
    },
    {
        id:4,
        title:'Strawberry',
        price:$15,
    
    },
    

];


function addToCartApple(Apple) {
   

    while (true) {
        // Prompt the user for the product quantity
        quantity = prompt("How many Apple Juice would you like?");

        // Check if the user entered a quantity
        if (quantity === null || quantity.trim() === "") {
            alert("Product not added to order. Quantity not provided.");
            return; // Exit the function if quantity is not provided
        }

        // Use a regular expression to check if the input is numeric
        if (/^\d+$/.test(quantity)) {
            // Convert the quantity to a number
            quantity = parseInt(quantity);

            // Check if the quantity is a positive number
            if (!isNaN(quantity) && quantity > 0) {
                // Process the product with the entered quantity
                alert("Product added to order. Quantity: " + quantity);
                return; // Exit the function if a valid quantity is provided
                
        
            } else {
                prompt("Invalid quantity. Please enter a number.");
            }
        } else {
            alert("Please enter a numeric value.");

      
        }
    }
      
       
}

function addToCartOrange(Orange) {
    var quantity;

    while (true) {
        // Prompt the user for the product quantity
        quantity = prompt("How many Orange Juice would you like?");

        // Check if the user entered a quantity
        if (quantity === null || quantity.trim() === "") {
            alert("Product not added to order. Quantity not provided.");
            return; // Exit the function if quantity is not provided
        }

        // Use a regular expression to check if the input is numeric
        if (/^\d+$/.test(quantity)) {
            // Convert the quantity to a number
            quantity = parseInt(quantity);

            // Check if the quantity is a positive number
            if (!isNaN(quantity) && quantity > 0) {
                // Process the product with the entered quantity
                alert("Product added to order. Quantity: " + quantity);
                return; // Exit the function if a valid quantity is provided
            } else {
                prompt("Invalid quantity. Please enter a number.");
            }
        } else {
            alert("Please enter a numeric value.");

      
        }
    }
  
}   
function addToCartPineapple() {
    var quantity;

    while (true) {
        // Prompt the user for the product quantity
        quantity = prompt("How many Pineapple Juice would you like?");

        // Check if the user entered a quantity
        if (quantity === null || quantity.trim() === "") {
            alert("Product not added to order. Quantity not provided.");
            return; // Exit the function if quantity is not provided
        }

        // Use a regular expression to check if the input is numeric
        if (/^\d+$/.test(quantity)) {
            // Convert the quantity to a number
            quantity = parseInt(quantity);

            // Check if the quantity is a positive number
            if (!isNaN(quantity) && quantity > 0) {
                // Process the product with the entered quantity
                alert("Product added to order. Quantity: " + quantity);
                return; // Exit the function if a valid quantity is provided
            } else {
                prompt("Invalid quantity. Please enter a number.");
            }
        } else {
            alert("Please enter a numeric value.");

      
        }
    }
}

function addToCartWatermelon() {
    var quantity;

    while (true) {
        // Prompt the user for the product quantity
        quantity = prompt("How many Watermelon Juice would you like?");

        // Check if the user entered a quantity
        if (quantity === null || quantity.trim() === "") {
            alert("Product not added to order. Quantity not provided.");
            return; // Exit the function if quantity is not provided
        }

        // Use a regular expression to check if the input is numeric
        if (/^\d+$/.test(quantity)) {
            // Convert the quantity to a number
            quantity = parseInt(quantity);

            // Check if the quantity is a positive number
            if (!isNaN(quantity) && quantity > 0) {
                // Process the product with the entered quantity
                alert("Product added to order. Quantity: " + quantity);
                return; // Exit the function if a valid quantity is provided
            } else {
                prompt("Invalid quantity. Please enter a number.");
            }
        } else {
            alert("Please enter a numeric value.");

      
        }
    }
}
function addToCartStrawberry(){
    var quantity;

    while (true) {
        // Prompt the user for the product quantity
        quantity = prompt("How many Strawberry Juice would you like?");

        // Check if the user entered a quantity
        if (quantity === null || quantity.trim() === "") {
            alert("Product not added to order. Quantity not provided.");
            return; // Exit the function if quantity is not provided
        }

        // Use a regular expression to check if the input is numeric
        if (/^\d+$/.test(quantity)) {
            // Convert the quantity to a number
            quantity = parseInt(quantity);

            // Check if the quantity is a positive number
            if (!isNaN(quantity) && quantity > 0) {
                // Process the product with the entered quantity
                alert("Product added to order. Quantity: " + quantity);
                return; // Exit the function if a valid quantity is provided
            } else {
                prompt("Invalid quantity. Please enter a number.");
            }
        } else {
            alert("Please enter a numeric value.");

      
        }
    }
 
}



    function addToCheckout(itemPrice,quantity)
{
    var name="";
     name=prompt("Please enter your name"); 
     if (name.length < 3 || name.length > 20) {
        alert ("Username must be between 3 and 20 characters.");
    }
     if (!/^[a-zA-Z0-9_]+$/.test(name)||!/^\d+$/.test(name))
     {
        alert("Valid user name");
        //taxAmount = itemPrice * (taxRate / 100);
        //alert(taxAmount);

        // Calculate total amount
        // totalAmount = itemPrice + taxAmount;
         //alert(totalAmount);
    
        //return totalAmount;

     }
     else{
        alert("Invalid name");
     }
     
          
       

 }
 
 function calculateTotalAmountWithTax(itemPrice, taxRate) {
    // Calculate tax amount
    var taxAmount = itemPrice * (taxRate / 100);
    alert(taxAmount);

    // Calculate total amount
    var totalAmount = itemPrice + taxAmount;
    alert();

    return totalAmount;
}