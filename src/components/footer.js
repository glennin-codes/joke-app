
import  './footer.css';
export default  function Footer(){
    return(
<footer>
  <div className='wrapper'>
    <div className='seperator padded'>
      <div className='col-2'>
        <select>
          <option>English</option>
          <option>Espaniol</option>
          <option>French</option>
          <option>Swahili</option>
        </select>
        <select>
          <option>INR</option>
        </select>
      </div>
      <div className='col-1 first'>
        <h3>Company</h3>
        <ul className="list-layout">
          <li><a href="/about/about-us" className="link-contrast">About</a></li>
          <li><a href="/careers" className="link-contrast">Careers</a></li>
          <li><a href="/press/news" className="link-contrast">Press</a></li>
          <li><a href="http://blog.glennin.com" className="link-contrast">Blog</a></li>
          <li><a href="/help?from=footer" className="link-contrast">Help</a></li>
          <li><a href="/policies" className="link-contrast">Policies</a></li>
          <li><a href="/creativity" className="link-contrast">creative minds</a></li>
          <li><a href="/terms" className="link-contrast">Terms &amp; Privacy</a></li>
        </ul>
      </div>
      <div className='col-1'>
        <h3>Discover</h3>
        <ul className="list-layout">
          <li><a href="/trust" className="link-contrast">Trust &amp; credability</a></li>
          <li><a href="/fun/" className="link-contrast">Funs &amp; Jokes</a></li>
          <li><a href="/gift" className="link-contrast">best meme site</a></li>
          <li><a href="/wishlists/meme_picks" className="link-contrast">Memes Picks</a></li>
          <li><a href="/mobile" className="link-contrast">Mobile</a></li>
          <li><a href="/.glennin/articles" className="link-contrast" >Glennin articles</a></li>
          <li><a href="/best_quotes" className="link-contrast">Best world quotes</a></li>
          <li><a href="/love/quotes" className="link-contrast">love quotes</a></li>
        </ul>
      </div>
      <div className='col-1'>
        <h3>Hosting</h3>
        <ul className="list-layout">
          <li><a href="/host" className="link-contrast">Why Host</a></li>
          <li><a href="/hospitality" className="link-contrast">Hospitality</a></li>
          <li><a href="/help/responsible-hosting" className="link-contrast">Responsible Hosting</a></li>
          <li><a href="/home-safety" className="link-contrast">Home Safety</a></li>
          <li><a href="/host/instant" className="link-contrast">Instant Book</a></li>
        </ul>
      </div>
    </div>
    <div className='seperator column text-center'>
      <h2 className='margin-below-1'>Join Us on</h2>
      <div className='smedialinks'>
      <i className="fa fa-facebook" aria-hidden="true"></i>
      <i className="fa fa-google-plus" aria-hidden="true"></i>
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <i className="fa fa-linkedin" aria-hidden="true"></i>
      <i className="fa fa-instagram" aria-hidden="true"></i>
      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <p className='copyright'> courtesy of GLENNIN TECH's</p>
</footer>
)
}