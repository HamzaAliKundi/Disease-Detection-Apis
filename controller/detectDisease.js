const asyncHandler = require("express-async-handler");

const detectHeartDisease = asyncHandler(async (req, res) => {
  const {
    age,
    chestPain,
    majorVessels,
    cholesterol,
    thalassemia,
    heartRate,
    stDepression,
  } = req.body;

  // Sample values

  // Scoring weights
  const ageWeight = 4;
  const chestPainWeights = {
    "Typical Angina": 3,
    "Atypical Angina": 2,
    "Non-anginal Pain": 1,
    Asymptomatic: 0,
  };
  const majorVesselsWeight = 1;
  const cholesterolWeight = 1;
  const thalassemiaWeights = {
    Normal: 0,
    Fixed: 1,
    Reversible: 2,
  };
  const heartRateWeight = 1;
  const stDepressionWeight = 1;

  // Calculate score
  let score = 0;

  score += ageWeight * (age / 10);
  score += chestPainWeights[chestPain];
  score += majorVesselsWeight * majorVessels;
  score += cholesterolWeight * (cholesterol / 100);
  score += thalassemiaWeights[thalassemia];
  score += heartRateWeight * (heartRate / 100);
  score += stDepressionWeight * (stDepression / 5);

  // Determine the heart disease detection level based on the score
  let detectionLevel;

  if (score < 20) {
    detectionLevel = 0; // Low risk
  } else if (score < 40) {
    detectionLevel = 1; // Medium risk
  } else {
    detectionLevel = 2; // High risk
  }

  console.log("Detection Level: ", detectionLevel);
  res.status(200).json({ level: detectionLevel });
});

module.exports = {
  detectHeartDisease,
};
