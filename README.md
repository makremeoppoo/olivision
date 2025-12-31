<!-- @format -->

# OliVision (Zaitounak) 🫒

**Precision AI for Sustainable Olive Farming & Quality Control**

OliVision is an innovative web solution designed to bridge the gap between traditional olive farming and modern agrotech. By utilizing **Multimodal AI (Gemini 2.5 Flash)**, the app empowers farmers to predict the chemical quality of their olive oil directly from the tree, ensuring they capture the "Extra Virgin" window at the perfect moment.

---

## 🌟 The Vision

The timing of the olive harvest determines the difference between a high-value **Extra Virgin** oil and a low-value **Lampante** oil. OliVision removes the guesswork by providing instant, image-based chemical predictions.

## ✨ Core Features

- **Maturity Index (MI) Detection:** Calculates ripeness on a 0.0–7.0 scale using visual color analysis.
- **Predictive Acidity Modeling:** Estimates free fatty acid levels to ensure they stay below the **0.8%** Extra Virgin threshold.
- **Quality Grading:** Instantly classifies samples into _Premium, High Quality, or Standard_ grades.

- **DISEASE & DAMAGE DETECTION:**
  Specifically check for signs of "Bactrocera oleae" (Olive Fruit Fly), "Gloeosporium olivarum" (Olive Anthracnose), or "Spilocaea oleagina" (Peacock Spot).
  In "harvest_recommendation", state clearly if a "maladie" (disease) exists and identify its type.
  Set "needs_alert" to true if acidity > 0.6%, or if there is any visible disease or physical fruit damage.

- **Smart Harvest Alerts:** A built-in logic system that flags "High Risk" crops when acidity approaches critical limits.
- **Actionable Recommendations:** Provides agronomist-level advice on harvest urgency and processing speed.

## 🛠️ Tech Stack

- **Mobile:** Modern Web Technologies (HTML5, CSS3, JavaScript/React)
- **Server:** Node.js / Express.js
- **AI Engine:** Google Generative AI (Gemini 2.5 Flash)
- **Logic:** Custom JSON-based prompt engineering for structured agronomic data.

## 🧪 Technical Logic

Our system follows the **International Olive Council (IOC)** standards. The AI evaluates:

1.  **Exocarp Color:** Transition from deep green to black.
2.  **Fruit Integrity:** Detecting bruises or pest damage that may increase acidity.
3.  **Cultivar Specifics:** Adapting analysis based on identified olive varieties (e.g., Chemlali, Hojiblanca).

## 🚀 Installation & Setup

1. **Clone & Install:**
   ```bash
   git clone [https://github.com/yourusername/olivision.git](https://github.com/yourusername/olivision.git)
   cd olivision-backend
   npm install
   node server.js
   ```
