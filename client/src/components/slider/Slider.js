import React from 'react'
import  './styles.css'
import { useEffect } from 'react'

    let i = 0;
    let mainPosts
    let posts 

  
    let postIndex = 0;
    let currentPost
    let currentMainPost 
function progress() {
  if (i === 100) {
    i = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}
export default () => {


  useEffect(() => {
    // //let i = 0;
     mainPosts = document.querySelectorAll(".main-post");
     posts = document.querySelectorAll(".post");

  
      postIndex = 0;
     currentPost = posts[postIndex];
     currentMainPost = mainPosts[postIndex];

    setInterval(progress, 100); // 180



  }, [])
  return (
    <div className="mb-2 carousell">
      <div className="progress-bar progress-bar--primary hide-on-desktop">
        <div className="progress-bar__fill"></div>
      </div>

      <header className="main-post-wrapper">

        <div className="slides">
        <article className="main-post main-post--active">
            <div className="main-post__image">
              <img className="sdimage" src="assets/img/SARMAD ALI KHOKAR.JPG" alt="Hamilton wants harder championship fight from Leclerc and
                  Verstappen" />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">News</span>
              </div>
              <h1 className="main-post__title">Hamilton wants harder championship fight from Leclerc and Verstappen
              </h1>
              <a className="main-post__link" href="#">
                <span className="main-post__link-text">find out more</span>
                <svg
                  className="main-post__link-icon main-post__link-icon--arrow"
                  width="37"
                  height="12"
                  viewBox="0 0 37 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                    stroke="white"
                  />
                </svg>
              </a>
            </div>
          </article>
          <article className="main-post">
            <div className="main-post__image">
              <img src="https://www.starmarketingonline.com/wp-content/uploads/2020/08/IMG_487-300x164.jpg" alt="New McLaren wind tunnel 'critical' to future performance, says Tech Director Key" />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">News</span>
              </div>
              <h1 className="main-post__title">New McLaren wind tunnel 'critical' to future performance, says Tech Director Key</h1>
              <a className="main-post__link" href="#">
                <span className="main-post__link-text">find out more</span>
                <svg
                  className="main-post__link-icon main-post__link-icon--arrow"
                  width="37"
                  height="12"
                  viewBox="0 0 37 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                    stroke="white"
                  />
                </svg>
              </a>
            </div>
          </article>
          <article className="main-post main-post--not-active">
            <div className="main-post__image">
              <img src="https://www.formula1.com/content/dam/fom-website/sutton/2019/Hungary/Saturday/1017645792-LAT-20190803-_2ST5188.jpg.transform/9col-retina/image.jpg" alt="What To Watch For in the 2019 Hungarian Grand Prix" />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">Video</span>
              </div>
              <h1 className="main-post__title">What To Watch For in the 2019 Hungarian Grand Prix</h1>
              <a className="main-post__link" href="#">
                <svg
                  className="main-post__link-icon main-post__link-icon--play-btn"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C20000"
                    strokeWidth="2"
                  />
                  <path d="M14 10L8 6V14L14 10Z" fill="white" />
                </svg>
                <span className="main-post__link-text">play video</span>
              </a>
            </div>
          </article>
          <article className="main-post main-post--not-active">
            <div className="main-post__image">
              <img className="sdimage" src="assets/img/SARMAD ALI KHOKAR.JPG" alt="Hamilton wants harder championship fight from Leclerc and
                  Verstappen" />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">News</span>
              </div>
              <h1 className="main-post__title">Hamilton wants harder championship fight from Leclerc and Verstappen
              </h1>
              <a className="main-post__link" href="#">
                <span className="main-post__link-text">find out more</span>
                <svg
                  className="main-post__link-icon main-post__link-icon--arrow"
                  width="37"
                  height="12"
                  viewBox="0 0 37 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                    stroke="white"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </header>

      <div className="posts-wrapper hide-on-mobile">
      <article className="post post--active">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <span className="post__tag">News</span>
            <p className="post__published">08 August 2019</p>
          </header>
          <h2 className="post__title">Hamilton wants harder championship fight from Leclerc and Verstappen
          </h2>
        </article>
        <article className="post">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <span className="post__tag">News</span>
            <p className="post__published">16 August 2019</p>
          </header>
          <h2 className="post__title">New McLaren wind tunnel 'critical' to future performance, says Tech Director Key</h2>
        </article>
        <article className="post">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <span className="post__tag">Video</span>
            <p className="post__published">12 August 2019</p>
          </header>
          <h2 className="post__title">What To Watch For in the 2019 Hungarian Grand Prix</h2>
        </article>
        <article className="post">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <span className="post__tag">News</span>
            <p className="post__published">08 August 2019</p>
          </header>
          <h2 className="post__title">Hamilton wants harder championship fight from Leclerc and Verstappen
          </h2>
        </article>
      </div>

  
      <a onClick={()=>{
        i=100;
      }} className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="color-black carousel-control-prev-icon"></span>
      </a>
      <a onClick={()=>{i=100}} className="carousel-control-next" href="#demo" data-slide="next">
        <span className="color-black carousel-control-next-icon"></span>
      </a>
    </div>
  )
}