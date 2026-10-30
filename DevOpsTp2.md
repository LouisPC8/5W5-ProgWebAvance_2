DevOpsTp2



Us :



1: En tant que joueur je veux avoir un deck mélangé lors du début d'un match pour ne pas toujours commencer avec les mêmes cartes.

&#x09;

* Mélanger de manière aléatoire les cartes lors d'un startMatchEvent



2: En tant que joueur je veux pouvoir jouer des cartes seulement si je le peut afin de ne pas dépasser le mana.

* Vérifier si le joueur à assez de Mana pour jouer la carte dans le playCard.
* Si oui, le nb de mana est retiré au total du joueur.
* Si non, la carte n'est pas déplacé dans le battlefield.



3: En tant que joueur je veux pouvoir attaquer un autre joueur afin de faire avancer la partie.

* Lors d'un endTurnEvent il faut que les cartes sur le battlefield s'active avec un CardActivationEvent et attaquent les cartes de l'adversaire qui ont le même index sur le battlefield en ordre décroissant d'index.
* Lorsque CardActivationEvent est lancer on vérifie si une carte se trouve devant. Si oui, on crée deux attackEvent(un par carte) chacun va créer un CardDammageEvent et si la carte tombe à moins d'un point de vie alors un cardDeathEvent est lancé. Si il n'y avait pas de carte devant alors un seul attackEvent est créé et avec lui un PlayerDammageEvent qui dans le cas de l'épuisement des points de vie du joueur fera un PlayerDeathEvent



4: En tant que Dev je veux pouvoir tester facilement le nouveau pouvoir afin d'éviter de devoir lancer tout l'application chaque fois.

* Faire le test pour le pouvoir qui va être ajouté.

