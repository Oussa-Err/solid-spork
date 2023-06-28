import React from 'react'
import panier from '../../../assets/article3imgAlt.jpg'
import huile from '../../../assets/huile-bio.jpeg'
import './panier.css'
import poulet from '../../../assets/collage-poulet.jpeg'

import Countdown from '../countdown/Countdown'

const Panier = () => {
    return (
        <div>
            <div className='container-huile-poulet-oeuf' >
                <div className='panier-container'>
                    <div className='panier-description'>
                        <h1>Le panier de légumes bio</h1>

                        <p>Le panier bio de <a href="/"> <span style={{ color: 'green' }}>Healthy Farm</span></a>, est composé de 10 kilos de légumes de 11 variétés différentes selon les saisons. Conçu pour répondre aux besoins d'une famille de trois personnes ou d'un couple qui consomme régulièrement des légumes.</p>

                        <p> Si vous recherchez des légumes bio de qualité, frais et savoureux, ce panier est fait pour vous! Chaque semaine, nous vous proposons un panier de légumes 100% bio, cultivés sur notre ferme. Les légumes sont cueillis le matin même de la livraison, garantissant ainsi leur fraîcheur maximale.</p>

                        <h1>Livraison de votre panier à domicile </h1>

                        <p>La livraison du Panier de légumes <a href="https://www.passeportsante.net/fr/Actualites/Dossiers/DossierComplexe.aspx?doc=10-bienfaits-bio-sante" target='_blank'> <span style={{ color: 'green' }}>BIO</span></a> de la ferme Healthy Farm est disponible chaque samedi</p>
                        <p>vers: Rabat, salé, témara, Tamesna, Khemisset, </p>

                        <p>Faites-nous confiance pour vous fournir des légumes de qualité supérieure. Nous accordons un grand soin à votre commande et manipulons les fruits et légumes avec précaution afin qu'ils ne s'abîment pas pendant le transport.</p>
                    </div>
                    <div className='panier__picture-container'>
                        <img src={panier} alt="panier" />
                    </div>
                </div>

                <div className='huile-container'>
                    <div className='huile__picture-container'>
                        <img src={huile} alt="huile" />
                    </div>
                    <div className='huile-description'>
                        <h1>Découvrez l’huile d’olive vierge extra douce de <span style={{ color: 'green' }}>Healthy Farm!</span></h1>
                        <p>L'huile d'olive vierge bio qui est de qualité supérieure, est obtenue à partir d'une première pression à froid ou simplement extraite à froid.</p>
                        <Countdown />
                        <p>L'huile d'olive biologique, un trésor millénaire, est disponible chez nous à un prix exceptionnel de seulement <span style={{ color: 'green' }}>130 dh</span> le litre. Savourez cette huile délicieuse en cuisine, en salade ou même sur du pain, tout en bénéficiant de ses nombreux bienfaits pour la santé. Découvrez notre passion pour la qualité et la tradition, et laissez-vous séduire par l'essence pure de l'huile d'olive biologique.</p>
                    </div>
                </div>

                <div className='oeuf-container'>
                    <div className='oeuf__picture-container'>
                        <img src={poulet} alt="poulet" />
                    </div>
                    <div className='oeuf-description'>
                        <h1>Œufs Beldi</h1>
                        <p>Nos poules, épanouies dans leur environnement naturel, profitent d'une vie libre et saine en plein air. Elles ont la possibilité de se déplacer librement dans de vastes espaces, grattant la terre à la recherche de graines et de légumineuses qui constituent leur alimentation quotidienne. Nous veillons à ce que leur régime alimentaire soit équilibré et riche en nutriments essentiels pour leur santé et leur bien-être.</p>
                        <p>Faites le choix de la nature, de la fraîcheur et du goût authentique en optant pour nos œufs provenant de poules élevées en plein air, au prix attractif de seulement <span style={{ color: 'green' }}>3 dh</span> l'unité!</p>
                        <h1>Poulet Fermier Élevé en Plein Air - Une Viande de Qualité Supérieure</h1>

                        <p><em>De plus, </em>nous sommes ravis de vous offrir également notre délicieux poulet élevé en plein air, élevé avec la même attention et le même souci du bien-être animal, ce qui se traduit par une viande tendre, juteuse et pleine de saveur. </p>
                        <p>N'hésitez pas à goûter à notre sélection de poulet élevé en plein air, disponible à un prix abordable. Faites confiance à notre engagement envers la qualité, le respect de l'environnement et le bien-être animal.</p>
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