import "./about-us.styles.css";

const AboutUs = () => {
    return (
        <div class="container">
            <div class="row about-section">
                <div class="col-lg-3">
                    <div class="about-img">
                        <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-1.jfif" alt="Left Image 1"/>
                        <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-2.jfif" alt="Left Image 2"/>
                    </div>
                </div>
                <div class="col-lg-6 about-content">
                    <img src="logo.png" alt="Farm Ecommerce Logo" class="mb-4"/>
                    <h1 class="mb-4">Agro-Market24</h1>
                    <p>Agro-Market24 is a modern International agricultural exchange. We gather the agricultural and fruit
                        growing community in one place. In Agro-Market24 producers and buyers can acquire commercial contacts
                        and cooperate in an easy and fast way. You can add and view advertisement, contact other users via
                        messenger and carry out transactions.</p>
                    <h2 class="text-center mt-5">Who uses Agro-Market24?</h2>
                    <ul>
                        <li>Fruit growers</li>
                        <li>Farmers</li>
                        <li>Distributors of agricultural products</li>
                        <li>Exporters of agricultural products</li>
                        <li>Importers of agricultural products</li>
                        <li>Agricultural products wholesalers</li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <div class="about-img">
                        <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-4.jfif" alt="Right Image 1"/>
                        <img src="https://unlimitedworks.blob.core.windows.net/farmecommerce/about-us-image-6.jfif" alt="Right Image 2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;