import React, { PropTypes } from 'react';

const FullPost = () => {
  return (
    <article className="post">
      <section className="">
        <div className="content">
          <h2>Taking mental health discussions off the bench at work</h2>
          <h4 className="legend">How one startup is helping employees combat stigmas around stress</h4>
          <p>By Izzy Nobre</p>
        </div>
      </section>
      <section className="block-media medium">
        <img src="https://cdn-images-1.medium.com/max/1200/1*5IyCdR-akF_17Rm0nJDR8g.jpeg" alt=""/>
      </section>
      <section className="hidden block-media dark-overlay">
        <div className="content content-light content-over-media bottom">
          <h1>Apple just got hit with a class action lawsuit over its so-called ‘touch disease’</h1>
          <p>By Izzy Nobre</p>
        </div>
        <img src="https://cdn-images-1.medium.com/max/800/1*zVCanjRsJx7lAihufNOQWw.jpeg" alt=""/>
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
          <h4>Designing, debating and deciding as a team</h4>
          <p>Putting together a design proposal is a complicated process for even the smallest teams, imagine trying to compile one with 139 other people who expect equal say. The first major point of friction came when the team had to decide between two design approaches.</p>
          <p>“I think very early, the philosophy we took was that everybody would have the opportunity to be heard, but that the team would then rally behind the best solution,” says Brent Lessard, a project manager and one of the founders of rLoop based in Toronto. “A lot of the team wanted to stick with the purity of Elon’s initial [Alpha Papers] proposal and then there were others looking at the numbers saying it’s not going to work. So we put the ideas to a vote on Slack.”</p>
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
  );
};

FullPost.displayName = 'FullPost';

export default FullPost;
