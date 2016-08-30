import React, { Component } from 'react'
import Toolbar from '../Toolbar'

export default class App extends Component {
  render() {
    return (
      <div className="view-posts">
        <Toolbar />
        <div className="container container-lg">
          <div className="posts-list">
            <article className="post">
              <section className="block-media dark-overlay">
                <div className="content content-light content-over-media bottom">
                  <h1>Apple just got hit with a class action lawsuit over its so-called ‘touch disease’</h1>
                  <p>By Izzy Nobre</p>
                </div>
                <video src="http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/08/ezgif.com-optimize-1-3.mp4" className="fill-width" autoPlay loop/>
              </section>
              <section className="hidden content-light dark-overlay" style={{'backgroundImage': `url(http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2015/11/Apple-Store.jpg)`}}>
                <div className="content">
                  <header className="text-center">
                    <h2 className="text-normal">Introducing Relay</h2>
                    <p><a href="">Siddarth Chandrasekaran</a> <span>on September</span></p>
                  </header>
                  <p>Today, mobile e-commerce websites aren’t working: Ten-step shopping carts, mandatory account signup, slow page loads. When we get linked to a shopping cart on our phone, we usually just give up. That shouldn’t be surprising—most mobile shopping sites are fundamentally the same as the desktop sites that preceded them, despite the medium calling for something completely different.</p>
                  <p>The result has been predictable. Despite mobile devices representing 60% of browsing traffic for shopping sites, they only make up 15% of purchases.</p>
                </div>
              </section>
              <section>
                <div className="content">
                  <h5>Why SHA-1, TLS 1.0 and 1.1 are insecure</h5>
                  <p>Today, mobile e-commerce <a href="">websites</a> aren’t working: Ten-step shopping carts, mandatory account signup, slow page loads. When we get linked to a shopping cart on our phone, we usually just give up. That shouldn’t be surprising—most mobile shopping sites are fundamentally the same as the desktop sites that preceded them, despite the medium calling for something completely different.</p>
                  <p>The result has been predictable. Despite mobile devices representing 60% of browsing traffic for shopping sites, they only make up 15% of purchases.</p>
                </div>
              </section>
              <div className="block-media medium">
                <div className="video">
                  <div className="video-thumb"><i className="fa fa-play" /></div>
                  <video poster="https://stripe.com/img/blog/posts/atlas-update/atlas-update@2x.png">
                    <source src="https://stripe-images.s3.amazonaws.com/videos/blog/atlas-update/atlas-update.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
              <section className="hidden block-media medium">
                <a href="" className="media-link">
                  <img src="https://66.media.tumblr.com/22fb081cbe11f0285b5279691deee878/tumblr_n0r0i4bXtJ1qkksf7o1_500.gif" alt=""/>
                  <legend>http://run-free-baby.tumblr.com/</legend>
                </a>
              </section>
              <section>
                <div className="content">
                  <p>Today, mobile e-commerce <a href="">websites</a> aren’t working: Ten-step shopping carts, mandatory account signup, slow page loads. When we get linked to a shopping cart on our phone, we usually just give up. That shouldn’t be surprising—most mobile shopping sites are fundamentally the same as the desktop sites that preceded them, despite the medium calling for something completely different.</p>
                  <p>The result has been predictable. Despite mobile devices representing 60% of browsing traffic for shopping sites, they only make up 15% of purchases.</p>
                  <div className="row inner-content">
                    <div className="col-6">
                      <a href="" className="link-box">
                        <i className="fa fa-github" />
                        <h6>Se torne um Padrim</h6>
                        <p>Nos ajude a cresçer!</p>
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="" className="link-box">
                        <i className="fa fa-paypal" />
                        <h6>Se torne nosso patrão!</h6>
                        <p>Nos ajude a cresçer!</p>
                      </a>
                    </div>
                  </div>
                  <h3>Assine nosso feed!</h3>
                  <p>Feed, RSS e iTunes: http://feeds.feedburner.com/Papricast Para assinar no iTunes, clique na aba Avançado, e Assinar Podcast. Cole o endereço e confirme. Assim você recebe automaticamente os novos episódios.</p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
