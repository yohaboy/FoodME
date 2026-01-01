import { useState } from "react";

interface MyChoice {
  mood: String;
  diet_type: String;
  preferred_time: String;
  serving_size: String;
  health_goal: String;
  cost_range_min: Number;
  cost_range_max: Number;
  spice_level: String;
}

function RecommendationForm(props: MyChoice) {
  const [FinalRecommendation, setFinalRecommendation] = useState("");

  const sendPreferences = async () => {
    const data = {
      mood: props.mood,
      diet_type: props.diet_type,
      preferred_time: props.preferred_time,
      serving_size: props.serving_size,
      health_goal: props.health_goal,
      cost_range_min: props.cost_range_min,
      cost_range_max: props.cost_range_max,
      spice_level: props.spice_level,
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
}

export default RecommendationForm;
