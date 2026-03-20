# GigShield AI

**AI-powered parametric income protection for food delivery partners**

---

# Overview

GigShield AI is a parametric micro-insurance platform designed specifically for **food delivery partners working on Swiggy and Zomato in Tier-1 Indian cities**.

It protects workers from **short-term income loss caused by external disruptions** such as heavy rainfall, extreme heat, pollution, and platform outages.

The system combines:

* AI-based risk scoring
* real-time parametric triggers
* multi-signal fraud detection
* automated payout processing

to deliver **fast, fair, and fraud-resistant income protection**.

---

# Problem Statement

Food delivery partners depend entirely on daily outdoor work for income.

However, disruptions such as:

* heavy rainfall
* extreme heat
* severe pollution
* platform outages

can reduce earnings by **20–30% per week**.

### Key Gaps:

* No insurance covers **short-term income loss**
* Claims processes are **slow and manual**
* Existing parametric systems are vulnerable to **GPS spoofing and coordinated fraud**

---

# Deep Persona Understanding

## Target User: Urban Food Delivery Rider

### Example: Ravi (Hyderabad)

* Works **8–10 hours/day**, peak during lunch and dinner
* Completes **18–25 deliveries/day**
* Weekly income: ₹6000–₹9000
* Uses mobile apps continuously (navigation + orders)
* Limited savings → depends on **daily cash flow**
* Avoids bad weather but cannot afford to stop working

### Behavioral Insights

* Highly **price sensitive** (₹50–₹100/week acceptable range)
* Low trust in insurance due to **slow payouts & complexity**
* Prefers **instant, predictable systems**
* Likely to renew only if **claims are fast and transparent**

### Pain Points

* Income drops instantly during disruptions
* No financial safety net
* Forced trade-off: **health risk vs income loss**

👉 Insight:
This is **insurance for earning opportunity, not assets**

---

# Proposed Solution

GigShield AI provides:

* Weekly micro-insurance policies
* AI-driven premium calculation
* Automatic disruption detection
* Zero-touch claim initiation
* Multi-signal fraud prevention

👉 Focus: **income loss only (not health, vehicle, or accidents)**

---

# End-to-End Workflow

1. Worker onboarded via mobile
2. AI calculates weekly risk and premium
3. Policy activated
4. System monitors real-time disruption data
5. Trigger detected → claim auto-initiated
6. Claim Trust Engine validates authenticity
7. Fraud Detection Engine checks anomalies
8. Income loss estimated
9. Decision Engine approves/flags claim
10. Payout processed instantly

---

# AI / ML Architecture

## 1. Risk Prediction Model (XGBoost)

### Input Features:

* city
* zone risk score
* rainfall history
* temperature trends
* AQI levels
* working hours
* weekly income
* order density (mock/simulated)

### Output:

* Risk Score (0–1)

### Usage:

* Used in premium calculation
* Higher risk → higher premium

---

## 2. Claim Trust Engine (Behavior Model)

### Input Signals:

* route continuity
* GPS trajectory smoothness
* zone entry consistency
* delivery activity logs
* session activity

### Output:

* Claim Trust Score (0–1)

### Purpose:

* verifies real worker presence in affected zone

---

## 3. Fraud Detection Model (Isolation Forest)

### Input Features:

* GPS jumps / inconsistencies
* repeated claims
* device fingerprint anomalies
* IP/network mismatch
* activity vs location mismatch

### Output:

* Fraud Risk Score

---

## 4. Income Loss Estimation Model

### Inputs:

* historical earnings (time-weighted)
* time-of-day patterns
* disruption severity
* working hours lost
* zone demand drop

### Logic:

Expected Income = historical baseline
Actual Income = observed activity
Loss = Expected - Actual
Payout = Coverage % × Loss

👉 Context-aware estimation (not naive subtraction)

---

# Data Strategy & Pipeline

## Data Sources

* Worker app data (activity, sessions)
* Device signals (GPS, motion patterns)
* External APIs (weather, AQI)
* Simulated platform data (orders, demand)

## Cold Start Strategy

* Use **synthetic + city-level aggregated data** initially
* Gradually replace with **real behavioral data**
* Continuous model retraining (weekly)

---

## Pipeline

Worker + Device + APIs
↓
Feature Engineering
↓
Risk Model → Premium
↓
Trigger Engine (real-time)
↓
Claim Trust Engine
↓
Fraud Detection
↓
Income Model
↓
Decision Engine
↓
Payout Engine
↓
Database + Dashboard

---

# Parametric Triggers

| Trigger Type    | Condition        | Impact          |
| --------------- | ---------------- | --------------- |
| Heavy Rain      | Rainfall > 80 mm | Delivery halted |
| Heat Wave       | Temp > 42°C      | Reduced hours   |
| Pollution       | AQI > 400        | Outdoor risk    |
| Platform Outage | App downtime     | No orders       |

---

# Adversarial Defense & Anti-Spoofing 🚨

## Multi-Layer Protection

### Layer 1: Claim Trust Engine

* validates real-world movement
* checks delivery behavior

### Layer 2: Fraud Detection

* detects spoofed GPS
* flags anomalies

### Layer 3: Fraud Ring Detection

* shared device/network clusters
* synchronized claims

---

## Decision Logic

| Condition              | Action       |
| ---------------------- | ------------ |
| High trust + low fraud | Auto-approve |
| Medium trust           | Soft-flag    |
| High fraud             | Reject       |

---

# Market Crash Handling 🚨

### Scenario:

Mass claims across a city (e.g., extreme rainfall)

## Controls:

* **Payout Cap:** ₹1500–₹3000/week per worker
* **Zone Risk Pooling:** spreads exposure
* **Dynamic Premiums:** high-risk zones pay more
* **Claim Throttling:** stagger payouts
* **Exposure Limits:** restrict high-risk enrollments

👉 Ensures platform liquidity and sustainability

---

# Business Model

* Weekly premium: ₹50–₹150 per worker
* Platform commission: 5–10%
* B2B partnerships with gig platforms
* Risk pooling + future reinsurance

### Unit Logic (Simplified):

* Avg premium: ₹100
* Avg payout probability: ~20%
* Sustainable via pooled risk + pricing adjustments

---

# Edge Case Handling

* Partial disruption → proportional payout
* Worker still active → reduced payout
* Conflicting signals → soft-flag
* No trigger → no payout

---

# External Integrations

* Weather API: OpenWeatherMap
* Platform Data: Mock Swiggy/Zomato APIs
* Payments: Razorpay sandbox

---

# Dashboard

## Worker

* active policy
* earnings protected
* claim status

## Admin

* claims overview
* fraud alerts
* zone analytics
* payout monitoring

---

# Technology Stack

Frontend: React
Backend: FastAPI
Database: PostgreSQL
ML: Python (XGBoost, scikit-learn)

---

# System Architecture

Worker App → Frontend → Backend
→ Risk Engine → Trigger Engine
→ Claim Trust → Fraud Detection
→ Income Model → Decision → Payout
→ Database + Dashboard

![system arch](https://github.com/user-attachments/assets/349cb250-e024-49fd-b38d-35081646f6b1)


---

# Development Plan

* Phase 1: Core architecture
* Phase 2: Policy + claims flow, ML models
* Phase 3: Anti-spoofing system, Dashboard & testing
# Designed a sample work flow for phase 1 in react 
---

# Why GigShield AI Wins

* Solves **real gig economy problem**
* Uses AI beyond buzzwords (risk + fraud + behavior)
* Built for **real-world fraud scenarios**
* Handles **market crash conditions**
* Designed for **scalability + automation**

---

# Expected Impact

* protects gig worker income
* enables instant payouts
* reduces fraud losses
* scalable micro-insurance model

---

# Final Pitch Line

**GigShield AI protects delivery workers’ income using AI-driven parametric insurance with built-in anti-spoofing fraud defense.**
