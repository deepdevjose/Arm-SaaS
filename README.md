# Arm Health AI — Predictive Health Twin for Industrial Robot Arms

<div align="center">

![Arm Health AI](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-r3f-black?style=for-the-badge&logo=three.js)
![AI](https://img.shields.io/badge/AI-LSTM%20%7C%20RUL-blueviolet?style=for-the-badge)
![i18n](https://img.shields.io/badge/i18n-en--US%20%7C%20zh--Hans-blue?style=for-the-badge)

**An AI-Driven SaaS platform for real-time predictive maintenance of industrial robotic arms.**  
Prevent downtime before it happens — not after.

[Live Demo](https://arm-health.vercel.app) · [Documentation](./docs) · [Report Issues](https://github.com/deepdevjose/Arm-SaaS/issues)

</div>

---

## The Problem

Industrial robot arms are complex electromechanical systems. The failure of a single low-cost component — a motor bearing, a gearbox — in one critical joint can **halt an entire production line**.

| Impact | Metric |
|---|---|
| 💸 Downtime cost | **$22,000 / minute** |
| ❌ Current solution | Reactive maintenance (fixed schedules) |
| ⚠️ The gap | No real-time, AI-based prediction exists at scale |

## The Solution

**Arm Health AI** is a SaaS platform built around a dynamic AI-powered Digital Twin — a virtual replica of each physical robotic arm — that streams telemetry, predicts failures, and triggers proactive maintenance alerts before production is impacted.

### How it works

```
IoT Sensors (J1–J6)
       ↓
Edge Gateway   ←─ high-frequency joint data (vibration, temperature, current)
       ↓
LSTM AI Model  ←─ learns the robot's health signature over time
       ↓
RUL Prediction ←─ Remaining Useful Life score per component
       ↓
3D Digital Twin Visualization + Automated Alert / Work Order
```

> **Target accuracy:** >95% prediction reliability · **Lead time:** 72+ hours before failure

---

## Features

- 🤖 **Real-time Digital Twin** — 3D SIASUN SR12A robot arm visualization with live telemetry overlays (RUL, temperature, anomaly score, vibration status)
- 🧠 **LSTM-based AI Engine** — Predicts Remaining Useful Life from joint telemetry sequences (J1–J6)
- 📡 **Fleet Monitoring** — Multi-node dashboard tracking health across an entire robotic fleet
- 🌐 **Full i18n (BCP-47)** — English (`en-US`) and Simplified Chinese (`zh-Hans`) with dynamic locale routing
- ⚡ **Interactive Demo Console** — Realistic simulated fleet sandbox with live-looking telemetry and alerting
- 🎨 **Production-grade SaaS UI** — Built with Next.js 15 App Router, cinematic 3D lighting, glassmorphism, and conversion-optimized copy

---

## Market Opportunity

| Segment | Downtime Cost |
|---|---|
| Automotive (Welding/Assembly) | $2.3M / hour |
| Semiconductor (Chip Fabrication) | Zero-tolerance environment |
| Aerospace (Component Manufacturing) | Critical reliability & traceability |
| Healthcare (Robotic Surgery) | Patient safety + legal liability |

**Total addressable market:** $42.6 Billion (Global Robotics Market, 2026 projection)

**We sell Guaranteed Uptime — not just software.**

---

## Business Model

### SaaS Subscription (Per Robot / Month)

| Tier | Features |
|---|---|
| **Basic** | Real-time health monitoring + manual alerts |
| **Standard** | + RUL prediction + anomaly detection |
| **Premium** | + Automated work orders + optimization recommendations + dedicated support |

### Additional Revenue
- **HaaS (Hardware as a Service):** Proprietary sensor kit bundled with subscription
- **Consulting & Integration:** One-time fee for MES/CMMS system integration

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript |
| **3D Visualization** | Three.js, React Three Fiber, React Three Drei |
| **Post-processing** | @react-three/postprocessing (Bloom, Vignette, ACES filmic) |
| **Internationalization** | BCP-47 locale routing (`[locale]` segment), custom `getDictionary()` loader |
| **Styling** | Vanilla CSS with custom design system |
| **AI Model** | Python, LSTM (TensorFlow/Keras) |
| **Data Pipeline** | IoT Gateway simulation, MySQL, Python ingestion scripts |
| **Alert System** | N8N workflow automation |

---

## Project Structure

```
src/
├── app/
│   └── [locale]/              ← BCP-47 dynamic locale routing
│       ├── (public)/          ← Marketing pages (landing, platform, digital-twin…)
│       ├── (app)/             ← Authenticated dashboard
│       └── (onboarding)/      ← Onboarding flow
├── components/
│   ├── home/                  ← Hero, ProcessSection, FeatureSplit, ContactCta
│   ├── layout/                ← Header, Footer, PublicShell
│   └── three/                 ← RobotViewer (R3F canvas), RobotViewerClient
├── locales/
│   ├── en-US/common.json      ← English dictionary
│   └── zh-Hans/common.json    ← Simplified Chinese dictionary
└── lib/
    ├── i18n.ts                ← getDictionary() loader (server-only)
    └── mock-data.ts           ← Simulated fleet + alert data
middleware.ts                  ← Locale detection & redirect (en-US default)
```

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/deepdevjose/Arm-SaaS.git
cd Arm-SaaS
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware will redirect to `/en-US` automatically.

### Switch Language

Navigate to `/zh-Hans` for the full Simplified Chinese experience, or use the language switcher (🌐) in the navigation bar.

### 3D Robot Model

Place your GLB model at:
```
public/models/siasunsr12a.glb
```

> **Note:** The current GLB is a CAD export without a kinematic armature. For full joint animation, the model needs to be rigged in Blender with a J1–J6 bone chain. See [`docs/arm-health-architecture.md`](./docs/arm-health-architecture.md) for details.

---

## 6-Month Work Plan (Nov 2025 – April 2026)

| Phase | Months | Focus |
|---|---|---|
| **Phase 1** | M1–M2 | Data acquisition, LSTM model development, system architecture |
| **Phase 2** | M3–M4 | AI inference pipeline, Digital Twin V1, fault & alert system |
| **Phase 3** | M5–M6 | System validation, UX refinement, final demo & documentation |

---

## Team

This project is a collaboration between students and faculty from three universities:

### Xi'an Jiaotong-Liverpool University (XJTLU) — Suzhou, China

| Name | Major | Role |
|---|---|---|
| **Marcos Dariel Cruces Delmar** | Robotics (Master) | Project Lead / Product Manager · System Architecture · Visualization Interface |
| **Zinuo Liu** | Artificial Intelligence (2nd) | AI & Data Science Lead · LSTM Model · RUL Prediction Algorithm |
| **Siyuan Qiu** | Intelligent Robotics Engineering (2nd) | Robotics & Automation Engineer · Simulation · Data Generation · Validation |

### Tecnológico Nacional de México — Campus Pachuca (ITP) — Pachuca, Mexico

| Name | Major | Role |
|---|---|---|
| **Fernando Rosales Tello** | ICTE (4th) | Automation Engineer · Data Ingestion Pipeline · IoT Gateway Simulation |
| **Rodrigo Axel Noeggerath Medina** | ICTE (4th) | Automation Engineer · Fault Optimization Logic · Alert System · Security |

### Tecnológico Nacional de México — Campus Occidente del Estado de Hidalgo (ITSOEH) — Hidalgo, Mexico

| Name | Major | Role |
|---|---|---|
| **José Manuel Cortés Cerón** | IoT Engineering (2nd) | Systems Integration Architect · Digital Twin Integration · 3D Visualization · Data Protocols |

### Supervisor

**Dr. Izhar Oswaldo Escudero Ornelas** — Xi'an Jiaotong-Liverpool University (XJTLU)  
📧 Oswaldo.Ornelas@xjtlu.edu.cn · ☎ +86 (0)521 88970761

---

## Acknowledgments

- **XJTLU** (Xi'an Jiaotong-Liverpool University) for academic support and research infrastructure
- **ITP** (Tecnológico Nacional de México, Campus Pachuca) for institutional support
- **ITSOEH** (Tecnológico Nacional de México, Campus Occidente del Estado de Hidalgo) for institutional support
- **SIASUN Robot & Automation Co., Ltd.** — SR12A robot arm used as the Digital Twin reference model
- Sensor dataset inspired by the **NASA CMAPSS** degradation dataset and **PHM Society** benchmarks

---

## License

This project is developed as an academic research prototype.  
© 2025–2026 Arm Health AI Team — XJTLU · ITP · ITSOEH. All rights reserved.

---

<div align="center">

**Built with ❤️ across countries**  
🇨🇳 China · 🇲🇽 Mexico

</div>