function calculateCO2() {
    const form = document.getElementById("co2Form");
    const resultBox = document.getElementById("result");

    const personName = form.elements.personName.value.trim();
    const destination = form.elements.destination.value.trim();
    const distance = Number(form.elements.distance.value);
    const transportSelect = form.elements.transport;
    const emissionFactor = Number(transportSelect.value);
    const transportName = transportSelect.options[transportSelect.selectedIndex].text;

    if (!personName || !destination || !Number.isFinite(distance) || distance < 0) {
        resultBox.style.display = "block";
        resultBox.innerHTML = "Please enter a valid name, destination, and distance.";
        return;
    }

    const totalCO2 = distance * emissionFactor;

    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <strong>${personName}</strong>, your trip to <strong>${destination}</strong>
        by <strong>${transportName}</strong> creates approximately
        <strong>${totalCO2.toFixed(2)} kg CO2</strong>.
    `;
}