import React, { Component } from 'react'
import Toolbar from '../Toolbar'
import FullPost from '../Post/full'

export default class App extends Component {
  render() {
    return (
      <div className="view-posts">
        <Toolbar />
        <div className="container">
          <div className="posts-list">
            <div className="row">
              <div className="col-12">
                <div className="post-item">
                  <div className="row">
                    <div className="col-8">
                      <div className="img-cover" style={{ minHeight: '350px', backgroundImage: `url(https://cdn-images-1.medium.com/max/1000/1*K87jrVuLhPozNP0QihjFZw.jpeg)` }}></div>
                    </div>
                    <div className="col-4">
                      <h3>Taking mental health discussions off the bench at work</h3>
                      <p>Taking mental health discussions off the bench at work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-top">
              <div className="col-4">
                <div className="post-item">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/1*CtAH1ZH2aIYnf606F_-35g.jpeg)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
              <div className="col-4">
                <div className="post-item">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/1*GSBbWb5EPU7GpwVMUedDhQ.jpeg)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
              <div className="col-4">
                <div className="post-item">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/0*tuEZwoT-YS7NaK3v.)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
            </div>
            <div className="row margin-top">
              <div className="col-4">
                <div className="post-item">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/0*tuEZwoT-YS7NaK3v.)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
              <div className="col-4">
                <div className="post-item">
                  <div className="margin-bottom-md" style={{ minHeight: '250px', backgroundImage: `url(https://cdn-images-1.medium.com/max/400/1*GSBbWb5EPU7GpwVMUedDhQ.jpeg)`}} src="cover-image" alt=""/>
                  <h4>Taking mental health discussions off the bench at work</h4>
                  <p>Taking mental health discussions off the bench at work</p>
                </div>
              </div>
              <div className="col-4">
                <div className="post-item">
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
