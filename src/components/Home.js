const Home = () => {
  return (
    <>
      <main>
        <div className='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light'>
          <div className='col-md-5 p-lg-5 mx-auto my-5'>
            <h1 className='display-4 fw-normal'>Punny headline</h1>
            <p className='lead fw-normal'>
              And an even wittier subheading to boot. Jumpstart your marketing efforts with this
              example based on Apple’s marketing pages.
            </p>
            <div className='btn btn-outline-secondary'>Coming soon</div>
          </div>
          <div className='product-device shadow-sm d-none d-md-block'></div>
          <div className='product-device product-device-2 shadow-sm d-none d-md-block'></div>
        </div>

        <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
          <div className='bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'>
            <div className='my-3 py-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-light shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
            <div className='my-3 p-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-dark shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
        </div>

        <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
            <div className='my-3 p-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-dark shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
          <div className='bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'>
            <div className='my-3 py-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-light shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
        </div>

        <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
            <div className='my-3 p-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-body shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
            <div className='my-3 py-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-body shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
        </div>

        <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
            <div className='my-3 p-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-body shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
            <div className='my-3 py-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
            </div>
            <div
              className='bg-body shadow-sm mx-auto'
              style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
            ></div>
          </div>
        </div>
      </main>

      <footer className='container py-5'>
        <div className='row'>
          <div className='col-12 col-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='d-block mb-2'
              role='img'
              viewBox='0 0 24 24'
            >
              <title>Product</title>
              <circle cx='12' cy='12' r='10' />
              <path d='M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94' />
            </svg>
            <small className='d-block mb-3 text-muted'>&copy; 2017–2021</small>
          </div>
          <div className='col-6 col-md'>
            <h5>Features</h5>
            <ul className='list-unstyled text-small'>
              <li>
                <div className='link-secondary'>Cool stuff</div>
              </li>
              <li>
                <div className='link-secondary'>Random feature</div>
              </li>
              <li>
                <div className='link-secondary'>Team feature</div>
              </li>
              <li>
                <div className='link-secondary'>Stuff for developers</div>
              </li>
              <li>
                <div className='link-secondary'>Another one</div>
              </li>
              <li>
                <div className='link-secondary'>Last time</div>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5>Resources</h5>
            <ul className='list-unstyled text-small'>
              <li>
                <div className='link-secondary'>Resource name</div>
              </li>
              <li>
                <div className='link-secondary'>Resource</div>
              </li>
              <li>
                <div className='link-secondary'>Another resource</div>
              </li>
              <li>
                <div className='link-secondary'>Final resource</div>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5>Resources</h5>
            <ul className='list-unstyled text-small'>
              <li>
                <div className='link-secondary'>Business</div>
              </li>
              <li>
                <div className='link-secondary'>Education</div>
              </li>
              <li>
                <div className='link-secondary'>Government</div>
              </li>
              <li>
                <div className='link-secondary'>Gaming</div>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5>About</h5>
            <ul className='list-unstyled text-small'>
              <li>
                <div className='link-secondary'>Team</div>
              </li>
              <li>
                <div className='link-secondary'>Locations</div>
              </li>
              <li>
                <div className='link-secondary'>Privacy</div>
              </li>
              <li>
                <div className='link-secondary'>Terms</div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
