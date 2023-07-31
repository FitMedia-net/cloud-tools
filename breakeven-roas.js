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

function compareValues(roas, targetRoas) {
    document.getElementById('resultsTitle').innerHTML = 'The Results Are In...';

    document.getElementById('roas-calc-results-positive').style.display = 'none';
    document.getElementById('roas-calc-results-negative').style.display = 'none';
    document.getElementById('roas-calc-results-equal').style.display = 'none';

    // If ROAS exceeds breakeven.
    if (roas > targetRoas) {
        document.getElementById('roas-calc-results-positive').style.display = 'block';
    }
    // If ROAS does not exceed breakeven.
    else if (roas < targetRoas) {
        document.getElementById('roas-calc-results-negative').style.display = 'block';
    }
    // If ROAS equals breakeven.
    else {
        document.getElementById('roas-calc-results-equal').style.display = 'block';
    }
}

if (btnRoasSubmit) {
    btnRoasSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        if (!isValidEmail(inputRoasMail.value) || !inputRoasCheckbox.checked) {
            return;
        }

        roasForm.dispatchEvent(new Event("submit", { bubbles: true }));

        const roas = Math.round(
            (parseInt(inputRevenue.value) / parseInt(inputAdSpend.value))*100)/100;

        const targetRoas = Math.round(
            (parseInt(inputAvgSaleValue.value) /
            (parseInt(inputAvgSaleValue.value) - parseInt(inputCogs.value)))*100)/100;
            

        labelRoasValue.textContent = roas;
        labelTargetRoasValue.textContent = targetRoas;

        compareValues(roas, targetRoas);
    });
}
