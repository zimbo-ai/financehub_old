<svg class="spinner" viewBox="0 0 50 50">
  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="6" />
</svg>

<style>
  .spinner {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: var(--size-md);
    height: var(--size-md);
      
  }
  .spinner .path {
    stroke: inherit;
    stroke-linecap: round;
    -webkit-animation: dash 1.5s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite;
  }

  @-webkit-keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>
