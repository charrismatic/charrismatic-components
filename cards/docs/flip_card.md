


<style>
.section {
  width: 100%;
  display: block;
  position: relative;
  padding: 0;
}

.section-inner {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.learn-more {
  color: #ffffff;
  background: #be374c;
  border-radius: 50px;
  padding: 9px 18px 9px 9px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  cursor: hand;
}

.learn-more:before {
  content: "+";
  margin-right: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  padding: 0 4px;
}

.bold {
  font-weight: bold;
}

.blue {
  color: #2c5986;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.flip_card__container {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  top: 0;
  width: 100%;
  margin-top: 0px;
  min-height: 420px;
  padding: 4em 0;
  border: 1px solid red;
  z-index: 2;
}
.flip_card__container h2 {
  text-align: center;
  margin: 10px 0;
  padding: 0;
  font-size: 19px;
  font-weight: bold;
  z-index: 2;
}
.flip_card__container p {
  font-size: 15px;
  text-align: center;
  letter-spacing: -.5px;
}
.flip_card__container .flip_card,
.flip_card__container .product-container {
  float: left;
  width: 280px;
  margin: 0 20px;
  position: relative;
  opacity: 0.0;
  transition: 1.5s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
.flip_card__container .card .front:after {
  content: "Patent Pending";
  text-align: center;
  display: block;
  color: #cecece;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -39px;
}
.flip_card__container .product-container:hover {
  margin-top: 10px !important;
  cursor: pointer;
  cursor: hand;
}

.card .back {
  color: #333;
}
.card .front {
  color: #000;
}
#controls .card .back,
#controls .card .front {
  border-color: #3f69b2;
}
#design .card .back, #design .card .front {
  border-color: #7897c5;
}
#efficiency .card .back, #efficiency .card .front {
  border-color: #647cba;
}

#design {
  transition-delay: .8s;
}

#controls {
  transition-delay: .45s;
}

#efficiency {
  transition-delay: 1s;
}

#design h2 {
  color: #7897c5;
}

#controls h2 {
  color: #3f69b2;
}

#efficiency h2 {
  color: #647cba;
}

.flip_card__container .back .product-image {
  margin: 0 auto;
  border-radius: 50%;
  width: 70%;
}
.flip_card__container .product-image {
  width: 65%;
  max-width: 150px;
  margin: 0px auto;
  display: block;
  transition: .5s;
  position: relative;
}
.flip_card__container .learn-more {
  background: none;
  display: block;
  text-align: center;
  color: #212121;
  font-size: 13px;
}
.flip_card__container .learn-more:before {
  border-color: #212121;
}

.card {
  height: 400px;
  transition-property: transform, width, height, margin, padding;
  transform-style: preserve-3d;
  transition-duration: .5s;
  position: relative;
}
.card .front,
.card .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFF;
  padding: 20px;
  border-bottom: 4px solid;
  box-shadow: 1px 1px 30px rgba(132, 132, 132, 0.43);
  transition-property: transform, width, height, margin, padding;
  transform-style: preserve-3d;
  transition-duration: .5s;
}

.flipped {
  background-color: red;
}

.front {
  z-index: 2;
}
.front.flipped {
  transform: rotateY(180deg);
  z-index: 1;
}

.back {
  transform: rotateY(-180deg);
  z-index: 3;
}
.back.flipped {
  transform: rotateY(0deg);
  background-color: #ddd;
}

@media (max-width: 1100px) {
  .flip_card__container .product-container {
    width: 250px;
  }

  .flip_card__container-wrap {
    width: 870px;
  }

  .flip_card__container .flipped:before {
    width: 100%;
    height: 100%;
    padding: none;
    z-index: 1;
  }

  .flip_card__container .card {
    height: 397px;
  }
}
@media (max-width: 960px) {
  .flip_card__container .section-inner {
    width: 98%;
  }

  .flip_card__container-wrap {
    width: 790px;
  }

  .flip_card__container .product-container {
    margin: 0 6px;
  }
}
@media (max-width: 830px) {
  .flip_card__container .section-inner {
    width: 90%;
    margin-top: 0;
  }
  .flip_card__container .product-container {
    width: 90%;
    padding: 0px 5%;
    margin-top: 70px;
    margin-bottom: 0px;
  }
  .flip_card__container .product-container:hover {
    margin-top: 0px;
    cursor: pointer;
    cursor: hand;
  }
  .flip_card__container .flip_card__container-wrap {
    width: 100%;
    display: block;
    position: relative;
    left: 0;
    top: -100px;
  }
  .flip_card__container .highlight-text {
    float: left;
    width: 60%;
    margin: 20px 5% 0 5%;
  }
  .flip_card__container .product-image {
    width: 35%;
    float: left;
  }
  .flip_card__container .front .product-image,
  .flip_card__container .back .product-image,
  .flip_card__container .product-image {
    width: 18%;
    max-width: 130px;
    margin: 30px 5% 0 5%;
    float: right;
  }
  .flip_card__container .card {
    height: 190px;
  }
}
@media (max-width: 830px) {
  .back {
    transform: rotateX(-180deg);
    z-index: 3;
  }
  .back.flipped {
    transform: rotateX(0deg);
  }

  .front.flipped {
    transform: rotateX(180deg);
    z-index: 1;
  }
}
@media (max-width: 660px) {
  .flip_card__container .highlight-text {
    margin: 0 5%;
  }
}
@media (max-width: 550px) {
  .flip_card__container .card {
    height: 330px;
  }

  .flip_card__container .highlight-text {
    margin: 0;
    float: none;
    width: inherit;
  }

  .flip_card__container .front .product-image,
  .flip_card__container .back .product-image,
  .flip_card__container .product-image {
    width: 30%;
    margin: 0 auto;
    float: none;
  }
}
@media (max-width: 460px) {
  .flip_card__container .section-inner {
    margin-top: -330px;
  }

  .flip_card__container .product-container {
    margin-top: 0 !important;
  }
}
</style>









<section id="flip-cards" class="">
  <div class="section-inner">
    <div id="" class="flip_card__container">
      <div id="controls" class="product-container flip_card noselect" style="margin-top: 0px; opacity: 0.95; transition: 0.5s;">
        <div class="card">
          <div class="front">
            <div class="highlight-text">
              <h2>SUPERIOR THINGS</h2>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div class="learn-more">Learn More</div>
            </div>
            <img id="controls__image--front"
              class="product-image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDAwLjAwMDAwMHB0IiBoZWlnaHQ9IjQwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQwMC4wMDAwMDAgNDAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4OCAzODQ5IGMtNjE4IC00OCAtMTE3NiAtNDE0IC0xNDc4IC05NzEgbC0zOSAtNzIgLTEwMSAyMDkgYy01NQoxMTUgLTEwMiAyMTAgLTEwNCAyMTIgLTYgNiAtMjY2IC0xMjMgLTI2NiAtMTMyIDAgLTE4IDQzMCAtOTAwIDQzOCAtODk4IDcgMQo4NTEgNDA3IDg4NCA0MjQgMTUgOCAxMSAyMiAtNDMgMTM3IC0zMyA3MCAtNjQgMTMxIC02OCAxMzUgLTUgNSAtNDIgLTggLTgyCi0yOSAtNDEgLTIwIC0xNDMgLTcwIC0yMjcgLTExMCBsLTE1MyAtNzMgMzIgNjAgYzE4MiAzNDAgNDk5IDYwNyA4NjggNzI5IDE0Ngo0OSAyNDQgNjkgMzg4IDc5IDY5NCA1MiAxMzQ4IC0zNzcgMTU3NiAtMTAzNiA2OCAtMTk0IDgyIC0yODMgODIgLTUxMyAwIC0xNzgKLTMgLTIxOSAtMjMgLTMwOCAtMTA3IC00ODAgLTM5NyAtODU5IC04MjAgLTEwNzYgLTY2MyAtMzM5IC0xNDc2IC0xNTYgLTE5MzUKNDM2IGwtNDQgNTcgLTExNCAtODAgYy02MyAtNDQgLTExOCAtODQgLTEyMyAtODkgLTIwIC0yMCAyMDUgLTI3MCAzNDQgLTM4Mwo3MzggLTU5NSAxODEyIC01MzggMjQ4MCAxMzIgMzU1IDM1NiA1NDAgODA2IDU0MCAxMzExIDAgNTA1IC0xODYgOTU2IC01MzkKMTMxMSAtMzE5IDMxOSAtNzMwIDUwNiAtMTE4NyA1MzkgLTc2IDUgLTE0OCA5IC0xNTkgOSAtMTEgLTEgLTY4IC02IC0xMjcgLTEweiIvPgo8L2c+Cjwvc3ZnPgo="
              alt="left">
          </div>
          <div class="back">
            <div class="highlight-text">
              <h2>VERY SUPERIOR</h2>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div class="learn-more">GO BACK</div>
            </div>
            <img id="controls__image--back" class="product-image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDAwLjAwMDAwMHB0IiBoZWlnaHQ9IjQwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQwMC4wMDAwMDAgNDAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4OCAzODQ5IGMtNjE4IC00OCAtMTE3NiAtNDE0IC0xNDc4IC05NzEgbC0zOSAtNzIgLTEwMSAyMDkgYy01NQoxMTUgLTEwMiAyMTAgLTEwNCAyMTIgLTYgNiAtMjY2IC0xMjMgLTI2NiAtMTMyIDAgLTE4IDQzMCAtOTAwIDQzOCAtODk4IDcgMQo4NTEgNDA3IDg4NCA0MjQgMTUgOCAxMSAyMiAtNDMgMTM3IC0zMyA3MCAtNjQgMTMxIC02OCAxMzUgLTUgNSAtNDIgLTggLTgyCi0yOSAtNDEgLTIwIC0xNDMgLTcwIC0yMjcgLTExMCBsLTE1MyAtNzMgMzIgNjAgYzE4MiAzNDAgNDk5IDYwNyA4NjggNzI5IDE0Ngo0OSAyNDQgNjkgMzg4IDc5IDY5NCA1MiAxMzQ4IC0zNzcgMTU3NiAtMTAzNiA2OCAtMTk0IDgyIC0yODMgODIgLTUxMyAwIC0xNzgKLTMgLTIxOSAtMjMgLTMwOCAtMTA3IC00ODAgLTM5NyAtODU5IC04MjAgLTEwNzYgLTY2MyAtMzM5IC0xNDc2IC0xNTYgLTE5MzUKNDM2IGwtNDQgNTcgLTExNCAtODAgYy02MyAtNDQgLTExOCAtODQgLTEyMyAtODkgLTIwIC0yMCAyMDUgLTI3MCAzNDQgLTM4Mwo3MzggLTU5NSAxODEyIC01MzggMjQ4MCAxMzIgMzU1IDM1NiA1NDAgODA2IDU0MCAxMzExIDAgNTA1IC0xODYgOTU2IC01MzkKMTMxMSAtMzE5IDMxOSAtNzMwIDUwNiAtMTE4NyA1MzkgLTc2IDUgLTE0OCA5IC0xNTkgOSAtMTEgLTEgLTY4IC02IC0xMjcgLTEweiIvPgo8L2c+Cjwvc3ZnPgo="
              alt="left card back side">
          </div>
        </div>
      </div>

      <div id="design" class="product-container noselect" style="margin-top: 0px; opacity: 0.95; transition: 0.5s;">
        <div class="card">
          <div class="front">
            <div class="highlight-text">
              <h2>GREAT STUFF</h2>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div class="learn-more">Learn More</div>
            </div>
            <img id="design__image--front" class="product-image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDAwLjAwMDAwMHB0IiBoZWlnaHQ9IjQwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQwMC4wMDAwMDAgNDAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4OCAzODQ5IGMtNjE4IC00OCAtMTE3NiAtNDE0IC0xNDc4IC05NzEgbC0zOSAtNzIgLTEwMSAyMDkgYy01NQoxMTUgLTEwMiAyMTAgLTEwNCAyMTIgLTYgNiAtMjY2IC0xMjMgLTI2NiAtMTMyIDAgLTE4IDQzMCAtOTAwIDQzOCAtODk4IDcgMQo4NTEgNDA3IDg4NCA0MjQgMTUgOCAxMSAyMiAtNDMgMTM3IC0zMyA3MCAtNjQgMTMxIC02OCAxMzUgLTUgNSAtNDIgLTggLTgyCi0yOSAtNDEgLTIwIC0xNDMgLTcwIC0yMjcgLTExMCBsLTE1MyAtNzMgMzIgNjAgYzE4MiAzNDAgNDk5IDYwNyA4NjggNzI5IDE0Ngo0OSAyNDQgNjkgMzg4IDc5IDY5NCA1MiAxMzQ4IC0zNzcgMTU3NiAtMTAzNiA2OCAtMTk0IDgyIC0yODMgODIgLTUxMyAwIC0xNzgKLTMgLTIxOSAtMjMgLTMwOCAtMTA3IC00ODAgLTM5NyAtODU5IC04MjAgLTEwNzYgLTY2MyAtMzM5IC0xNDc2IC0xNTYgLTE5MzUKNDM2IGwtNDQgNTcgLTExNCAtODAgYy02MyAtNDQgLTExOCAtODQgLTEyMyAtODkgLTIwIC0yMCAyMDUgLTI3MCAzNDQgLTM4Mwo3MzggLTU5NSAxODEyIC01MzggMjQ4MCAxMzIgMzU1IDM1NiA1NDAgODA2IDU0MCAxMzExIDAgNTA1IC0xODYgOTU2IC01MzkKMTMxMSAtMzE5IDMxOSAtNzMwIDUwNiAtMTE4NyA1MzkgLTc2IDUgLTE0OCA5IC0xNTkgOSAtMTEgLTEgLTY4IC02IC0xMjcgLTEweiIvPgo8L2c+Cjwvc3ZnPgo="
              alt="mid">
          </div>
          <div class="back">
            <div class="highlight-text">
              <h2>VERY GREAT</h2>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div class="learn-more">GO BACK</div>
            </div>
            <img id="design__image--back" class="product-image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDAwLjAwMDAwMHB0IiBoZWlnaHQ9IjQwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQwMC4wMDAwMDAgNDAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4OCAzODQ5IGMtNjE4IC00OCAtMTE3NiAtNDE0IC0xNDc4IC05NzEgbC0zOSAtNzIgLTEwMSAyMDkgYy01NQoxMTUgLTEwMiAyMTAgLTEwNCAyMTIgLTYgNiAtMjY2IC0xMjMgLTI2NiAtMTMyIDAgLTE4IDQzMCAtOTAwIDQzOCAtODk4IDcgMQo4NTEgNDA3IDg4NCA0MjQgMTUgOCAxMSAyMiAtNDMgMTM3IC0zMyA3MCAtNjQgMTMxIC02OCAxMzUgLTUgNSAtNDIgLTggLTgyCi0yOSAtNDEgLTIwIC0xNDMgLTcwIC0yMjcgLTExMCBsLTE1MyAtNzMgMzIgNjAgYzE4MiAzNDAgNDk5IDYwNyA4NjggNzI5IDE0Ngo0OSAyNDQgNjkgMzg4IDc5IDY5NCA1MiAxMzQ4IC0zNzcgMTU3NiAtMTAzNiA2OCAtMTk0IDgyIC0yODMgODIgLTUxMyAwIC0xNzgKLTMgLTIxOSAtMjMgLTMwOCAtMTA3IC00ODAgLTM5NyAtODU5IC04MjAgLTEwNzYgLTY2MyAtMzM5IC0xNDc2IC0xNTYgLTE5MzUKNDM2IGwtNDQgNTcgLTExNCAtODAgYy02MyAtNDQgLTExOCAtODQgLTEyMyAtODkgLTIwIC0yMCAyMDUgLTI3MCAzNDQgLTM4Mwo3MzggLTU5NSAxODEyIC01MzggMjQ4MCAxMzIgMzU1IDM1NiA1NDAgODA2IDU0MCAxMzExIDAgNTA1IC0xODYgOTU2IC01MzkKMTMxMSAtMzE5IDMxOSAtNzMwIDUwNiAtMTE4NyA1MzkgLTc2IDUgLTE0OCA5IC0xNTkgOSAtMTEgLTEgLTY4IC02IC0xMjcgLTEweiIvPgo8L2c+Cjwvc3ZnPgo="
              alt="mid card back side">
          </div>
        </div>
      </div>
      <div id="efficiency" class="product-container noselect" style="margin-top: 0px; opacity: 0.95; transition: 0.5s;">
        <div class="card">
          <div class="front">
            <div class="highlight-text">
              <h2>AMAZING SPEED</h2>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div class="learn-more">Learn More</div>
            </div>
            <img id="efficiency__image--front"
              class="product-image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDAwLjAwMDAwMHB0IiBoZWlnaHQ9IjQwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQwMC4wMDAwMDAgNDAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4OCAzODQ5IGMtNjE4IC00OCAtMTE3NiAtNDE0IC0xNDc4IC05NzEgbC0zOSAtNzIgLTEwMSAyMDkgYy01NQoxMTUgLTEwMiAyMTAgLTEwNCAyMTIgLTYgNiAtMjY2IC0xMjMgLTI2NiAtMTMyIDAgLTE4IDQzMCAtOTAwIDQzOCAtODk4IDcgMQo4NTEgNDA3IDg4NCA0MjQgMTUgOCAxMSAyMiAtNDMgMTM3IC0zMyA3MCAtNjQgMTMxIC02OCAxMzUgLTUgNSAtNDIgLTggLTgyCi0yOSAtNDEgLTIwIC0xNDMgLTcwIC0yMjcgLTExMCBsLTE1MyAtNzMgMzIgNjAgYzE4MiAzNDAgNDk5IDYwNyA4NjggNzI5IDE0Ngo0OSAyNDQgNjkgMzg4IDc5IDY5NCA1MiAxMzQ4IC0zNzcgMTU3NiAtMTAzNiA2OCAtMTk0IDgyIC0yODMgODIgLTUxMyAwIC0xNzgKLTMgLTIxOSAtMjMgLTMwOCAtMTA3IC00ODAgLTM5NyAtODU5IC04MjAgLTEwNzYgLTY2MyAtMzM5IC0xNDc2IC0xNTYgLTE5MzUKNDM2IGwtNDQgNTcgLTExNCAtODAgYy02MyAtNDQgLTExOCAtODQgLTEyMyAtODkgLTIwIC0yMCAyMDUgLTI3MCAzNDQgLTM4Mwo3MzggLTU5NSAxODEyIC01MzggMjQ4MCAxMzIgMzU1IDM1NiA1NDAgODA2IDU0MCAxMzExIDAgNTA1IC0xODYgOTU2IC01MzkKMTMxMSAtMzE5IDMxOSAtNzMwIDUwNiAtMTE4NyA1MzkgLTc2IDUgLTE0OCA5IC0xNTkgOSAtMTEgLTEgLTY4IC02IC0xMjcgLTEweiIvPgo8L2c+Cjwvc3ZnPgo="
              alt="right">
          </div>

          <div class="back">
            <div class="highlight-text">
              <h2>SPEED 2.0</h2>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div class="learn-more">GO BACK</div>
            </div>
            <img id="efficiency__image--back"
              class="product-image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDAwLjAwMDAwMHB0IiBoZWlnaHQ9IjQwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQwMC4wMDAwMDAgNDAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4OCAzODQ5IGMtNjE4IC00OCAtMTE3NiAtNDE0IC0xNDc4IC05NzEgbC0zOSAtNzIgLTEwMSAyMDkgYy01NQoxMTUgLTEwMiAyMTAgLTEwNCAyMTIgLTYgNiAtMjY2IC0xMjMgLTI2NiAtMTMyIDAgLTE4IDQzMCAtOTAwIDQzOCAtODk4IDcgMQo4NTEgNDA3IDg4NCA0MjQgMTUgOCAxMSAyMiAtNDMgMTM3IC0zMyA3MCAtNjQgMTMxIC02OCAxMzUgLTUgNSAtNDIgLTggLTgyCi0yOSAtNDEgLTIwIC0xNDMgLTcwIC0yMjcgLTExMCBsLTE1MyAtNzMgMzIgNjAgYzE4MiAzNDAgNDk5IDYwNyA4NjggNzI5IDE0Ngo0OSAyNDQgNjkgMzg4IDc5IDY5NCA1MiAxMzQ4IC0zNzcgMTU3NiAtMTAzNiA2OCAtMTk0IDgyIC0yODMgODIgLTUxMyAwIC0xNzgKLTMgLTIxOSAtMjMgLTMwOCAtMTA3IC00ODAgLTM5NyAtODU5IC04MjAgLTEwNzYgLTY2MyAtMzM5IC0xNDc2IC0xNTYgLTE5MzUKNDM2IGwtNDQgNTcgLTExNCAtODAgYy02MyAtNDQgLTExOCAtODQgLTEyMyAtODkgLTIwIC0yMCAyMDUgLTI3MCAzNDQgLTM4Mwo3MzggLTU5NSAxODEyIC01MzggMjQ4MCAxMzIgMzU1IDM1NiA1NDAgODA2IDU0MCAxMzExIDAgNTA1IC0xODYgOTU2IC01MzkKMTMxMSAtMzE5IDMxOSAtNzMwIDUwNiAtMTE4NyA1MzkgLTc2IDUgLTE0OCA5IC0xNTkgOSAtMTEgLTEgLTY4IC02IC0xMjcgLTEweiIvPgo8L2c+Cjwvc3ZnPgo="
              alt="right card back side">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
function initHome() {
  $('.product-container').css({
    'margin-top': '0',
    'opacity': 1
  });

  window.setTimeout(function() {
    $('.product-container').css({
      'transition-delay': '0s',
      'transition': '.5s',
      'transition-property': 'width, height, margin, padding'
    });
  }, 500);

  $('.product-container').click(function() {
    front = $(this).find('.card .front');
    back = $(this).find('.card .back');
    // frontHeight = front.height();
    // back.css({ "min-height": frontHeight });
    back.toggleClass('flipped');
    front.toggleClass('flipped');
  });
}

$(document).ready(function() {
    $('div,img').on('dragstart', false);
   initHome();
});
</script>
