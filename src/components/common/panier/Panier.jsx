import React from 'react'
import panier from '../../../assets/article3imgAlt.jpg'
import huile from '../../../assets/huile-bio.jpeg'
import oeuf from '../../../assets/oeuf-beldi.jpeg'
import './panier.css'

const Panier = () => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <div className='panier-container'>
                        <h1>Le panier de légumes bio</h1>

                        <p>Le panier bio de <a href="/"> <span style={{ color: 'green' }}>Healthy Farm</span></a>, est composé de 10 kilos de légumes de 11 variétés différentes selon les saisons. Conçu pour répondre aux besoins d'une famille de trois personnes ou d'un couple qui consomme régulièrement des légumes.</p>

                        <p> Si vous recherchez des légumes bio de qualité, frais et savoureux, ce panier est fait pour vous! Chaque semaine, nous vous proposons un panier de légumes 100% bio, cultivés sur notre ferme. Les légumes sont cueillis le matin même de la livraison, garantissant ainsi leur fraîcheur maximale.</p>

                        <h1>Livraison de votre panier à domicile </h1>

                        <p>La livraison du Panier de légumes <a href="https://www.passeportsante.net/fr/Actualites/Dossiers/DossierComplexe.aspx?doc=10-bienfaits-bio-sante" target='_blank'> <span style={{ color: 'green' }}>BIO</span></a> de la ferme Healthy Farm est disponible chaque samedi</p>
                        <p>vers: Rabat, salé, témara, Tamesna, Khemisset, </p>

                        <p>Faites-nous confiance pour vous fournir des légumes de qualité supérieure. Nous accordons un grand soin à votre commande et manipulons les fruits et légumes avec précaution afin qu'ils ne s'abîment pas pendant le transport.</p>
                    </div>
                    <div className='picture-container'>
                        <img src={panier} alt="panier" />
                    </div>
                </div>

                <div className='huile-container'>
                    <img src={huile} alt="huile" />
                    <div className='huile-description'>
                        <h1>Découvrez l’huile d’olive vierge extra douce de <span style={{ color: 'green' }}>Healthy Farm !</span></h1>
                        <p>L'huile d'olive vierge bio qui est de qualité supérieure, est obtenue à partir d'une première pression à froid ou simplement extraite à froid</p>
                        <p>L'huile d'olives biologiques fait partie de notre patrimoine depuis des milliers d'années. Délicieuse en cuisine, en salade ou même sur du pain, elle est reconnue comme une très bonne huile pour la santé.</p>
                    </div>
                </div>

                <div className='oeuf-container'>
                    <img src={oeuf}alt="oeuf" />
                    <div className='oeuf-description'>
                        <h1>Œufs Beldi</h1>
                        <p>les poules sont libres au grand air et se nourrissentde graines et légumineuses. Les arrivages sont hebdomadaire pour vous en garantir la fraicheur.</p>
                    </div>
                </div>

                <div className='trouver-nous'>
                    <h1>OÙ NOUS TROUVER</h1>
                    <p>Si vous désirez nous rendre visite, découvrir notre panier de légumes bio ainsi que tout le reste, n’hésitez pas à nous <a href="#footer"> <span style={{ color: 'green' }}>contacter</span></a>. Nous serons ravi de vous accueillir.</p>
                    <p>À très bientôt !</p>
                </div>
            </div>
        </div>
    )
}

export default Panier