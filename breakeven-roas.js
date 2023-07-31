///////////////////////////////////////////////
// BREAK EVEN - ROAS
///////////////////////////////////////////////
const roasForm = document.querySelector('[dt-element="roas-form"]');
const inputAdSpend = document.querySelector('[dt-element="ad-spend"]');
const inputRevenue = document.querySelector('[dt-element="rev"]');
const inputAvgSaleValue = document.querySelector('[dt-element="avg-sale-value"]');
const inputCogs = document.querySelector('[dt-element="cogs"]');
const inputRoasMail = document.querySelector('[dt-element="roas-mail"]');
const inputRoasCheckbox = document.querySelector('[dt-element="roas-toc"]');
const btnRoasSubmit = document.querySelector('[dt-element="roas-submit"]');
const labelRoasValue = document.querySelector('[dt-element="roas-value"]');
const labelTargetRoasValue = document.querySelector('[dt-element="target-roas-value"]');

function isValidEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
  }
  if (!btnRoasSubmit) {
  } else {
    btnRoasSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isValidEmail(inputRoasMail.value) || !inputRoasCheckbox.checked) {
        return;
    } else {
        e.preventDefault();
        roasForm.dispatchEvent(new Event("submit", { bubbles: true }));

        labelRoasValue.textContent = Math.round(
            parseInt(inputAvgSaleValue.value) /
            (parseInt(inputAvgSaleValue.value) - (parseInt(inputCogs.value)))*100)/100

        labelTargetRoasValue.textContent = Math.round(
            parseInt(inputRevenue.value) / (parseInt(inputAdSpend.value))*100)/100
            
        // document.getElementById("field-current-roas").value = labelTargetRoasValue
        // document.getElementById("field-target-roas").value = labelRoasValue

    }
})};
