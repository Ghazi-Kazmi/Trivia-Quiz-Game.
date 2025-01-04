function Home() {
  return (
    <div>
      <h1> HOME PAGE</h1>
      <main className="overflow-hidden">

        {/* <!-- step-number --> */}
        <div className="step-number">
          <div className="step-number-inner">
            Question <span id="activeStep">1</span>/5
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="tab-100 order-c col-md-5 p-relative">
              {/* <!-- side image --> */}
              <div className="side-img">
                <img src="assets/images/side.png" alt="side-img" />
              </div>

              {/* <!-- bar --> */}
              <div className="step-bar">
                <div className="bar">
                  <div className="w-100 fill"></div>
                </div>
                <div className="bar">
                  <div className="fill"></div>
                </div>
                <div className="bar">
                  <div className="fill"></div>
                </div>
                <div className="bar">
                  <div className="fill"></div>
                </div>
                <div className="bar">
                  <div className="fill"></div>
                </div>
              </div>
            </div>
            <div className="tab-100 col-md-7">
              <div className="show-section wrapper">
                {/* <!-- step 1 --> */}
                <section className="steps">
                  {/* <!-- form --> */}
                  <form id="step1" method="post" novalidate>
                    {/* <!-- heading --> */}
                    <h2 className="q-heading">
                      Which former British colony was given back to China in
                      1997?
                    </h2>

                    {/* <!-- form field --> */}
                    <div className="form-inner">
                      <div className="bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op1"
                          value="Russia"
                        />
                        <label>Russia</label>
                      </div>
                      <div className="delay-100 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op1"
                          value="America"
                        />
                        <label>America</label>
                      </div>
                      <div className="delay-200 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op1"
                          value="Australia"
                        />
                        <label>Australia</label>
                      </div>
                      <div className="delay-300 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op1"
                          value="Hong Kong"
                        />
                        <label>Hong Kong</label>
                      </div>
                    </div>

                    {/* <!-- next previous button --> */}
                    <div className="next-prev">
                      <button type="button" className="next" id="step1btn">
                        next question<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </section>

                {/* <!-- step 2 --> */}
                <section className="steps">
                  {/* <!-- form --> */}
                  <form id="step2" method="post" novalidate>
                    {/* <!-- heading --> */}
                    <h2 className="q-heading">
                      For which of the following disciplines is Nobel Prize
                      awarded?
                    </h2>

                    {/* <!-- form field --> */}
                    <div className="form-inner">
                      <div className="bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op2"
                          value="Physics and Chemistry"
                        />
                        <label>Physics and Chemistry</label>
                      </div>
                      <div className="delay-100 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op2"
                          value="Physiology or Medicine"
                        />
                        <label>Physiology or Medicine</label>
                      </div>
                      <div className="delay-200 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op2"
                          value="Literature Economics"
                        />
                        <label>Literature Economics</label>
                      </div>
                      <div className="delay-300 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op2"
                          value="All of the above"
                        />
                        <label> All of the above</label>
                      </div>
                    </div>

                    {/* <!-- next previous button --> */}
                    <div className="next-prev">
                      <button type="button" className="prev">
                        <i className="fa-solid fa-arrow-left"></i>last question
                      </button>
                      <button type="button" className="next" id="step2btn">
                        next question<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </section>

                {/* <!-- step 3 --> */}
                <section className="steps">
                  {/* <!-- form --> */}
                  <form id="step3" method="post" novalidate>
                    {/* <!-- heading --> */}
                    <h2 className="q-heading">
                      Fire temple is the place of worship of which of the
                      following religion?
                    </h2>

                    {/* <!-- form field --> */}
                    <div className="form-inner">
                      <div className="bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op3"
                          value="Taoism"
                        />
                        <label>Taoism</label>
                      </div>
                      <div className="delay-100 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op3"
                          value="Judaism"
                        />
                        <label>Judaism</label>
                      </div>
                      <div className="delay-200 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op3"
                          value="Zoroastrianism "
                        />
                        <label>Zoroastrianism</label>
                      </div>
                      <div className="delay-300 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op3"
                          value="Shintoism"
                        />
                        <label>Shintoism</label>
                      </div>
                    </div>

                    {/* <!-- next previous button --> */}
                    <div className="next-prev">
                      <button type="button" className="prev">
                        <i className="fa-solid fa-arrow-left"></i>last question
                      </button>
                      <button type="button" className="next" id="step3btn">
                        next question<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </section>

                {/* <!-- step 4 --> */}
                <section className="steps">
                  {/* <!-- form --> */}
                  <form id="step4" method="post" novalidate>
                    {/* <!-- heading --> */}
                    <h2 className="q-heading">
                      Who was the first Indian Commander-in-Chief (C-in-C) of
                      the Indian Army?
                    </h2>

                    {/* <!-- form field --> */}
                    <div className="form-inner">
                      <div className="bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op4"
                          value="Gen. K.M. Cariappa"
                        />
                        <label> Gen. K.M. Cariappa</label>
                      </div>
                      <div className="delay-100 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op4"
                          value="Vice-Admiral R.D. Katari"
                        />
                        <label>Vice-Admiral R.D. Katari</label>
                      </div>
                      <div className="delay-200 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op4"
                          value="Rajendra Singhji "
                        />
                        <label>Rajendra Singhji</label>
                      </div>
                      <div className="delay-300 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op4"
                          value="None of the above"
                        />
                        <label>None of the above</label>
                      </div>
                    </div>

                    {/* <!-- next previous button --> */}
                    <div className="next-prev">
                      <button type="button" className="prev">
                        <i className="fa-solid fa-arrow-left"></i>last question
                      </button>
                      <button type="button" className="next" id="step4btn">
                        next question<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </section>

                {/* <!-- step 5 --> */}
                <section className="steps">
                  {/* <!-- form --> */}
                  <form id="step5" method="post" novalidate>
                    {/* <!-- heading --> */}
                    <h2 className="q-heading">
                      For galvanizing iron which of the following metals is
                      used?
                    </h2>

                    {/* <!-- form field --> */}
                    <div className="form-inner">
                      <div className="bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op5"
                          value="Aluminium"
                        />
                        <label>Aluminium</label>
                      </div>
                      <div className="delay-100 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op5"
                          value="Copper"
                        />
                        <label>Copper</label>
                      </div>
                      <div className="delay-200 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op5"
                          value="Lead"
                        />
                        <label>Lead</label>
                      </div>
                      <div className="delay-300 bounce-left radio-field">
                        <input
                          className="checkmark"
                          type="radio"
                          name="op5"
                          value="Zinc"
                        />
                        <label>Zinc</label>
                      </div>
                    </div>

                    {/* <!-- next previous button --> */}
                    <div className="next-prev">
                      <button type="button" className="prev">
                        <i className="fa-solid fa-arrow-left"></i>last question
                      </button>
                      <button type="button" className="apply" id="sub">
                        Submit<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </section>
                <div className="question overflow-hidden">
                  <img src="assets/images/question-sign.png" alt="question" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- result --> */}
        <div className="loadingresult">
          <img src="assets/images/loading.gif" alt="loading" />
        </div>
        <div className="result_page">
          <div className="result_inner">
            <div className="result_inner2">
              <h2>Knowledge Check</h2>
              <div className="u_result">
                <div className="u_score">Your Score: </div>
                <div className="u_prcnt">20%</div>
                <span>20 Points</span>
              </div>
              <div className="p_result">
                <div className="p_score">Passing Score: </div>
                <div className="p_prcnt">80%</div>
                <span>80 Points</span>
              </div>
              <div className="line"></div>
              <div className="result_show">
                <h2>Result</h2>
                <div className="pass_check">
                  <i className="fa-solid fa-xmark"></i>You did not Pass
                </div>
                <div className="result_msg">Better Luck Next Time!</div>
              </div>
            </div>

            {/* <!-- rectangle --> */}
            <img
              className="behind_bg"
              src="assets/images/bh-clip.png"
              alt="rectangle"
            />
          </div>
        </div>
      </main>

      <div id="error"></div>
    </div>
  );
}

export default Home;
