# Refactoring — EcoTrip Calculator
**Groupe :** [Prénom 1, Prénom 2, Prénom 3]

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

## Pattern GOF appliqué : [nom du pattern]

**Problème résolu :**
[Quel problème de conception ce pattern adresse-t-il dans ce contexte ?]

**Structure mise en place :**
[Décrivez les classes/interfaces créées et leur rôle]

**Bénéfice concret :**
[Ce que ça change en pratique]

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