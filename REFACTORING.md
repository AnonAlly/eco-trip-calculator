# Refactoring — EcoTrip Calculator
**Groupe :** [Prénom 1, Prénom 2, Prénom 3]

---

## Principe SOLID appliqué : [nom du principe]

**Problème identifié :**
[Décrivez ce qui était violé dans le code original — localisez avec fichier + ligne]

**Transformation réalisée :**
[Ce que vous avez fait — créé une interface ? extrait une classe ? inversé une dépendance ?]

**Avant :**
```[langage]
// extrait du code original
```

**Après :**
```[langage]
// extrait du code refactoré
```

**Bénéfice concret :**
[Ce que ça change en pratique : "on peut maintenant ajouter un mode de transport sans toucher à..."]

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