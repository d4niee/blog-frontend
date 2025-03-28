# GitOps in der Praxis: Chancen, Herausforderungen und Toolvergleich

> ✍️ *Zusammenfassung meiner Bachelorarbeit von Daniel Lambrecht (2024)*  
> *Thema: "Chancen und Herausforderungen von GitOps und dessen Referenzimplementierungen bei der Bereitstellung von Services und IT-Infrastrukturen"*

---

## 📑 Table of Content
- [🔍 Worum geht's?](#-worum-gehts)
- [🧭 Einleitung](#-einleitung)
- [⚙️ Grundlagen von GitOps](#️-grundlagen-und-kontext)
  - [⚙️ Automatisierung](#️-automatisierung)
  - [🏗️ Bereitstellung von Services und IT-Infrastrukturen](#-bereitstellung-von-services-und-it-infrastrukturen)
  - [🔧 GitOps](#-gitops)
    - [🧠 Warum GitOps?](#-warum-gitops)
    - [🔑 Kernprinzipien von GitOps](#-kernprinzipien-von-gitops)
    - [🔄 Push-based vs. Pull-based Pipelines](#-push-based-vs-pull-based-pipelines)
    - [⚔️ GitOps vs. CI-Ops: Was ist der Unterschied?](#-gitops-vs-ci-ops-was-ist-der-unterschied)
- [🧪 Argo CD vs. Flux: Toolvergleich](#-argo-cd-vs-flux-toolvergleich)
  - [Kriterien](#-direktvergleich-argo-cd-vs-flux)
  - [🔍 Direktvergleich: Argo CD vs. Flux](#-direktvergleich-argo-cd-vs-flux)
- [💡 Wann lohnt sich der Einsatz von GitOps?](#-wann-lohnt-sich-gitops)
- [📘 Anwendung von Patterns und Best Practices](#-anwendung-von-patterns-und-best-practices)
- [📚 Fazit & Ausblick](#-fazit--ausblick)

---

## 🔍 Worum geht's?

In meiner Bachelorarbeit analysiere ich, wie GitOps als moderne Deployment-Methode funktioniert und ob es sich in realen Szenarien wirklich lohnt.  
Ein besonderer Fokus liegt auf dem Vergleich von **Argo CD** und **Flux**, den beiden populärsten GitOps-Tools.

## 🧭 Einleitung

Moderne Softwarebereitstellung befindet sich im ständigen Wandel. Während früher Releases in langen Zyklen von mehreren Monaten oder Jahren stattfanden, sind heute tägliche oder sogar stündliche Deployments keine Seltenheit mehr. Methoden wie Agile, CI/CD und DevOps haben diesen Wandel maßgeblich vorangetrieben – insbesondere durch Automatisierung und engere Zusammenarbeit zwischen Entwicklung und Betrieb.

Ein relativ neuer Ansatz in diesem Umfeld ist **GitOps**. GitOps erweitert das DevOps-Prinzip, indem es das Git-Repository nicht nur zur Verwaltung von Code, sondern auch als **alleinige Quelle der Wahrheit für Deployments und Infrastrukturzustände** verwendet. Durch deklarative Konfiguration, Automatisierung via Pull-Prinzip und Self-Healing-Mechanismen verspricht GitOps höhere Stabilität, bessere Nachvollziehbarkeit und schnellere Reaktionszeiten bei Änderungen.

Trotz dieser Vorteile herrscht in vielen Teams Unsicherheit:  
Lohnt sich der Wechsel zu GitOps wirklich? Wie unterscheidet sich GitOps konkret vom klassischen CI/CD-Ansatz (auch bekannt als CIOps)? Und welches Tool ist für welchen Anwendungsfall geeignet?

In meiner Bachelorarbeit habe ich genau diese Fragen untersucht. Dabei habe ich nicht nur die theoretischen Grundlagen und Best Practices analysiert, sondern auch einen **praxisnahen Vergleich der beiden führenden GitOps-Tools – Argo CD und Flux** durchgeführt. Ziel war es, eine fundierte Entscheidungshilfe zu schaffen, wann und wie GitOps sinnvoll eingesetzt werden kann – und wann vielleicht nicht.

Dieser Blogbeitrag fasst die wichtigsten Erkenntnisse meiner Arbeit kompakt zusammen.

---

## ⚙️ Grundlagen und Kontext

GitOps ist ein Teil der Cloud-native Bewegung und baut auf Technologien wie:
- **Kubernetes**
- **Infrastructure as Code (IaC)** mit Tools wie Terraform
- **CI/CD Pipelines**

Es wurde entwickelt, um die steigende Komplexität moderner Cloud-Infrastruktur beherrschbar zu machen und auf deklarative Konfigurationen zu setzen.

### ⚙️ Automatisierung

Automatisierung ist ein Kernprinzip von GitOps. Statt manuellem Konfigurieren werden Infrastruktur und Deployments **deklarativ beschrieben** und versioniert – meist mit Tools wie **Terraform**, **Kustomize** oder **Helm**. Git bildet dabei die zentrale Quelle der Wahrheit.

Ein GitOps-Operator sorgt dafür, dass der Zustand im Cluster dem Git-Zustand entspricht – inklusive **Self-Healing** bei Abweichungen. So werden menschliche Fehler reduziert und Deployments schneller, nachvollziehbarer und sicherer.

---

### 🏗️ Bereitstellung von Services und IT-Infrastrukturen

Moderne Anwendungen basieren auf **Microservices**, **Containern** und **Cloud-Infrastruktur**. GitOps unterstützt diese Architektur, indem es die Bereitstellung von Services und Infrastruktur über dieselben Mechanismen abbildet – **standardisiert, reproduzierbar und vollständig automatisiert**.

Ob Namespace, Applikation oder Secret – alles wird als Code beschrieben und kontrolliert ausgerollt. Das macht GitOps besonders wertvoll in komplexen Multi-Cluster- oder Multi-Umgebungs-Setups.

### 🔧 GitOps

GitOps ist ein Ansatz zur Verwaltung von Infrastruktur und Anwendungen, bei dem **Git als zentrale Steuerungsebene** genutzt wird. Alles – von Konfiguration bis Infrastruktur – wird als Code versioniert und über **automatisierte Mechanismen** in die Zielumgebung übertragen.

Ein GitOps-Operator (z. B. Argo CD oder Flux) überwacht das Git-Repository und stellt sicher, dass der tatsächliche Zustand des Systems mit dem in Git definierten Zielzustand übereinstimmt.

Der Fokus liegt auf:
- **Deklarativem Zustand** (What, not How)
- **Automatisierter Reconciliation**
- **Auditierbarkeit und Rückverfolgbarkeit durch Git**

---

#### 🧠 Warum GitOps?

GitOps bringt DevOps-Prinzipien auf ein neues Level:  
> „Deployment-as-Code“ statt manuelles Eingreifen.

**Zentrale Prinzipien:**
- Git als Single Source of Truth  
- Automatisierung via Pull-Mechanismen  
- Versionierung, Nachvollziehbarkeit, Self-Healing

Durch die konsequente Nutzung deklarativer Konfigurationen und den Git-Workflow wird die Bereitstellung zuverlässiger, transparenter und einfacher rückgängig zu machen.

---

#### 🔑 Kernprinzipien von GitOps

1. **Declarative Infrastructure**  
   Der gewünschte Zustand wird in Git beschrieben – z. B. als YAML-Dateien für Kubernetes.

2. **Versioned and Immutable Storage**  
   Git speichert Änderungen nachvollziehbar. Jeder Commit ist eine dokumentierte Änderung am Systemzustand.

3. **Automatic Reconciliation**  
   Ein GitOps-Operator gleicht den Ist-Zustand kontinuierlich mit dem Git-Zustand ab und behebt Abweichungen automatisch (Self-Healing).

4. **Operational through Pull Requests**  
   Änderungen erfolgen über Pull Requests oder Merge Commits – mit Review, History und Rollback-Möglichkeit.

---

#### 🔄 Push-based vs. Pull-based Pipelines

| Merkmal                     | Push-based (CIOps)                     | Pull-based (GitOps)                      |
|-----------------------------|----------------------------------------|------------------------------------------|
| Trigger                     | CI/CD-Tool stößt Deployment an         | Cluster holt sich selbst den Git-Zustand |
| Steuerung                   | Extern durch CI-Tools                  | Intern durch GitOps-Operator             |
| Sicherheit                  | Tool benötigt Zugriff auf das Cluster  | Cluster benötigt nur Zugriff auf Git     |
| Rollback                    | Manuell oder über extra Logic          | Git-Revert → automatische Wiederherstellung |
| Fehleranfälligkeit          | Höher (mehr Moving Parts)              | Geringer (weniger externe Abhängigkeiten) |

Der Hauptunterschied liegt in der Richtung der Steuerung: Bei GitOps läuft alles über das Prinzip „Pull“ – das Cluster fragt nach dem aktuellen Zustand.

---

#### ⚔️ GitOps vs. CI-Ops: Was ist der Unterschied?

CIOps (klassisches CI/CD) und GitOps verfolgen dasselbe Ziel – automatisierte Deployments – unterscheiden sich aber deutlich in der Umsetzung:

| Aspekt                    | GitOps                                      | CI-Ops (klassisch)                          |
|---------------------------|---------------------------------------------|---------------------------------------------|
| Quelle der Wahrheit       | Git                                          | Build-/Deploy-Tool-Konfiguration            |
| Deployment-Trigger        | Änderung im Git-Repo                        | Pipeline-Trigger (Commit, Zeit, Manuell)    |
| Infrastruktur-Steuerung   | Operator zieht Änderungen aus Git           | Tool schiebt Änderungen ins System          |
| Audit & Historie          | Vollständig durch Git                       | Teilweise – Tool-abhängig                   |
| Rücksetzbarkeit           | Einfach über Git-Revert                     | Komplexer, oft zusätzliche Schritte nötig   |

**Fazit:**  
GitOps bietet ein konsistenteres, auditiertes und sichereres Modell – ist aber stark auf Kubernetes und deklarative Strukturen ausgelegt. CI-Ops bleibt sinnvoll in anderen Kontexten (z. B. klassische Webserver, VMs oder non-Kubernetes-Umgebungen).

---

## 🧪 Argo CD vs. Flux: Toolvergleich

Ich habe im Rahmen der Arbeit beide Tools anhand realer Anforderungen verglichen:

### Bewertete Kriterien:
- Installation & Bootstrapping
- UI & CLI-Nutzung
- Drift Detection / Reconciliation
- RBAC und Berechtigungen
- Observability
- Pattern-Umsetzung

## 🔍 Direktvergleich: Argo CD vs. Flux

Im Rahmen meiner Bachelorarbeit habe ich Argo CD und Flux v2 anhand einer Vielzahl praxisrelevanter Kriterien gegenübergestellt. Die folgende Tabelle zeigt die wichtigsten Ergebnisse im direkten Vergleich:

| **Szenario / Kriterium**              | **Flux**                                                                 | **Argo CD**                                                             |
|--------------------------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Installation**                     | ✅ Klarer Einstieg, gute Verweise nach Installation                       | ⚠️ Mangelhafte Unterstützung nach der Installation                      |
| **Bootstrapping**                    | ✅ Über Flux CLI                                                          | ✅ ArgoCD Autopilot                                                      |
| **CRD / Pruning**                    | ✅ Unterstützt                                                            | ✅ Unterstützt                                                           |
| **Eigenes Userverwaltungssystem**    | ❌ Nein, nutzt Kubernetes nativ                                           | ✅ Ja, über Argo CD ConfigMap                                           |
| **Eigenes Berechtigungssystem**      | ❌ Nein, Kubernetes RBAC                                                  | ✅ Ja, über eigene RBAC Notation in der CM                              |
| **GUI / CLI**                        | ⚠️ Reduzierter Funktionsumfang                                            | ✅ Umfangreiche Funktionalität                                          |
| **Zugriff auf Ressourcen via UI**    | ❌ Nicht unterstützt (nur via CLI)                                        | ✅ Vollständig unterstützt                                              |
| **Self-Healing**                     | ✅ Vollständig vorhanden, bei Helm manuell                                | ⚠️ Standardmäßig deaktiviert, aber verfügbar                            |
| **Ignore Rules / Diffs**             | ⚠️ Für Helm Releases und Git-Repos                                       | ✅ Auf System- und Application-Ebene möglich                            |
| **Berechtigungen (RBAC)**            | ✅ Kubernetes-RBAC, SSO für UI                                            | ✅ Eigene Notation, SSO für UI & CLI                                    |
| **Observability**                    | ⚠️ 27 Provider, kein SMTP (nur Workaround)                               | ⚠️ 19 Provider, SMTP, keine Git Commit Status Updates                   |
| **Configuration Management Tools**   | ✅ Helm (über CLI), Kustomize                                             | ⚠️ Helm (über CLI **nicht** erreichbar), Kustomize                     |
| **Feingranulare CRD-Nutzung**        | ✅ Alles ist eine CRD                                                     | ⚠️ Nicht alles ist eine CRD (z. B. Helm Releases)                        |
| **Automatisierte Image-Updates**     | ✅ Unterstützt                                                            | ❌ Nicht unterstützt                                                     |
| **Patterns & Best Practices**        | ⚠️ Multi-Cluster, Repo-Support, keine Doku zu „Instance per Namespace“   | ✅ Multi-Cluster, Repo-Support, „Instance per Namespace“ dokumentiert   |

### Ergebnis:
- **Argo CD:** Ideal für Teams mit GUI-Fokus, sehr einsteigerfreundlich.
- **Flux:** Lightweight, Git-nah, scriptbar – gut für Automatisierung und Git-Fans.

---

## 💡 Wann lohnt sich GitOps?

**GitOps eignet sich besonders, wenn:**
- ✅ Du Kubernetes einsetzt  
- ✅ Du auf deklarative Konfiguration setzt  
- ✅ Du viele Umgebungen verwaltest  
- ✅ Du Auditing, Self-Healing und schnelles Troubleshooting brauchst

**Weniger geeignet, wenn:**
- ❌ Du keine Kubernetes-Infrastruktur nutzt  
- ❌ Deine Deployments sehr selten sind  
- ❌ Deine Organisation keine Git-zentrierte Arbeitsweise hat

---

## 📚 Fazit & Ausblick

GitOps ist kein Allheilmittel – aber ein mächtiger Ansatz für moderne Teams.  
> Die Wahl des richtigen Tools hängt von Kontext, Teamstruktur und Automatisierungsgrad ab.

### 🔭 Weiterführende Fragen für zukünftige Forschung:
- Wie lässt sich **GitOps mit DevSecOps** und **Plattform Engineering** verbinden?
- Welche Rolle spielen Tools wie **Crossplane**, **Backstage** oder **OPA** im erweiterten GitOps-Kontext?
- Wie sieht **GitOps ohne Kubernetes** aus?

---

👨‍💻 **Daniel Lambrecht, 2024**

> Die vollständige Bachelorarbeit kann bei Interesse gerne auf Anfrage oder über meinen Blog eingesehen werden.
