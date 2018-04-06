JoyrideComponent Documentation

Basé sur React Joyride

https://github.com/gilbarbara/react-joyride

Installation

Création d’une application React via la commande :

create-react-app

Dans le répertoire principale de l’application, écrire la commande: 

npm install --save react-joyride

Dans le App.js crée, ajouter : 

import “../node_module/react-joyride/lib/react-joyride-compiled.css”

Dans la fonction render(), ajouter le composant JoyrideComponent. Ce composant est une classe factorisant le composant Joyride de la librarie React Joyride.






La Classe

A besoin de : 

import React, { Component } from 'react';
import Joyride from 'react-joyride';

export default class JoyrideComponent extends Component {};

L’utilisation est simple: 

On crée les différentes étapes grâce à la méthode   createStep(title, text, selector, type, position, style);
	On aura le titre du cadre, son texte, le sélecteur sur lequel le cadre va être appliqué (un className ou un Id), le type qui peut être click ou hover et la position (left, right, bottom-left…). Le style peut être ajouté pour donner du css au cadre. La méthode createStep doit être appelée dans la méthode componentDidMount();

 2) Il n’y a plus qu’à faire voir la méthode render() qui va définir les paramètres du composant. Les paramètres essentiels sont “run” pour lancer le Joyride et “steps” pour lui indiquer le tableau des étapes du tutoriel insérées par createStep. On a aussi le callback = {}this.
On a ensuite différentes options qui améliorent la navigation : 

autoStart => Va démarrer le tutoriel dès le chargement de App
ShowBackButton => Permet de revenir en arrière dans les étapes
showSkipButton =>  Apparition d’un bouton “skip” pour passer le tutoriel
showStepsProgress => Montre le nombre progressif d’étapes du tutoriel
Type => peut être “continuous” ou “single” (pas de pause entre les étapes ou étape par étape)

  render()
  {
    return (
    <Joyride
    ref="joyride"
    steps={this.state.steps}
    run={true} // or some other boolean for when you want to start it
    debug={false}
    autoStart={true}
    showBackButton={true}
    showSkipButton={true}
    showStepsProgress={true}
    type={this.state.joyrideType}
    callback={this.callback}
    />);
  }
}

