
const Footer = () => {
    return (
        <section class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p class="text-justify"><i>[APP NAME]</i> is an online marketplace that facilitates exchange of agricultural products in the Philippines. [APP NAME] is inspired from <a href="https://agro-market24.eu/" target="_blank">Agro-Market24</a>, an international agricultural exchange platform based in Europe.</p>
                </div>

                <div class="col-sm-12 col-md-6">
                    <div class="row">
                    <div class="col col-6">
                        <h6>Contact Info</h6>
                        <ul class="footer-links">
                        <li>catayasericjay@gmail.com</li>
                        <li>UI Design</li>
                        <li>PHP</li>
                        </ul>
                    </div>

                    <div class="col col-6">
                        <h6>Links</h6>
                        <ul class="footer-links">
                        <li><a href="http://scanfcode.com/about/">Portfolio</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Github</a></li>
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