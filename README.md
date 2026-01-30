<!-- @format -->

# OliVision (Zaitounak) 🫒

**Precision AI for Sustainable Olive Farming & Quality Control**

OliVision is an innovative web solution designed to bridge the gap between traditional olive farming and modern agrotech. By utilizing **Multimodal AI (Google Gemini 3 Flash – Preview)**, the app empowers farmers to predict the chemical quality of their olive oil directly from the tree, helping them capture the **“Extra Virgin”** window at the perfect moment.

---

## 🌟 The Vision

The timing of the olive harvest determines the difference between a high-value **Extra Virgin** oil and a low-value **Lampante** oil. OliVision removes the guesswork by providing instant, image-based quality predictions powered by **Gemini 3 Flash**.

## ✨ Core Features

- **Maturity Index (MI) Detection:** Calculates ripeness on a 0.0–7.0 scale using visual color analysis.
- **Predictive Acidity Modeling:** Estimates free fatty acid levels to ensure they remain below the **0.8%** Extra Virgin threshold.
- **Quality Grading:** Instantly classifies samples into _Premium, High Quality, or Standard_ grades.

- **Disease & Damage Detection:**
  Detects signs of:
  - *Bactrocera oleae* (Olive Fruit Fly)
  - *Gloeosporium olivarum* (Olive Anthracnose)
  - *Spilocaea oleagina* (Peacock Spot)

  In `harvest_recommendation`, the system clearly states whether a **maladie** exists and identifies its type.  
  The flag `needs_alert` is set to **true** if acidity exceeds **0.6%** or if visible disease or physical damage is detected.

- **Smart Harvest Alerts:** Flags high-risk crops before quality degradation occurs.
- **Actionable Recommendations:** Provides agronomist-level guidance on harvest timing and processing urgency.

## 🛠️ Tech Stack

- **Frontend:** React.js, Material UI (MUI)
- **Backend:** Node.js / Express.js (deployed on Render)
- **AI Engine:** Google Generative AI — **Gemini 3 Flash (Preview)**
- **Deployment:** Vercel (Frontend)
- **Logic Layer:** Custom JSON-based prompt engineering for structured agronomic outputs

## 🧪 Technical Logic

OliVision aligns with **International Olive Council (IOC)** standards. The AI evaluates:

1. **Exocarp Color:** Transition from deep green to black
2. **Fruit Integrity:** Detection of bruises, pests, and fungal damage
3. **Cultivar Specificity:** Adaptive analysis for varieties such as *Chemlali* and *Hojiblanca*

## 🚀 Installation & Setup

```bash
git clone https://github.com/makremeoppoo/olivision.git

cd olivision-backend
# create .env
yarn
node server.js

cd olivision-frontend
# create .env
yarn
yarn dev
