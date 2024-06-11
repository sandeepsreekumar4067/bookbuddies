import "../style/homepage.css"
import bookPng from "../assets/fronImage2.png"
import BookInterface from "./bookinterface";
const Home = () => {
    return ( 
        <div className="home-container">
            <div className="home-component">
                <div className="home-description">
                    <h1>
                        Discover your Next Read
                    </h1>  
                    <h3>
                        Buy and sell pre-loved books effortlessly. Explore, enjoy, and connect with fellow book lovers at BookNest!
                    </h3>
                    <input type="button" value="explore" />
                </div>
                <div className="book-image">
                    <img src={bookPng} alt="" srcset="" />
                </div>
            </div>
            <div className="home-footer-title">
                <p>Scroll Down</p>
            </div>
            <BookInterface/>
        </div>
     );
}
 
export default Home;