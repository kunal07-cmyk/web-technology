function generatePlan() {

  let city = document.getElementById("city").value.trim();
  let budget = document.getElementById("budget").value;
  let days = document.getElementById("days").value;
  let mood = document.getElementById("mood").value;

  if (city === "" || budget === "" || days === "") {
    alert("Please enter all details");
    return;
  }

  let stay = "";
  let places = "";
  let tips = "";

  // Budget logic
  if (budget < 5000) {
    stay = "Budget Hostel or Dorm";
  } else if (budget < 10000) {
    stay = "Mid-range Hotel";
  } else {
    stay = "Premium Hotel or Resort";
  }

  // Mood logic
  if (mood === "Relax") {
    places = "Beaches, parks, cafes, peaceful sightseeing";
    tips = "Visit places early morning to avoid crowds";
  }
  else if (mood === "Adventure") {
    places = "Hills, trekking spots, water sports";
    tips = "Wear comfortable shoes and carry water";
  }
  else if (mood === "Spiritual") {
    places = "Temples, heritage areas, meditation spots";
    tips = "Dress modestly and respect local customs";
  }
  else {
    places = "Street food zones, local markets, cafes";
    tips = "Try local dishes and avoid very crowded food stalls";
  }

  let dailyBudget = Math.floor(budget / days);

  document.getElementById("result").innerHTML = `
    <h3>📍 Travel Plan for ${city}</h3>
    <p><b>Trip Duration:</b> ${days} days</p>
    <p><b>Daily Budget:</b> ₹${dailyBudget}</p>
    <p><b>Stay Type:</b> ${stay}</p>
    <p><b>Recommended Places:</b> ${places}</p>
    <p><b>Travel Tips:</b> ${tips}</p>
    <p style="color:#0b5ed7; font-weight:bold;">Enjoy your smart trip! 🌍</p>
  `;
}
