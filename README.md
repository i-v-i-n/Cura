# 🩺 CURA-AI — Predictive Health Agent

**Your Health, Just a Click Away**

CURA-AI is an AI-powered predictive health assistant that analyzes user symptoms against historical health data to assess severity, generate personalized reports, and trigger emergency interventions when required.

The backend is powered by **n8n workflow automation**, enabling rapid, low-code orchestration of AI, database, and messaging services.

---

## 🚀 Overview

Traditional healthcare systems are reactive — users must interpret symptoms themselves, often leading to delayed or unnecessary care. CURA-AI transforms this into a **predictive, automated health safety system**.

The system:

- Captures current symptoms  
- Cross-references historical health data  
- Predicts severity with confidence  
- Generates a health report  
- Triggers emergency alerts when needed  

---

## ✨ Key Features

### 🔹 Smart Data Ingestion
- Current symptom capture  
- Historical health record linking  
- Continuous symptom tracking  

### 🔹 AI-Powered Prediction
- Severity classification: Mild / Moderate / Severe  
- Confidence score generation  
- Personalized health report  
- Automatic emergency SMS alerts  

### 🔹 Emergency Referral Engine
- Conditional severity check  
- Nearest hospital lookup  
- Specialist recommendation  
- Instant SMS/WhatsApp alert  

---

## 🏗️ System Architecture

### Frontend
- User symptom input interface  
- Report visualization dashboard  
- Emergency guidance UI  

---

### Backend — n8n Workflow

The backend uses **n8n** as the orchestration engine.

#### 🔄 Workflow Pipeline
Webhook → Validate Input → DB Lookup → AI Model →
Post-Processing → Emergency Check →
├─ Normal Response → Save to DB → Respond
└─ Emergency → Send SMS/WhatsApp → Hospital Lookup


#### 🧩 Main Nodes

- **Webhook** — receives user symptoms  
- **Validate Input** — checks payload  
- **Select rows from table** — fetches history  
- **Code (JavaScript)** — preprocessing  
- **Message a model** — AI severity prediction  
- **Check if Emergency** — conditional routing  
- **Send SMS/MMS/WhatsApp** — urgent alert  
- **Insert rows in table** — logging  
- **Respond to Webhook** — final response  

---

## ⚙️ Why n8n?

- ⚡ Rapid prototyping in hours/days  
- 🔌 Pre-built connectors (Twilio, DB, APIs)  
- 🛡️ Built-in retry & error handling  
- 👁️ Visual audit trail for debugging  
- 🧩 Low-code and easily extensible  

---

## 📦 Tech Stack

**Frontend**
- Web / Mobile UI (your implementation)

**Backend**
- n8n  
- JavaScript nodes  
- AI Model API  
- PostgreSQL (or compatible DB)  
- Twilio (SMS/WhatsApp)  

---
**📱 Example Emergency Flow**

When:
Severity = Severe, OR
Confidence score is low
The system will:
Trigger emergency branch
Send SMS alert to user
Fetch nearest hospitals
Return specialist details
Log the case in database

**🧪 Future Improvements**

Real-time vitals integration
Wearable device support
Multilingual symptom input
Doctor appointment booking
Risk trend analytics

**⚠️ Disclaimer**

CURA-AI provides predictive assistance and is not a substitute for professional medical advice. Always consult a qualified healthcare provider for medical decisions.

**🙌 Acknowledgements**

n8n workflow automation
Twilio messaging
AI model providers
