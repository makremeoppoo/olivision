const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const analyzeOliveImage = async (currentLang, filePath, mimeType) => {
    try {
        // Note: As of late 2024/2025, use "gemini-1.5-flash" or "gemini-1.5-pro"
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const imageBuffer = fs.readFileSync(filePath);

        const imagePart = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: mimeType
            }
        };

        const prompt = `
              Act as an expert agronomist and olive oil quality grader. 
                Analyze the olives in this image and return ONLY a JSON response.

                1. MATURITY & YIELD:
                - Calculate Maturity Index (MI) from 0.0 (deep green) to 7.0 (black skin/dark pulp).
                - Estimate Oil Yield: Based on the MI and cultivar, predict how many kilograms of olives are needed for 1 liter of oil, and estimate the oil percentage (e.g., "1kg produces ~0.15-0.20L").

                2. ACIDITY & QUALITY:
                - Predict Acidity based on fruit integrity and ripeness.
                - Quality Categories: 
                    - 0.1%-0.3%: "Premium Extra Virgin"
                    - 0.31%-0.5%: "High Quality Extra Virgin"
                    - 0.51%-0.8%: "Standard Extra Virgin"
                    - >0.8%: "Virgin or Lampante"

                3. PHYTOSANITARY ANALYSIS:
                - Scan for: "Bactrocera oleae" (Fly stings/holes), "Gloeosporium olivarum" (Anthracnose rot), or "Spilocaea oleagina" (Peacock Spot).
                - "needs_alert" must be true if: Acidity > 0.6%, any disease is detected, or physical bruising/frost damage is visible.

                4. OUTPUT SPECIFICATIONS:
                - The field "harvest_recommendation" MUST be in ${currentLang}.
                - It must include: Harvest timing, disease status, and the estimated oil yield (how much oil 1kg provides).
                - The field "alert_message" MUST be in ${currentLang}.

                Return ONLY this JSON structure:
                {
                "cultivar": "string",
                "maturity_index": 0.0,
                "estimated_yield": "string (e.g., 1kg ≈ 0.18L)",
                "predicted_acidity": "0.0%",
                "quality_note": "string",
                "harvest_recommendation": "string (In ${currentLang}: Timing + Disease status + Yield explanation)",
                "needs_alert": boolean,
                "alert_message": "string (Describe disease or damage in detail if needs_alert is true)"
                }
        `;
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;

        return JSON.parse(response.text());

    } catch (error) {
        console.error("Error analyzing image:", error);
        throw error;
    }
};


module.exports = { analyzeOliveImage };

