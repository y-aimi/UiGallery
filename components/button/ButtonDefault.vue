<script setup lang="ts">
</script>

<template>
  <div class="button-container">
    <div class="button-text-container">
      <p>色反転</p>
      <button class="color-inversion">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>色反転+下線</p>
      <button class="color-inversion-underline">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>背景アニメーション</p>
      <button class="background-animation">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>下線アニメーション</p>
      <a class="underline-animation">
        ボタン
      </a>
    </div>
    <div class="button-text-container">
      <p>波紋</p>
      <button class="ripple">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>一瞬光る</p>
      <button class="twinkle">
        ボタン
      </button>
    </div>

    <div class="button-text-container">
      <p>動的ライティング</p>
      <div class="moving-light-canvas">
        <div class="moving-light-root">
          <div class="moving-light" />
          <button
            class="moving-light-fill"
            disabled
          >
            Button
          </button>
        </div>
      </div>
    </div>
    <div class="button-text-container" />
  </div>
</template>

<style scoped>
.color-inversion {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #39ABFF;
  border-radius: 0.5rem;
  color: #39ABFF;
  background-color: #FFF;
}

.color-inversion-underline {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #39ABFF;
  border-radius: 0.5rem;
  color: #39ABFF;
  background-color: #FFF;
}

.underline-animation {
  padding: 1rem 1.5rem;
  color: #39ABFF;
  cursor: pointer;
  position: relative
}

.underline-animation::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  background-color: #39ABFF;
  transform: scale(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.ripple {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #FFF;
  background-color: #39ABFF;
  background-size: 200% auto;
  animation: ripple 1.5s infinite;
}

@keyframes ripple {
  0% {box-shadow: 0 0 0 0 #39ABFF;}
  70% {box-shadow: 0 0 0 10px rgb(27 133 251 / 0%);}
  100% {box-shadow: 0 0 0 0 rgb(27 133 251 / 0%);}
}

.twinkle {
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #39ABFF;
  color: #FFF;
  overflow: hidden;
}

.twinkle::before {
  position: absolute;
  content: '';
  top: 0;
  left: -10%;
  width: 10%;
  height: 100%;
  background-color: #FFF;
  animation: twinkle 2.5s ease-in-out infinite;
}

@keyframes twinkle {
    0% {
      transform: scale(0) rotate(45deg);
      opacity: 0;
    }

    80% {
      transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }

    81% {
      transform: scale(4) rotate(45deg);
      opacity: 1;
    }

    100% {
      transform: scale(50) rotate(45deg);
      opacity: 0;
    }
}

.background-animation {
  z-index: 1;
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #39ABFF;
}

.background-animation::before {
  z-index: -1;
  position: absolute;
  content: "";
  background: #39ABFF;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform 0.3s;
}

.moving-light-canvas {
  padding: 1.6rem 2.4rem;
  background-color: #1A1A1A;
}

.moving-light-root {
  position: relative;
  overflow: hidden;
  height: 4rem;
  width: 9.6rem;
  cursor: pointer;
  background-color: rgb(77 77 77 / 30%);
  border-radius: 5rem;
  transition: box-shadow 0.4s ease;
}

.moving-light {
  position: absolute;
  bottom: 50%;
  left: 0;
  height: 50%;
  width: 40%;
  transform-origin: bottom;
  animation: move-light 3.2s linear infinite;
  background: linear-gradient(90deg, transparent, #99F2FF );
}

.moving-light-fill {
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(100% - 0.4rem);
  width: calc(100% - 0.4rem);
  border-radius: 5rem;
  background-color: rgb(26 26 26 / 40%);
  color: rgb(255 255 255 / 90%);
  backdrop-filter: blur(10px);
}

@keyframes move-light {
  0% {
    left: 0%;
    transform: translateX(0) rotate(0deg)
  }

  30% {
    left: 100%;
    transform: translateX(-100%) rotate(0deg);
   }

  50% {
    left: 100%;
    transform: translateX(-100%) rotate(180deg);
   }

  80% {
    left: 0%;
    transform: translateX(0) rotate(180deg);
  }

  100% {
    left: 0%;
    transform: translateX(0) rotate(360deg);
  }
}

@media (hover :hover){
  .color-inversion:hover {
    background-color: #39ABFF;
    color: #FFF;
    transition: all 0.3s;
  }

  .color-inversion-underline:hover {
    background-color: #39ABFF;
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
    color: #FFF;
    transition: all 0.3s;
  }

  .underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .background-animation:hover {
    color: #FFF;
  }

  .background-animation:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }

  .moving-light-root:hover {
    box-shadow: 0 0 0.5rem #99F2FF;
  }
}

.color-inversion:active {
  background-color: #008BF2;
  border-color: #008BF2;
}

.color-inversion-underline:active {
  background-color: #008BF2;
  border-color: #008BF2;
}

.ripple:active {
  background-color: #008BF2;
}

.twinkle:active {
  background-color: #008BF2;
}

.background-animation:active {
  background-color: #CCC;
}
</style>
