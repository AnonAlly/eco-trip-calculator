# Refactoring — EcoTrip Calculator
**Groupe :** Arthur GAYOT, Romaric Mion

---

## Principe SOLID appliqué : Open / Closed Principle

**Problème identifié :**
On pouvait accéder au méthodes et propriétés des classes (même s'il y'a "_"), dans calculatorService, compareService et historyService (backend).

**Transformation réalisée :**
Transformation des classes, avec des interfaces et classes abstraites.

**Avant :**
```[TypeScript]
class HistoryService {
  data: any[] = [];
  counter: number = 0;
[...]
}
```

**Après :**
```[TypeScript]
interface Trip {
  id: number;
  co2: number;
  timestamp: Date;
  [key: string]: any;
}

export abstract class HistoryService {
  protected data: Trip[] = [];
  private counter: number = 0;
}
```

**Bénéfice concret :**
On peut maintenant ajouter un mode de transport sans toucher à la classe de base, pareil pour l'historique et le calcul.

---

## Pattern GOF appliqué : Strategy

**Problème résolu :**
Toute la logique de calcule est dans une seul classe et avec trois fonctions.

**Structure mise en place :**
Appliquer des strategy (faire plusieurs calculator dans plusieurs fichier/classes)

**Bénéfice concret :**
Lisibilité, maintenabilité

TODO : Faire du polymorphisme avec les calculator (faire une variable avec le type Calculator et plusieurs classe qui hérite de ce dernier et selon le type de vehicule, définir la variable selon le type hérité (CarCAlculator, BikeCalculator) et ne faire qu'un appel de calculator pour récupérer le result/score)

---

## Object Calisthenics appliquées

### Règle #6 — Ne pas abréger

**Violation originale :** `calculatorService.ts & app.ts`
Nom de variables abrégées.

**Transformation :**
Selon les id présents dans app.js, j'ai refactoré le nom des variables à partir de là pour le backend et le frontend.

d -> distance
ct -> carType
etc...

**Bénéfice :**
Meilleure compréhension du code à la première lecture. Pas besoin de chercher dans tout le projet et de faire des allers-retours entre les fichiers pour comprendre le code.

### Règle 2 — Ne pas utiliser le mot-clé else

**Violation originale :** `calculatorService.ts`
Utilisation du else dans la fonction getLabel().

**Transformation :**
Suppression du else, utilisation d'un early return.

**Bénéfice :**
Reduction de la charge cognitive pour la lecture du code