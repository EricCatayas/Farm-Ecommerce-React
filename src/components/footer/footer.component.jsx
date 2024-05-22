import "./footer.styles.css";

const Footer = () => {
    return (
        <section class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p class="text-justify"><i>Agri-Store</i> is an online marketplace that facilitates exchange of agricultural products in the Philippines. Agri-Store is inspired from <a href="https://agro-market24.eu/" target="_blank">Agro-Market24</a>, an international agricultural exchange platform based in Europe.</p>
                </div>

                <div class="col-sm-12 col-md-6">
                    <div class="row">
                    <div class="col col-6">
                        <h6>Contact Info</h6>
                        <ul class="footer-links">
                        <li>catayasericjay@gmail.com</li>
                        <li>(+63) 936 728 8737</li>
                        <li>P. Gomez Street, Cebu City</li>
                        </ul>
                    </div>

                    <div class="col col-6">
                        <h6>Links</h6>
                        <ul class="footer-links">
                        <li><a href="https://farmecommerce.azurewebsites.net/swagger/index.html" target="_blank">API</a></li>
                        <li><a href="https://ericjay.azurewebsites.net" target="_blank">Portfolio</a></li>
                        <li><a href="https://github.com/EricCatayas/Farm-Ecommerce-React" target="_blank">Github</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <hr></hr>
            </div>
            <div class="container">
                <div class="row">
                <div class="col-xs-12">
                    <p class="copyright-text">Designed, developed, and maintained by Eric Jay Catayas </p>
                </div>
                {/* ref: https://codepen.io/scanfcode/pen/MEZPNd */}
                </div>
            </div>
        </section>
    );
}

export default Footer;