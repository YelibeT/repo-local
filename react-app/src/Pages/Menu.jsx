import React from "react";

export default function Menu() {
  return (
    <div>
      <section class="menu">
        <form action="">
          <input
            type="text"
            id="search-input"
            placeholder="search on menu"
          ></input>
          <button type="submit" id="search-btn">
            Search
          </button>
        </form>
        <h1>Menu</h1>
        <div class="dishes">
          <div id="Non-fasting">
            <h2>Non-fasting</h2>
            <div class="food">
              <a href="#d-popup" title="click for more details">
                <img src="/images/ድርቆሽ.jpg" alt="ድርቆሽ"></img>
                <h3>Dirikosh Firfir</h3>
              </a>
              <div class="popup" id="d-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <p>Price: 1000birr</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#t-popup" title="click for more details">
                <img src="/images/ጥብስፍ.jpg" alt=""></img>
                <h3>Tibs Firfir</h3>
              </a>
              <div class="popup" id="t-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#ch-popup" title="click for more details">
                <img src="/images/ጭቅናጥ.jpg" alt=""></img>
                <h3>Chikna Tibs</h3>
              </a>
              <div class="popup" id="ch-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#q-popup" title="click for more details">
                <img src="/images/ቅቅል.jpg" alt=""></img>
                <h3>Qiqil</h3>
              </a>
              <div class="popup" id="q-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#th-popup" title="click for more details">
                <img src="/images/ጥህሎ.jpg" alt=""></img>
                <h3>Tehilo</h3>
              </a>
              <div class="popup" id="th-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#qua-popup" title="click for more details">
                <img src="/images/ቋንጣፍ.jpg" alt=""></img>
                <h3>Quanta Firfir</h3>
              </a>
              <div class="popup" id="dqua-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#f-popup" title="click for more details">
                <img src="/images/ፍርፍር1.jpg" alt=""></img>
                <h3>Firfir</h3>
              </a>
              <div class="popup" id="f-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#fb-popup" title="click for more details">
                <img src="/images/ፍርፍር.jpg" alt=""></img>
                <h3>Firfir with Butter</h3>
              </a>
              <div class="popup" id="fb-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#ef-popup" title="click for more details">
                <img src="/images/ዕንቁላልፍ.jpg" alt=""></img>
                <h3>Enkulal Firfir</h3>
              </a>
              <div class="popup" id="ef-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#sh-popup" title="click for more details">
                <img src="/images/ሽሮበቅቤ.jpg" alt=""></img>
                <h3>Shiro with Butter</h3>
              </a>
              <div class="popup" id="sh-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#b-popup" title="click for more details">
                <img src="/images/ቦዘናሽ.jpg" alt=""></img>
                <h3>Bozena Shiro</h3>
              </a>
              <div class="popup" id="b-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#che-popup" title="click for more details">
                <img src="/images/ጨጨብሳ.jpg" alt=""></img>
                <h3>Chechebsa</h3>
              </a>
              <div class="popup" id="che-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#g-popup" title="click for more details">
                <img src="/images/ጎመንበስጋ.jpg" alt=""></img>
                <h3>Gomen Besiga</h3>
              </a>
              <div class="popup" id="g-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#gk-popup" title="click for more details">
                <img src="/images/ጎመንክትፎ.jpg" alt=""></img>
                <h3>Gomen Kitifo</h3>
              </a>
              <div class="popup" id="gk-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#sk-popup" title="click for more details">
                <img src="/images/ክትፎ.jpg" alt=""></img>
                <h3>Special Kitifo</h3>
              </a>
              <div class="popup" id="sk-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#a-popup" title="click for more details">
                <img src="/images/አዋዜጥብስ.jpeg" alt=""></img>
                <h3>Awaze Tibis</h3>
              </a>
              <div class="popup" id="a-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#du-popup" title="click for more details">
                <img src="/images/ዱለት.jpg" alt=""></img>
                <h3>Dulet</h3>
              </a>
              <div class="popup" id="du-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
          </div>
          <div id="Fasting" class="fasting">
            <h2>Fasting</h2>
            <div class="food">
              <a href="#di-popup" title="click for more details">
                <img src="/images/ድርቆሽፍ.jpg" alt="ድርቆሽ"></img>
                <h3>Dirikosh Firfir</h3>
              </a>
              <div class="popup" id="di-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#te-popup" title="click for more details">
                <img src="/images/ተጋቢኖ.jpg" alt=""></img>
                <h3>Tegebino</h3>
              </a>
              <div class="popup" id="te-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#be-popup" title="click for more details">
                <img src="/images/በየ.jpg" alt=""></img>
                <h3>Beyeayinet</h3>
              </a>
              <div class="popup" id="be-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#y-popup" title="click for more details">
                <img src="/images/የጾምኮምቦ.jpg" alt=""></img>
                <h3>Yetsom Combo</h3>
              </a>
              <div class="popup" id="y-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#f-popup" title="click for more details">
                <img src="/images/ፍርፍር1.jpg" alt=""></img>
                <h3>Firfir</h3>
              </a>
              <div class="popup" id="f-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
            <div class="food">
              <a href="#che-popup" title="click for more details">
                <img src="/images/ጨጨብሳ.jpg" alt=""></img>
                <h3>Chechebsa</h3>
              </a>
              <div class="popup" id="che-popup">
                <div class="popup-window">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <p>Description</p>
                  <button id="popup-btn">Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
