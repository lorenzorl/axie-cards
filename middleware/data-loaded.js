export default async function({ store, $axios }){
  if(Object.entries(store.state.cards.cards).length > 0){
    return;
  }
  try {
    const res = await $axios.$get('https://storage.googleapis.com/axie-cdn/game/cards/card-abilities.json')
    store.commit('cards/addAll', res);
  } catch (e){
    console.log('error');
    console.log(e);
  }

} 