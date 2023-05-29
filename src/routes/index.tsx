import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '../components/pokemons/pokemon-image';


export default component$(() => {

  const pokemonId     = useSignal<number>(1); //primitivos: booleans, strings, numeric
  const showBackImage = useSignal<boolean>(false); //primitivos: booleans, strings, numeric
  const isVisible     = useSignal<boolean>(false);

  const changePokemonId = $(( value:number ) => {
    if( pokemonId.value + value  <= 0 ) return;
    pokemonId.value = pokemonId.value += value;
  })

  return (
    <>
      <div class=" flex flex-col text-lg items-center justify-center">
        <span class=" text-2xl">Buscador Simple</span>
        <span class=" text-9xl">{ pokemonId }</span>

        {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemonId.value }.png`} alt="pokemon Sprite"
          style={{ width: '200px' }}
        /> */}

        <PokemonImage id={ pokemonId.value } size={200} backImage={ showBackImage.value } isVisible={ isVisible.value }/>

        {/* <span class=" text-9xl">{ pokemonId.value + 1 }</span> */}
      </div>
      <div class="flex text-lg justify-center">
        <button onClick$={ () => changePokemonId(-1) } class="btn btn-primary">Anterior</button>
        <button onClick$={ () => changePokemonId(+1) } class="btn btn-primary">Siguente</button>
        <button onClick$={ () => showBackImage.value = !showBackImage.value } class="btn btn-primary">Voltear</button>
        <button onClick$={ () => isVisible.value = !isVisible.value } class="btn btn-primary">Revelar</button>
      </div>
      {/* <div class="flex text-lg justify-center">
        <button onClick$={ () => pokemonId.value-- } class="btn btn-primary">Anterior</button>
        <button onClick$={ () => pokemonId.value++ } class="btn btn-primary">Siguente</button>
      </div> */}
      
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'Esta es mi primera aplicacion con Qwik',
    },
  ],
};
