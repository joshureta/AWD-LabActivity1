let totalDonations = 0; 
const donationHistory = []; 

//Function to add a donation
function addDonation() {
    
    const donationInput = document.getElementById("donationInput");
    const donationAmount = parseFloat(donationInput.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount!");
        return;
    }

    //Add the donation to the total
    totalDonations += donationAmount;
    donationHistory.push(donationAmount);
    document.getElementById("totalDonations").textContent = totalDonations.toFixed(2);
    donationInput.value = "";

    //Display the donation history
    const donationList = document.getElementById("donationHistory");
    donationList.innerHTML = ""; 
    for (const donation of donationHistory) {
        const listItem = document.createElement("li");
        listItem.textContent = `PHP ${donation.toFixed(2)} `;
        donationList.appendChild(listItem);
    }
}
