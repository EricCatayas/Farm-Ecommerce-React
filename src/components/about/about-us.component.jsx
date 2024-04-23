import "./about-us.styles.scss";

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-lg-2">
                        <div className="about-img">
                            <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-landing.jpg" alt="about us image"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-1 about-content">
                        <h1 className="mb-4">Agri-Store</h1>
                        <p>Agri-Store is a modern agricultural exchange platform based in the Philippines. 
                            In here, producers and buyers can easily establish commercial connections and collaborate swiftly. 
                            Advertise your products, connect with other sellers and buyers, and conduct seamless transactions all in one place.</p>
                        <h2 className="text-center mt-5">Who uses Agri-Store?</h2>
                        <ul>
                            <li>Farmers</li>
                            <li>Livestock buyers and sellers</li>
                            <li>Exporters of agricultural products</li>
                            <li>Importers of agricultural products</li>
                            <li>Agricultural products wholesalers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;