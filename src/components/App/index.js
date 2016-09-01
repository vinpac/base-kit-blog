import React, { Component } from 'react'
import Toolbar from '../Toolbar'

export default class App extends Component {
  render() {
    return (
      <div className="view-posts">
        <Toolbar />
        <div className="container">
          <div className="posts-list">
            <div className="row">
              <div className="col-12">
                <div className="post-link large">
                  <a href="" className="img-cover" style={{ backgroundImage: `url(https://cdn-images-1.medium.com/max/1000/1*K87jrVuLhPozNP0QihjFZw.jpeg)` }} />
                  <div className="content">
                    <a href="" className="link-muted">
                      <h3>Taking mental health discussions off the bench at work</h3>
                      <p>Taking mental health discussions off the bench at work</p>
                    </a>
                    <p>Por: <a href="">Marton Santos</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-top">
              <div className="col-4">
                <div className="post-link">
                  <a href="" className="img-cover" style={{ backgroundImage: `url(https://cdn-images-1.medium.com/max/1000/1*K87jrVuLhPozNP0QihjFZw.jpeg)` }} />
                  <div className="content">
                    <a href="" className="link-muted">
                      <h4>Taking mental health discussions off the bench at work</h4>
                      <p>Taking mental health discussions off the bench at work</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="post-link">
                  <a href="" className="img-cover" style={{ backgroundImage: `url(https://cdn-images-1.medium.com/max/800/1*sR9PVI4SNT7ah6o-vY61AQ.png)` }} />
                  <div className="content">
                    <a href="" className="link-muted">
                      <h4>The Value of Instagram Story Takeovers</h4>
                      <p>Even though Instagram Stories have only been around for two weeks, you can already see Snapchat-like behaviors crossing over to Instagram…</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="post-link">
                  <a href="" className="img-cover" style={{ backgroundImage: `url(https://cdn-images-1.medium.com/max/400/0*tuEZwoT-YS7NaK3v.)` }} />
                  <div className="content">
                    <a href="" className="link-muted">
                      <h4>The Value of Instagram Story Takeovers</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis deleniti unde repellat.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-top">
              <div className="col-4">
                <div className="post-link">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/0*tuEZwoT-YS7NaK3v.)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
              <div className="col-4">
                <div className="post-link">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/1*GSBbWb5EPU7GpwVMUedDhQ.jpeg)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
              <div className="col-4">
                <div className="post-link">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/1*CtAH1ZH2aIYnf606F_-35g.jpeg)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
