export const vueInterfaceUtilisateur = `
<div class="options">
    <!--
    <img src="../images/bird-inter.svg" alt="Oiseau" class="oiseau" />
    -->
    <div class="form-check form-switch" id="checkbox">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                    
    </div>
    <img id="icone-mode-inter" src ="images/sun.svg">
    <img src="../images/engrenage.svg" alt="Paramètres" class="engrenage" />
</div>
<div class="sidebar">
      <img src="../images/logo.svg" alt="Logo" class="logo" />
      <img src="../images/fleche.svg" alt="Fleche-choix" class="fleche" />

      <ul class="workouts">
        <form class="form hidden">
          <div class="form__row">
            <label class="form__label">Type</label>
            <select class="form__input form__input--type">
              <option value="running">Pas</option>
              <option value="cycling">Trot</option>
              <option value="cycling">Galop</option>
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
        
        <!--
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
      -->  
      </ul>
 
      <img src="../images/bird-inter.svg" alt="Oiseau" class="oiseau" />
    </div>

    <div id="map"></div>








`;