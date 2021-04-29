export const vueInterfaceUtilisateur = `

<!-- Interface utilisateur -->
    <!--
    <div class="interface-utilisateur">
        <div class="container-fluid" id="menu">
            <section id="parametres">
                    <div class="row align-items-end cols-12">
                            <div class="col-3" id="logo-inter">
                                    <img class="logo" src="images/logo-temp.png">
                                    <div class="dropdown">
                                          <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cheval
                                          </button>
                                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Egédan</a></li>
                                                <li><a class="dropdown-item" href="#">La Japonnaise</a></li>
                                                <li><a class="dropdown-item" href="#">Ibrahim El Fathal</a></li>
                                          </ul>
                                    </div>
                            </div>
                            <div class="col-3">
                                    <img class="piaf" src="images/bird-inter.svg">
                            </div>
                            <div class="d-flex flex-row-reverse col-6" id="mode-inter">
                                <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault"><img id="icone-mode" src ="images/sun.svg"></label>
                                </div>    
                            </div>        
                    </div>   
            </section>
        </div>
        -->
        <!-- Séparation -->
       
        <section id="herbe>
                <div class="row">
                    <div class="sol-inter"></div>
                </div>
        </section>
        
        <!-- Séparation -->
        
        <section id="separation">
                <div class="row">
                    <div class="separation"></div>
                </div>
        </section>
        
        <div class="sidebar">

          <ul class="workouts">
            <form class="form hidden">
              <div class="form__row">
                <label class="form__label">Type</label>
                <select class="form__input form__input--type">
                  <option value="running">Running</option>
                  <option value="cycling">Cycling</option>
                </select>
              </div>
              <div class="form__row">
                <label class="form__label">Distance</label>
                <input class="form__input form__input--distance" placeholder="km" />
              </div>
              <div class="form__row">
                <label class="form__label">Duration</label>
                <input
                  class="form__input form__input--duration"
                  placeholder="min"
                />
              </div>
              <div class="form__row">
                <label class="form__label">Cadence</label>
                <input
                  class="form__input form__input--cadence"
                  placeholder="step/min"
                />
              </div>
              <div class="form__row form__row--hidden">
                <label class="form__label">Elev Gain</label>
                <input
                  class="form__input form__input--elevation"
                  placeholder="meters"
                />
              </div>
              <button class="form__btn">OK</button>
            </form>
            <li class="workout workout--running" data-id="1234567890">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">🏃‍♂️</span>
            <span class="workout__value">5.2</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">24</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">4.6</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">178</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>

        <li class="workout workout--cycling" data-id="1234567891">
          <h2 class="workout__title">Cycling on April 5</h2>
          <div class="workout__details">
            <span class="workout__icon">🚴‍♀️</span>
            <span class="workout__value">27</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">95</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">16</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">223</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
          </ul>
        </div>  
    </div>

    <div id="map"></div>
        <!-- Affichage parcours -->
        
        </div>
`;