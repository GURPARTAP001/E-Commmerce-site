import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            {/* we will enclose everthing inside the container */}
            <div className="home__container">
                <img className="home__img" src="https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg" alt="image" />

                {/* this are the rows which contains the various products */}
                <div className="home__row">
                    {/* we will make a product component */}
                    <Product  id="1" title="Oppo Enco X2 with Active Noise Cancellation, Triple Mic for Better Calls, Coaxial Dual-Driver for Deep bass Bluetooth Headset (Black)" price={9999} image="https://m.media-amazon.com/images/I/31wIr9DO-mL._AC_SY400_.jpg" rating={5} />
                    <Product  id="2" title="Instant Pot Air Fryer, Vortex 8 Litre ClearCook Dual Basket, Touch Control Panel, 360° EvenCrisp™ Technology, Uses 95 % less Oil, 6-in-1 Appliance: Air Fry, Roast, Broil, Bake, Reheat, and Dehydrate (Vortex 8 Litre ClearCook)
                    "  rating={4} price={29900} image="https://m.media-amazon.com/images/I/81W+9zsvSpL._AC_SY400_.jpg" />
                </div>
                <div className="home__row">
                    <Product  id="3" image="https://m.media-amazon.com/images/I/81rDAWdv5kL._SL1500_.jpg" title="Amazon Brand - Symactive Racer S2000 Series, 27.5T Geared Mountain Bike (Shimano 21-Speed Gear), Front Suspension, Dual Disc Brake, Frame Size: 15.5 inch, Alloy Stem (Green, Unisex)" price={10900} rating={5} />
                    <Product  id="4" image="https://m.media-amazon.com/images/I/61EmOOTxOTL._UX679_.jpg" title="Casio G-Shock Analog-Digital Black Dial Men's"
                    rating={4} price={10196} />
                    <Product  id="5" image="https://m.media-amazon.com/images/I/71rH7Skt1QL._SX679_.jpg" title="KOLOROBIA SRI Lankan Tropical Rainforest Wildlife Elephant Inspired Home DÉCOR Wall Plate 7.5 INCH" rating={3} price={1395} />
                </div>
                <div className="home__row">
                <Product  id="6" image="https://m.media-amazon.com/images/I/71d5fMDvq9L._SX679_.jpg" title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)" rating={4} price={14999} />
                <Product  id="7" image="https://m.media-amazon.com/images/I/81KUD5T62SL._SX679_.jpg" title="Divine Casa Microfibre Mild Winter Abstract Printed Reversible Single Bed Comforter Blanket Light Weight Quilt Duvet, Navy Blue & White 1 Pieces" price={878} rating={4}/>
                </div>
            </div>

        </div>
    )
}

export default Home
