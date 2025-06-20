<p align="center">
  <img src="assets/webkit-osint-logo-banner.png" alt="Logo Webkit-Osint" width="220">
</p>

<h1 align="center">Webkit-Osint&nbsp;— Plateforme&nbsp;OSINT&nbsp;modulaire</h1>

<p align="center">
  <em>Collecte. Analyse. Visualise.<br></em>
</p>

<div align="center">           

[![Stars](https://img.shields.io/github/stars/Azouriss/webkit-osint?style=social)](https://github.com/Azouriss/webkit-osint/stargazers)
[![Version](https://img.shields.io/github/v/release/Azouriss/webkit-osint?color=blue)](https://github.com/Azouriss/webkit-osint/releases)
[![Security v0.0.1](https://img.shields.io/badge/Security-v0.0.1-blueviolet)](SECURITY.md)
[![Licence Webkit-Osint](https://img.shields.io/badge/Licence-Webkit--Osint-blue.svg)](LICENSE.md)

[![Dockerized](https://img.shields.io/badge/Container-Docker-blue)](https://www.docker.com/)
[![Développement v0.0.1](https://img.shields.io/badge/Développement-v0.0.1-yellow)](#roadmap)
[![Chat Discord](https://img.shields.io/badge/Chat-Discord-7289DA?logo=discord&logoColor=white)](https://discord.gg/bEu43aVjhE)

</div>

---

## ✨ Présentation

**Webkit-Osint** est une plateforme **OSINT** (Open Source INTelligence) tout-en-un destinée&nbsp;aux&nbsp;:

- Analystes SOC / threat-intel,
- Chercheurs et pentesters,
- Journalistes d’investigation,
- Passionnés de renseignement & CTI.

> L’objectif : **centraliser** la collecte, l’analyse **et** la visualisation de données publiques (web, réseaux sociaux, registres, blockchains…) dans une architecture **distribuée** et **modulaire** reposant sur Docker.

---

## 🔑 Fonctionnalités clés

| Domaine                 | Fonctionnalités                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| **Collecte**            | Modules d’extraction                                                                            |
| **Analyse**             | Normalisation, enrichissement, scoring IOC, détection d’anomalies, NLP, corrélation temporelle  |
| **Visualisation**       | Dashboards interactifs, graphes d’entités                                                       |
| **Automatisation**      | Planification, webhooks, intégration SIEM / SOAR                                                |
| **Sécurité & Légalité** | Conteneurs isolés, journalisation complète, respect RGPD, _rate-limiting_ natif                 |

---

## 🏗️ Architecture (vue d’ensemble)

```mermaid
flowchart LR
  %% Collecte & Orchestration
  subgraph "Collecte / Orchestration"
    SCHEDULER[Planificateur ⏰] --> BROKER[[Broker]]
    PL1(Plugin #1) --> BROKER
    PL2(Plugin #2) --> BROKER
    PL3(Plugin #3) --> BROKER
  end

  %% Exécution
  BROKER --> WORKERS[Workers]

  %% Backend API
  subgraph "Backend API"
    WORKERS --> API{{API REST}}
    API --> NLP[NLP / ML]
    API --> SCORE[Scoring]
    API --> ENRICH[Enrichissement]
  end

  %% Stockage & Recherche
  NLP & SCORE & ENRICH --> RELDB[(Base relationnelle)]
  NLP & SCORE & ENRICH --> VECIDX[(Index vectoriel)]
  VECIDX --> GRAPH[(Base graphe)]

  %% Exports
  RELDB --> EXPORTS[Exports CSV / PDF]

  %% Visualisation
  subgraph "Visualisation"
    FRONT([UI Web]) --> API
    FRONT --> GRAPHVIEW[GraphView]
    FRONT --> DASH[Dashboards]
    FRONT --> BI[BI]
  end
```

Chaque **module** (collecte, analyse, visualisation) est encapsulé dans un conteneur Docker indépendant, orchestré par **Docker Compose**. Ainsi, tu peux désactiver ou remplacer un module sans impacter le reste de la stack.

---

## ⚡ Prérequis

| Outil              | Version minimale |
| :----------------- | :--------------- |
| **Docker Engine**  | 20.10            |
| **Docker Compose** | v2               |
| **Git**            | 2.25             |

> Sous Windows/Mac, Docker Desktop comprend déjà Compose. Sous Linux, installe `docker-compose-plugin`.

---

## 🚀 Installation rapide

```bash
# 1. Clone le dépôt
git clone https://github.com/<ton-orga>/webkit-osint.git
cd webkit-osint

# 2. Copie les variables d’environnement
cp .env.example .env    # ajuste les clés API, tokens, ports…

# 3. Lance la stack
docker compose -f infra/docker-compose.yml up --build -d
```

> En ~2 minutes, Webkit-Osint tourne sur `http://localhost:3005` (UI) et expose son API REST sur `http://localhost:8005/api/v1`.

---

## 👩‍💻 Usage de base

| Étape                    | Commande / Action                                              |
| ------------------------ | -------------------------------------------------------------- |
| **Lister les modules**   | `docker compose -f infra/docker-compose.yml ps`                |
| **Lancer un scan**       | `curl -X POST /api/v1/scan -d '{"target":"example.com"}'`      |
| **Consulter les logs**   | `docker compose -f infra/docker-compose.yml logs -f collector` |
| **Accéder au dashboard** | Naviguer vers `http://localhost:3005`                          |

---

## 🔧 Configuration avancée

- **Modules** : active/désactive depuis `infra/docker-compose.yml` ou en commentant un service.
- **Volumes** : persistance des données dans `./data/`.
- **Secrets** : ajoute tes clés API dans `.env` (non suivi par Git).
- **Mise à jour** : `git pull && docker compose -f infra/docker-compose.yml pull && docker compose -f infra/docker-compose.yml up -d`.

---

## 🎯 Roadmap

- [ ] 🔌 **Collecte passive multi-sources** (DNS, WHOIS, Shodan, etc.)  
- [ ] 🧠 **Corrélation automatique des IOC** avec génération de **timeline**
- [ ] 🌐 **Exploration du Dark Web** via support Tor / Onion services  
- [ ] 📦 **Packaging modulaire** (plugins, scheduler, exports CSV/PDF)  
- [ ] 🖥️ **Interface CLI + UI réactive** (React + TypeScript + RBAC)  
- [ ] ☸️ **Déploiement cloud-native** (Docker, Helm Charts, K8s Ready)  
- [ ] 🕸️ **Intégration avec outils externes** (Maltego, MISP, TheHive…)

> Tu veux influencer la future direction ? [Ouvre une discussion](https://github.com/Azouriss/webkit-osint/discussions).

---

## 🤝 Contribuer

### Convention d’emoji commit

| Emoji | Signification                                   |
| ----- | ----------------------------------------------- |
| ➡️    | **Ajout** d’un nouveau fichier / fonctionnalité |
| 🔃    | **Modification** / amélioration                 |
| ⛔    | **Suppression** de code ou fichier              |
| ✅    | **Validation** (tests, lint, build OK)          |

---

## 📝 Licence

Ce projet est publié sous la **Licence Webkit-Osint** (personnalisée).  
Merci de lire attentivement les conditions complètes dans le fichier [LICENSE.md](LICENSE.md).

---

## 🎧 Support & communauté

Besoin d’aide ou envie d’échanger ?  
Rejoins-nous sur Discord → <https://discord.gg/bEu43aVjhE>

---

## ⚠️ Disclaimer légal

Webkit-Osint outille la **collecte de données publiques**.  
Son utilisation doit rester **conforme à la législation locale** et aux conditions d’utilisation des services scrutés. L’auteur et les contributeurs **déclinent toute responsabilité** en cas d’usage illicite.

---

<p align="center">
  🙌 Merci d’avoir choisi Webkit-Osint ! N’hésite pas à ⭐ le repo si tu l’apprécies.
</p>
