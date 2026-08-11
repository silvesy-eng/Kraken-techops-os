# Kraken TechOps Operating System — Interview Artefact

A lightweight, interactive microsite created by **Sergio Da Silva** as an interview discussion artefact for the **Kraken TechOps Team Lead** role.

This is **not an official Kraken product**. All operational metrics shown on the site are illustrative demo data.

## Why this exists

The job description is unusually clear about the tension a TechOps lead must manage:

- remain hands-on with day-to-day support;
- lead and develop a small, high-performing team;
- protect proactive project capacity;
- manage incidents and security considerations;
- scale regional operations without losing global consistency;
- keep enough technical depth to challenge vendors and partners.

Rather than describe an approach in a cover letter, this repository turns that approach into something visible and interactive.

## What the site demonstrates

### 1. TechOps control centre
A deliberately small set of operational signals across:

- support demand;
- incident load;
- endpoint compliance;
- planned technical change;
- protected capacity.

The **capacity slider** demonstrates a simple way to discuss the trade-off between reactive support, project delivery and continuous improvement.

### 2. Lean operating model
Six principles for a modern TechOps function:

1. Stay in the work.
2. Make demand visible.
3. Automate toil, not judgement.
4. Treat security and productivity as a joint design problem.
5. Use global guardrails with regional ownership.
6. Close the loop on incidents and recurring friction.

### 3. Incident approach
An interactive four-stage model:

- Detect
- Stabilise
- Communicate
- Learn

### 4. Project delivery model
A simple framework for identity, MDM, authentication, office and SaaS migration projects:

**Discover → Design → Pilot → Scale → Close**

### 5. First 90 days
A candidate point of view based on:

**Understand → Protect focus → Improve deliberately**

It intentionally avoids proposing a large transformation before understanding the current environment.

## Running locally

No frameworks, package managers or build tools are required.

Open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing with GitHub Pages

1. Create a new public GitHub repository.
2. Upload the files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

GitHub will provide the public Pages URL after deployment.

## Repository structure

```text
.
├── index.html    # Site structure and content
├── styles.css    # Visual design and responsive layout
├── app.js        # Capacity + incident interactions and navigation
├── README.md     # Project explanation and deployment notes
└── .gitignore
```

## Design choices

- **Static and dependency-free** so it is easy to review and host.
- **Responsive** for desktop, tablet and mobile.
- **No tracking or analytics**.
- **No external operational data**.
- **Explicit candidate-project disclaimer** to avoid presenting the work as an official Kraken property.

## Possible next iterations

If I were developing this further, I would consider:

- a mock service catalogue;
- an interactive incident simulation;
- an IAM / MDM migration decision exercise;
- a simple capacity forecast using incoming support demand;
- a technical architecture view showing identity, device trust, endpoint security and SaaS access controls.
