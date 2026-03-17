
---

# GigShield AI

**AI-powered parametric income protection for gig workers**

## Overview

GigShield AI is a parametric micro-insurance platform designed to protect gig economy workers (delivery riders, drivers, etc.) from temporary income loss caused by uncontrollable external disruptions such as heavy rainfall, extreme heat, severe air pollution, or platform outages.

Unlike traditional insurance, GigShield AI uses **automated parametric triggers and AI-driven risk scoring** to detect disruption events and automatically trigger claims. This allows gig workers to receive compensation quickly without complex claim procedures.

---

# Problem Statement

Gig workers depend on daily platform activity for income. However, their earnings can drop suddenly due to:

* Heavy rainfall or floods
* Heat waves
* Severe air pollution
* Platform outages
* Local restrictions

Current insurance products rarely cover **short-term income loss**, leaving gig workers financially vulnerable.

---

# Proposed Solution

GigShield AI provides:

* Weekly micro-insurance policies
* AI-powered risk assessment and premium calculation
* Automatic disruption detection through parametric triggers
* Hybrid location verification to prevent fraud
* Automated claim processing and payout simulation

The system ensures **fast, fair, and transparent compensation for income disruptions**.

---

# Persona-Based Scenario

## Persona

Ravi is a food delivery rider working with Swiggy in Hyderabad. His weekly income averages ₹7000.

## Scenario

One day, Hyderabad experiences heavy rainfall exceeding 80 mm. Due to the severe weather conditions, Ravi is unable to complete most of his deliveries.

### Workflow

1. Ravi registers on the GigShield AI platform.
2. Ravi purchases a weekly micro-insurance policy.
3. The system continuously monitors environmental data.
4. Rainfall exceeds the parametric trigger threshold.
5. The Trigger Engine detects the event.
6. The system verifies Ravi’s location and activity.
7. Fraud detection is performed.
8. The claim is automatically triggered.
9. The Payout Engine calculates compensation.
10. Ravi receives the payout notification.

---

# Weekly Premium Model

The premium is calculated based on expected risk exposure using a simplified parametric model.

### Premium Formula

Premium = Base Rate × City Risk × Income Factor × AI Risk Score

Where:

* **Base Rate**: Fixed base cost
* **City Risk**: Risk factor associated with location
* **Income Factor**: Adjustment based on worker income
* **AI Risk Score**: Predicted disruption probability

Example:

Worker weekly income = ₹7000
AI Risk Score = 0.7

Estimated weekly premium ≈ ₹35–₹60

This ensures affordable micro-insurance for gig workers.

---

# Parametric Triggers

Claims are triggered automatically when predefined conditions are met.

| Trigger Type    | Threshold                  |
| --------------- | -------------------------- |
| Heavy Rain      | Rainfall > 80 mm           |
| Heat Wave       | Temperature > 42°C         |
| Pollution       | AQI > 400                  |
| Platform Outage | Platform downtime detected |

These triggers eliminate manual claim filing and speed up the compensation process.

---

# Platform Choice (Web vs Mobile)

### Worker Platform

Mobile-first interface because gig workers operate primarily through smartphones.

* Mobile responsive web app
* Optional React Native mobile app

### Admin / Provider Platform

Web-based dashboards for operational monitoring and analytics.

* Worker management
* Claim monitoring
* Risk analytics
* Fraud alerts

---

# AI / ML Integration

AI is integrated into the system at multiple stages.

## Risk Prediction

Algorithm: **XGBoost**

Purpose:
Predict disruption probability and generate a risk score used in premium calculation.

Input Features:

* city
* rainfall
* temperature
* AQI
* weekly income
* working hours
* order volume

Output:
Risk score (0–1)

---

## Fraud Detection

Algorithm: **Isolation Forest**

Purpose:
Identify suspicious claims such as:

* repeated claims
* abnormal location data
* unusual worker behavior

---

## Income Loss Estimation

Initial Model: **XGBoost regression**

Future Enhancement: **LSTM time-series prediction**

Purpose:
Estimate the expected income loss caused by disruption events.

---

# Technology Stack

Frontend

* React (Web dashboards)
* Optional React Native (Worker mobile app)

Backend

* FastAPI (Python)

Database

* PostgreSQL

ORM

* SQLAlchemy

Machine Learning

* Python
* pandas
* numpy
* scikit-learn
* xgboost
* torch

Model storage

* joblib

---

# System Architecture

```
Worker Mobile/Web App
        │
        ▼
React Frontend
        │
        ▼
FastAPI Backend
        │
        ├ Policy Service
        ├ Trigger Engine
        ├ Location Verification
        ├ Fraud Detection
        ├ Risk Model Engine
        └ Payout Engine
        │
        ▼
PostgreSQL Database
        │
        ▼
Machine Learning Models
```

---

# Development Plan

## Phase 1

Project foundation and database setup

* repository structure
* backend initialization
* PostgreSQL configuration

## Phase 2

Core backend development

* worker registration
* policy creation
* trigger monitoring
* claim workflow

## Phase 3

AI model development

* synthetic dataset generation
* XGBoost risk model training
* fraud detection model

## Phase 4

Hybrid location verification

* GPS logging
* geofencing validation

## Phase 5

Frontend dashboard

* worker interface
* admin dashboard
* provider analytics

---

# Expected Impact

GigShield AI provides an innovative financial safety net for gig workers by combining:

* parametric insurance
* AI-driven risk modeling
* automated claim processing
* fraud prevention

The platform enables **faster payouts, lower administrative costs, and improved financial resilience for gig economy workers**.
