$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').fadeToggle(500);
        $('.hamburger-menu').toggleClass('active');
    });
});




var allPanels = $('.accordion > .dd').hide();

	$('.accordion > .dt > a').click(function() {
		// allPanels.slideUp();

        
   // $(this).filter('.open').removeClass('open').addClass('closing')
   // $('.accordion > .dt > a').removeClass('open');
 // $(this).not(".closing").addClass('open').parent().next().slideDown();
   // $('.accordion > .dt > a').removeClass('closing');
    
   $(this).toggleClass('open') 
   $(this).parent().next().slideToggle() 

   return false; 
	});






    
function countUpToValue(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const duration = 2000; // Adjust the duration (in milliseconds) for the counting animation
    const startTime = performance.now();
    const startValue = parseFloat(element.innerText.replace(/[^0-9.]/g, ""));
    
    function updateCounter(timestamp) {
        const elapsedTime = timestamp - startTime;
        if (elapsedTime < duration) {
            const progress = elapsedTime / duration;
            const newValue = startValue + (targetValue - startValue) * progress;
            element.innerText = "-$" + newValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true });
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = "-$" + targetValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true });
        }
    }

    requestAnimationFrame(updateCounter);
}

document.getElementById("calculateBtn").addEventListener("click", calculateSavings);

function calculateSavings() {
    // Get the input values
    const pricePerNight = parseFloat(document.getElementById("price").value.replace(/[^\d.]/g, ""));
    const numberOfRooms = parseInt(document.getElementById("rooms").value.replace(/[^\d]/g, ""));
    const platformPercentage = parseFloat(document.getElementById("percentage").value.replace(/[^\d.]/g, ""));

    // Calculate savings
    const savingsPerDay = pricePerNight * numberOfRooms * platformPercentage / 100;
    const savingsPerWeek = savingsPerDay * 7;
    const savingsPerMonth = savingsPerDay * 30;
    const savingsPerYear = savingsPerDay * 365;

    // Animate the results
    countUpToValue("savingsPerDay", savingsPerDay);
    countUpToValue("savingsPerWeek", savingsPerWeek);
    countUpToValue("savingsPerMonth", savingsPerMonth);
    countUpToValue("savingsPerYear", savingsPerYear);
}

// Add event listeners for input fields
const priceInput = document.getElementById("price");
const percentageInput = document.getElementById("percentage");

priceInput.addEventListener("input", formatCurrency);
percentageInput.addEventListener("input", formatPercentage);

function formatCurrency(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9.]/g, "");
    input.value = "$" + input.value;
}

function formatPercentage(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9.]/g, "");
    input.value = input.value + "%";
}






document.addEventListener("DOMContentLoaded", function () {
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };

    document.querySelector("form").addEventListener("submit", handleSubmit);
});