import "./about-us.styles.scss";

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-lg-1 about-content">
                        <img src="logo.png" alt="Farm Ecommerce Logo" className="mb-4"/>
                        <h1 className="mb-4">Agro-Market24</h1>
                        <p>Agro-Market24 is a modern International agricultural exchange. We gather the agricultural and fruit
                            growing community in one place. In Agro-Market24 producers and buyers can acquire commercial contacts
                            and cooperate in an easy and fast way. You can add and view advertisement, contact other users via
                            messenger and carry out transactions.</p>
                        <h2 className="text-center mt-5">Who uses Agro-Market24?</h2>
                        <ul>
                            <li>Fruit growers</li>
                            <li>Farmers</li>
                            <li>Distributors of agricultural products</li>
                            <li>Exporters of agricultural products</li>
                            <li>Importers of agricultural products</li>
                            <li>Agricultural products wholesalers</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 order-lg-2 about-images">
                        <div className="about-img">
                            <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-1.jfif" alt="Left Image 1"/>
                            <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-2.jfif" alt="Left Image 2"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 about-images">
                        <div className="about-img">
                            <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-4.jfif" alt="Right Image 1"/>
                            <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-6.jfif" alt="Right Image 2"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;