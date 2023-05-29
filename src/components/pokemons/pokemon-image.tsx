import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
    id: number;
    size?: number;
    backImage: boolean;
    isVisible?: boolean;
}


// export const PokemonImage = component$(( props: Props ) => {
export const PokemonImage = component$(( {
    id, size = 200, 
    backImage=false, 
    isVisible=false}: Props 
) => {

    const imageLoaded = useSignal(false);
    useTask$(( {track} ) =>{
        track( () => id);
        imageLoaded.value = false;
    });

    return (
        <div class="flex items-center justify-center"
            style={{ width: `${ size }px`, height: `${size}px`}}
        >
            {/* <span>Cargando... { imageLoaded.value ? 'CARGADA!!!' : 'cargando'}</span> */}
            
            { !imageLoaded.value && <span>Cargando...</span>}

            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${backImage ? 'back/': ''}${ id }.png`} alt="pokemon Sprite"
                style={{ width: `${size}px` }}
                onLoad$={ () => {
                        // setTimeout(() => {
                            imageLoaded.value = true        
                        // }, 1000);
                    } 
                }
                class={[{ 
                    'hidden': !imageLoaded.value,
                    'brightness-0': !isVisible
                }, 'transition-all']}
            />
        </div>
    )
})