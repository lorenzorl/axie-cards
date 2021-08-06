export function filterCards(filter, cards){
  let filteredList = [...cards];

  if(filter.type !== 'all'){
    const filtered = filteredList.filter(card => card.id.includes(filter.type));
    filteredList = filtered;
  }

  if(filter.part !== 'all'){
    const filtered = filteredList.filter(card => card.id.includes(filter.part));
    filteredList = filtered;
  }

  return filteredList;

}

export function orderCards(order, cards){

  let orderedList = [...cards];

  if(order === 'descendingAttack'){
    orderedList.sort((a, b) => {
      const attackOfA = a.defaultAttack;
      const attackOfB = b.defaultAttack;

      if (attackOfA > attackOfB) {
        return -1;
      }
      if (attackOfA === attackOfB) {
        return 0;
      }
      if (attackOfA < attackOfB) {
        return 1;
      }
    });

    return orderedList;

  } else if (order === "ascendingAttack") {
    orderedList.sort((a, b) => {
      const attackOfA = a.defaultAttack;
      const attackOfB = b.defaultAttack;

      if (attackOfA < attackOfB) {
        return -1;
      }
      if (attackOfA === attackOfB) {
        return 0;
      }
      if (attackOfA > attackOfB) {
        return 1;
      }
    });

    return orderedList;
  } else if(order === 'descendingDefense'){
    orderedList.sort((a, b) => {
      const attackOfA = a.defaultDefense;
      const attackOfB = b.defaultDefense;

      if (attackOfA > attackOfB) {
        return -1;
      }
      if (attackOfA === attackOfB) {
        return 0;
      }
      if (attackOfA < attackOfB) {
        return 1;
      }
    });

    return orderedList;

  } else if (order === 'ascendingDefense') {
    orderedList.sort((a, b) => {
      const attackOfA = a.defaultDefense;
      const attackOfB = b.defaultDefense;

      if (attackOfA < attackOfB) {
        return -1;
      }
      if (attackOfA === attackOfB) {
        return 0;
      }
      if (attackOfA > attackOfB) {
        return 1;
      }
    });

    return orderedList;
  }

}