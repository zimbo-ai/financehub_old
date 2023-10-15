<script lang="ts">
    import "../../styles/tokens.css";
  
    interface IText {
      size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      color:
        | "default"
        | "accent"
        | "weak"
        | "red"
        | "weaker"
        | "weakest"
        | "dark"
        | "dark-weak"
        | "dark-weaker"
        | "dark-weakest"
        | "light"
        | "light-weak"
        | "light-weaker"
        | "light-weakest";
      as:
        | "span"
        | "label"
        | "p"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "li"
        | "i";
      weight?: "light" | "regular" | "medium" | "strong";
      className: HTMLElement["className"];
    }
  
    export let size: IText["size"] = undefined;
    export let weight: IText["weight"] = undefined;
    export let as: IText["as"] = "span";
    export let color: IText["color"] = "default";
  
    const className = `size-${size} color-${color} weight-${weight} ${$$restProps.class}`;
  </script>
  
  <svelte:element this={as} class={className}>
    <slot />
  </svelte:element>
  
  <style>
/* BASE STYLES */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--main-font);
  line-height: var(--line-height-heading);
}
h1 {
  font-size: var(--font-size-xxxl);
  font-weight: var(--font-weight-strong);
}
h2 {
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-strong);
}
h3 {
  margin-top: 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-regular);
}
h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
}
h5,
h6,
span {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
}
h6,
span {
  font-weight: var(--font-weight-light);
}
span {
  line-height: var(--line-height-regular);
}
label {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-caption);
  font-weight: var(--font-weight-light);
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--font-size-xxxxl);
  }
}

/* BASE STYLES */

/* TEXT COLOR */
.color-default {
  color: var(--color-text);
}
.color-red {
  color: var(--color-text-error);
}
.color-accent {
  color: var(--color-accent);
  text-decoration-color: var(--color-accent);
}
.color-weak {
  color: var(--color-text-weak);
}
.color-weaker {
  color: var(--color-text-weaker);
}
.color-weakest {
  color: var(--color-text-weakest);
}
.color-light-default {
  color: var(--color-text);
}
.color-light-weak {
  color: var(--color-text-weak);
}
.color-light-weaker {
  color: var(--color-text-weaker);
}
.color-light-weakest {
  color: var(--color-text-weakest);
}
.color-dark-default {
  color: var(--color-text-dark);
}
.color-dark-weak {
  color: var(--color-text-weak-dark);
}
.color-dark-weaker {
  color: var(--color-text-weaker-dark);
}
.color-dark-weakest {
  color: var(--color-text-weakest-dark);
}
@media (prefers-color-scheme: dark) {
  .color-default {
    color: var(--color-text-dark);
  }
  .color-weak {
    color: var(--color-text-weak-dark);
  }
  .color-weaker {
    color: var(--color-text-weaker-dark);
  }
  .color-weakest {
    color: var(--color-text-weakest-dark);
  }
  .color-red {
    color: var(--color-text-error-dark);
  }
}
/* TEXT COLOR */

/* TEXT SIZE */
.size-xs {
  font-size: var(--font-size-xs);
}
.size-sm {
  font-size: var(--font-size-sm);
}
.size-md {
  font-size: var(--font-size-md);
}
.size-lg {
  font-size: var(--font-size-lg);
}
.size-xl {
  font-size: var(--font-size-xl);
}
.size-xxl {
  font-size: var(--font-size-xxl);
}
/* TEXT SIZE */

/* TEXT WEIGHT */
.weight-light {
  font-weight: var(--font-weight-light);
}
.weight-regular {
  font-weight: var(--font-weight-regular) !important;
}
.weight-medium {
  font-weight: var(--font-weight-medium);
}
.weight-strong {
  font-weight: var(--font-weight-strong);
}
/* TEXT WEIGHT */


  </style>
  
  