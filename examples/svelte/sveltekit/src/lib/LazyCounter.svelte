
<script>
    let lazy;
    
    function load() {
      lazy = import('./Counter.svelte')
    }
  </script>

{#await lazy then { default: Counter }}
    <Counter {...$$props} />
{/await}    