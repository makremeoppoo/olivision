const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const analyzeOliveImage = async (filePath, mimeType) => {
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
                Analyze the olives in this image and return a JSON response.

                1. Calculate Maturity Index (MI) from 0.0 to 7.0 based on skin and pulp color.
                2. Predict the Acidity percentage (e.g., "0.25%").
                3. Categorize the quality:
                - 0.1% to 0.3%: "Premium Extra Virgin"
                - 0.31% to 0.5%: "High Quality Extra Virgin"
                - 0.51% to 0.8%: "Standard Extra Virgin"
                - Above 0.8%: "Virgin or Lampante"
                
                4. DISEASE & DAMAGE DETECTION: 
                - Specifically check for signs of "Bactrocera oleae" (Olive Fruit Fly), "Gloeosporium olivarum" (Olive Anthracnose), or "Spilocaea oleagina" (Peacock Spot).
                - In "harvest_recommendation", state clearly if a "maladie" (disease) exists and identify its type.
                - Set "needs_alert" to true if acidity > 0.6%, or if there is any visible disease or physical fruit damage.

                Return ONLY this JSON structure:
                {
                "cultivar": "string",
                "maturity_index": 0.0,
                "predicted_acidity": "0.0%",
                "quality_note": "Premium Extra Virgin / High Quality Extra Virgin / Standard Extra Virgin",
                "harvest_recommendation": "string (Include disease name and status here)",
                "harvest_recommendation_arabic": "string (Include disease name and status in Arabic)",
                "needs_alert": boolean,
                "alert_message": "string (Describe the disease or damage if needs_alert is true)"
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

