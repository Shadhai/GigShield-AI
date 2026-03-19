---

# GigShield AI

**AI-powered parametric income protection for gig workers**

---

# Overview

GigShield AI is a parametric micro-insurance platform designed to protect gig economy workers (delivery riders, drivers, etc.) from temporary income loss caused by uncontrollable external disruptions such as heavy rainfall, extreme heat, severe air pollution, or platform outages.

Unlike traditional insurance, GigShield AI uses **automated parametric triggers, AI-driven risk scoring, and multi-signal verification** to detect disruption events and trigger claims with high accuracy.

---

# Problem Statement

Gig workers depend on daily platform activity for income. However, their earnings can drop suddenly due to:

* Heavy rainfall or floods
* Heat waves
* Severe air pollution
* Platform outages
* Local restrictions

Current insurance products rarely cover **short-term income loss**, leaving gig workers financially vulnerable.

Additionally, simple parametric systems are vulnerable to **fraud and GPS spoofing**, which can lead to large-scale financial loss.

---

# Proposed Solution

GigShield AI provides:

* Weekly micro-insurance policies
* AI-powered risk assessment and premium calculation
* Automated disruption detection through parametric triggers
* **Multi-signal anti-spoofing claim verification**
* AI-based fraud detection and fraud-ring identification
* Automated claim processing and payout simulation

The system ensures **fast, fair, and fraud-resistant compensation** for income disruptions.

---

# Persona-Based Scenario

## Persona

Ravi is a food delivery rider working with Swiggy in Hyderabad. His weekly income averages ₹7000.

## Scenario

Hyderabad experiences heavy rainfall (>80 mm). Ravi is unable to complete deliveries due to severe weather.

### Workflow

1. Ravi registers on GigShield AI
2. Ravi purchases a weekly policy
3. System monitors environmental data
4. Rainfall crosses threshold
5. Trigger Engine activates
6. Claim Trust Engine verifies authenticity
7. Fraud detection checks anomalies
8. Claim is approved
9. Payout is calculated
10. Ravi receives compensation

---

# Weekly Premium Model

Premium is calculated using a dynamic AI-driven model:

### Formula

```
Premium = Base Rate × City Risk × Income Factor × AI Risk Score
```

Example:

* Weekly income: ₹7000
* Risk score: 0.7
* Premium: ₹35–₹60

This ensures affordability and fairness.

---

# Parametric Triggers

| Trigger Type    | Condition             |
| --------------- | --------------------- |
| Heavy Rain      | Rainfall > 80 mm      |
| Heat Wave       | Temperature > 42°C    |
| Pollution       | AQI > 400             |
| Platform Outage | App downtime detected |

Triggers are **automated**, enabling zero-touch claim initiation.

---

# Platform Choice

## Worker Platform

* Mobile-first interface
* Responsive web app
* Optional mobile app

## Admin Platform

* Web dashboard
* Risk analytics
* Fraud monitoring
* Claim tracking

---

# AI / ML Integration

## Risk Prediction

Model: XGBoost

Purpose:
Predict disruption probability and generate premium risk score

---

## Income Loss Estimation

Model: XGBoost (initial), LSTM (future)

Purpose:
Estimate expected income loss during disruption

---

## Fraud Detection

Model: Isolation Forest

Purpose:
Detect anomalies in claims and worker behavior

---

# Adversarial Defense & Anti-Spoofing Strategy

## Problem

GPS-based verification can be spoofed. Coordinated fraud groups can fake location to trigger payouts.

GigShield AI uses a **multi-signal Claim Trust Engine** instead of relying only on GPS.

---

## 1. Differentiation: Real vs Fake Worker

The system evaluates:

### Presence Authenticity

* route continuity
* movement patterns
* zone entry history

### Activity Validation

* recent deliveries
* working hours consistency
* app activity

### Device Integrity

* mock location detection
* device fingerprint
* abnormal jumps

### Environmental Consistency

* real weather vs claimed zone
* delivery slowdown

---

## Decision Output

* Auto-Approved
* Soft-Flagged
* Hard-Flagged

---

## 2. Data Used

### Worker Data

* order history
* earnings pattern
* claim frequency

### Location Data

* GPS trajectory
* speed patterns

### Device Data

* device fingerprint
* IP/network

### Context Data

* weather severity
* zone disruption

### Fraud Ring Detection

* synchronized claims
* shared devices
* clustered behavior

---

## 3. UX Balance

### Soft Flagging

Claims are not instantly rejected

### Graceful Verification

Minimal user friction

### Tiered Payout

* instant
* delayed
* review

### Fairness

* no penalty for first anomaly
* reputation-based system

---

## 4. AI Defense Architecture

* Claim Trust Model
* Isolation Forest (anomaly detection)
* Graph-based fraud detection

---

## Core Principle

GigShield AI verifies:

**“Is this a real worker affected by disruption, or a spoofed claim?”**

---

# Technology Stack

Frontend:

* React

Backend:

* FastAPI

Database:

* PostgreSQL

ML:

* Python, XGBoost, PyTorch

---

# System Architecture

```
Worker App
    ↓
Frontend (React)
    ↓
Backend (FastAPI)
    ├ Policy Service
    ├ Trigger Engine
    ├ Claim Trust Engine (Anti-Spoofing)
    ├ Fraud Detection
    ├ Risk Model Engine
    └ Payout Engine
    ↓
Database (PostgreSQL)
    ↓
ML Models
```

---

# AI Architecture

GigShield AI uses a **multi-layer AI pipeline** to enable accurate risk prediction, fraud prevention, and intelligent payout decisions.

---

## AI Pipeline Overview

```
Data Sources
    ↓
Feature Engineering Layer
    ↓
Risk Prediction Model
    ↓
Parametric Trigger Engine
    ↓
Claim Trust Engine (Anti-Spoofing AI)
    ↓
Fraud Detection Layer
    ↓
Income Loss Estimation Model
    ↓
Decision & Payout Engine
```

---

## 1. Data Ingestion Layer

The system collects real-time and historical data from multiple sources:

* Weather data (rainfall, temperature, AQI)
* Worker activity data (orders, sessions, earnings)
* Location and movement data (trajectory, speed)
* Device and network signals
* Platform usage patterns

---

## 2. Feature Engineering Layer

Raw data is transformed into meaningful features:

* disruption severity score
* worker activity consistency
* mobility patterns
* zone-level risk score
* claim frequency patterns

These features feed into all AI models.

---

## 3. Risk Prediction Model

Model: **XGBoost**

Purpose:

* Predict disruption probability
* Generate risk score for premium calculation

Output:

```
risk_score = 0.72
```

---

## 4. Parametric Trigger Engine

Uses real-time environmental thresholds:

* Rainfall > 80 mm
* Temperature > 42°C
* AQI > 400

Automatically activates claims without manual input.

---

## 5. Claim Trust Engine (Anti-Spoofing AI)

Core innovation layer.

Evaluates whether the claim is genuine using:

* route continuity
* worker activity patterns
* device integrity
* environmental consistency

Output:

```
claim_trust_score = 0.81
```

---

## 6. Fraud Detection Layer

Model: **Isolation Forest**

Detects anomalies such as:

* GPS spoofing
* abnormal claim timing
* repeated suspicious behavior
* unrealistic movement patterns

---

## 7. Fraud Ring Detection (Advanced Layer)

Graph-based fraud detection:

Nodes:

* workers
* devices
* IP/network

Edges:

* shared device
* synchronized claims
* behavior similarity

Detects coordinated fraud groups.

---

## 8. Income Loss Estimation Model

Model: **XGBoost (current)**
Future: **LSTM**

Purpose:

* Estimate actual income loss during disruption

Example:

```
expected_income = ₹1000
actual_income = ₹400
loss = ₹600
```

---

## 9. Decision & Payout Engine

Combines all outputs:

* risk score
* claim trust score
* fraud score
* income loss

Final decision:

* approve
* delay
* flag

---


# Development Plan

## Phase 1

* Setup backend and DB
* Basic API

## Phase 2

* Policy + claim flow

## Phase 3

* AI models

## Phase 4

* Anti-spoofing system

## Phase 5

* Frontend + dashboard

---

# Expected Impact

GigShield AI delivers:

* Financial protection for gig workers
* Fast automated payouts
* Fraud-resistant insurance system
* Scalable micro-insurance model

---

# Final Pitch Line

**GigShield AI uses AI-driven parametric insurance with multi-signal fraud defense to protect gig workers’ income while preventing large-scale spoofing attacks.**

-
