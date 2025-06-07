import { useState } from "react";

const RecommendationForm = () => {
  const [FinalRecommendation, setFinalRecommendation] = useState("");

  const sendPreferences = async () => {
    const data = {
      mood: "energized",
      diet_type: "vegan",
      preferred_time: "dinner",
      serving_size: "solo",
      health_goal: "weight_loss",
      cost_range_min: 5,
      cost_range_max: 15,
      spice_level: "medium",
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setFinalRecommendation(result.name);

      console.log("Recommended food:", result);
    } catch (error) {
      console.error("Error sending preferences:", error);
    }
  };

  return (
    <div className="p-8 flex items-center justify-center">
      <button onClick={sendPreferences}>Get Recommendation</button>
      <div>{FinalRecommendation && <>🍽️ {FinalRecommendation}</>}</div>
    </div>
  );
};

export default RecommendationForm;
