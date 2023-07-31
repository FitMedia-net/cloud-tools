const roasForm = document.querySelector('[element="roas-form"]');
const inputAdSpend = document.querySelector('[element="ad-spend"]');
const inputRevenue = document.querySelector('[element="rev"]');
const inputAvgSaleValue = document.querySelector('[element="avg-sale-value"]');
const inputCogs = document.querySelector('[element="cogs"]');
const inputRoasMail = document.querySelector('[element="roas-mail"]');
const inputRoasCheckbox = document.querySelector('[element="roas-toc"]');
const btnRoasSubmit = document.querySelector('[element="roas-submit"]');
const labelRoasValue = document.querySelector('[element="roas-value"]');
const labelTargetRoasValue = document.querySelector('[element="target-roas-value"]');

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
