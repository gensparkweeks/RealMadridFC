import React, {Component} from "react";
import bernabeu from '../assets/images/bernabeu.jpg';

class Home extends Component{

    render(){

        return(
            <div className="center">
                <article className="article-item article-detail">
                    <div className="image-full">
                        <img src={bernabeu} alt="Santiago Bernabeu" />
                    </div>

                    <h1 className="subheader">Santiago Bernabeu Stadium</h1>

                    <p>
                        On 22 June 1944, the Banco Mercantil e Industrial bank granted credit to Santiago Bernabeu and Rafael Salgado for the purchase of the land adjacent to the old Chamartín Stadium. On 5 September 1944, architects Manuel Munoz Monasterio and Luis Alemany
                        Soler were hired and the structure on the site began to give way to the new stadium.
                    </p>
                    <p>
                        The stadium was inaugurated on 14 December 1947 with a match between Real Madrid and the Portuguese side Os Belenenses. After the preliminaries, at 15:30 referee Pedro Escartín from the Madrid school started the match. Real Madrid striker Sabino Barinaga
                        scored the first goal in the 15th minute with a header.
                    </p>
                    <p>
                        The stadium's official name at the time was Estadio Real Madrid Club de Fútbol, although it continued to be known among fans as Nuevo Estadio Chamartín (English: New Chamartín Stadium) or simply Chamartín. The stadium had an initial capacity of 75,145
                        spectators, 27,645 of which had seats (7,125 covered) and 47,500 for standing fans.
                    </p>

                    <p>
                        The New Bernabéu is just months away from completion. The Santiago Bernabéu stadium has undergone countless makeovers since its inauguration in December 1947. It was first expanded in the mid-50s, increasing its capacity from 81,000 to 125,000.
                    </p>                                                    
                </article>

            </div>
            
        );
    }
}
export default Home;