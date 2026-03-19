# GigShield AI

**AI-powered parametric income protection for food delivery partners**

---

# Overview

GigShield AI is a parametric micro-insurance platform designed specifically for **food delivery partners working on Swiggy and Zomato in Tier-1 cities**.

It protects workers from **short-term income loss caused by external disruptions** such as heavy rainfall, extreme heat, pollution, and platform outages.

The system uses **AI-driven risk scoring, automated parametric triggers, and a multi-signal claim trust engine** to enable fast, fair, and fraud-resistant payouts.

---

# Problem Statement

Food delivery partners rely on outdoor work for daily income. However, disruptions such as:

* heavy rainfall
* extreme heat
* severe pollution
* platform outages

can reduce their earnings by **20–30% per week**.

There is currently **no protection for short-term income loss**, and existing parametric systems are vulnerable to **GPS spoofing and coordinated fraud**.

---

# Proposed Solution

GigShield AI provides:

* Weekly micro-insurance policies
* AI-based risk assessment for dynamic premiums
* Automated parametric triggers for claim activation
* Multi-signal anti-spoofing verification
* Automated payout simulation

The platform ensures **zero-touch claims with strong fraud protection**.

---

# Persona

**Target Users:**
Food delivery riders working on Swiggy / Zomato in urban cities like Hyderabad and Mumbai.

**Example:**
Ravi, a delivery rider earning ₹7000/week, depends entirely on outdoor conditions to complete orders.

---

# Workflow

1. Rider registers and activates weekly policy
2. System monitors real-time environmental data
3. Disruption trigger is activated (e.g., heavy rain)
4. Claim Trust Engine verifies authenticity
5. Fraud detection checks anomalies
6. Income loss is estimated
7. Claim is approved
8. Payout is processed automatically

---

# Onboarding Flow

1. Mobile number login (OTP)
2. Select platform (Swiggy / Zomato)
3. Enter weekly income
4. Select working city/zone
5. AI calculates risk score
6. Weekly premium displayed
7. One-tap policy activation

---

# Weekly Premium Model

```id="p8n1zv"
Premium = Base × City Risk × Income Factor × Risk Score × Behavior Factor
```

* Weekly pricing aligned with gig economy
* Lower risk zones → lower premium
* Consistent behavior → reduced cost

---

# Parametric Triggers

| Trigger Type    | Condition          | Impact                |
| --------------- | ------------------ | --------------------- |
| Heavy Rain      | Rainfall > 80 mm   | Delivery halted       |
| Heat Wave       | Temperature > 42°C | Reduced working hours |
| Pollution       | AQI > 400          | Outdoor risk          |
| Platform Outage | App downtime       | No orders             |

---

# AI / ML Integration

## Risk Prediction

Model: XGBoost

* predicts disruption probability
* used in premium calculation

---

## Income Loss Estimation

Based on:

* historical weekly income
* average daily earnings
* zone-based disruption severity

```id="k1x2zq"
Expected = ₹1000  
Actual = ₹400  
Loss = ₹600  
```

---

## Fraud Detection

Model: Isolation Forest

Detects:

* abnormal claims
* unrealistic patterns
* repeated suspicious activity

---

# Adversarial Defense & Anti-Spoofing Strategy

## Core Idea

GPS alone is unreliable.
GigShield AI uses a **multi-signal Claim Trust Engine** to validate claims.

---

## Differentiation: Real vs Fake Worker

### Presence Authenticity

* route continuity
* movement patterns
* zone entry history

### Activity Validation

* recent deliveries
* working hours consistency
* app session activity

### Device Integrity

* mock location detection
* device fingerprint
* abnormal location jumps

### Environmental Consistency

* weather vs claimed location
* zone-level disruption match

---

## Decision Output

* **Auto-Approve** → high confidence
* **Soft-Flag** → partial mismatch
* **Hard-Flag** → strong fraud indicators

---

## Fraud Ring Detection

Detects coordinated fraud using:

* shared device/network
* synchronized claims
* abnormal claim clusters

---

# External Integrations

* Weather API: OpenWeatherMap
* Platform Data: Mock APIs simulating Swiggy / Zomato
* Payment: Razorpay sandbox

---

# Dashboard Design

## Worker Dashboard

* Active policy
* Risk level
* Earnings protected
* Claim status

---

## Admin Dashboard

* Active policies
* Claims triggered
* Fraud alerts
* Zone risk insights

---

# Technology Stack

Frontend: React
Backend: FastAPI
Database: PostgreSQL
ML: Python, XGBoost, scikit-learn

---

# System Architecture

```id="n6v3wz"
Worker App
    ↓
Frontend (React)
    ↓
Backend (FastAPI)
    ├ Policy Service
    ├ Trigger Engine
    ├ Claim Trust Engine
    ├ Fraud Detection
    ├ Risk Model
    └ Payout Engine
    ↓
Database + ML Models
```

---

# Development Plan

Phase 1: Foundation & architecture
Phase 2: Policy + claims flow
Phase 3: AI models
Phase 4: Anti-spoofing layer
Phase 5: Dashboard

---

# Expected Impact

* Protects gig worker income
* Enables instant payouts
* Prevents fraud and spoofing
* Provides scalable micro-insurance solution

---

# Final Pitch Line

**GigShield AI protects delivery workers’ income using AI-driven parametric insurance with built-in anti-spoofing fraud defense.**

---

