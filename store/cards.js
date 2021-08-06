import cardsData from '@/data/cards'
import * as Filters from '../helpers/filters.js'

export const state = () => ({
  cards: Object.values(cardsData),
  backgrounds: {
    aquatic: 'rgb(48 83 97 / 70%)',
    bug: 'rgb(112 57 53 / 70%)',
    plant: 'rgb(77 91 42 / 70%)',
    bird: 'rgb(117 59 72 / 70%)',
    reptile: 'rgb(87 61 94 / 70%)',
    beast: 'rgb(104 77 45 / 70%)'
  },
  parts: {
    aquatic: {
      color: '#4cb6cd',
      shadow: '#3479b7'
    },
    bug: {
      color: '#ef5243',
      shadow: '#b72c2c'
    },
    plant: {
      color: '#6cc001',
      shadow: '#428b13'
    },
    bird: {
      color: '#f38abc',
      shadow: '#d2536f'
    },
    reptile: {
      color: '#9b47cc',
      shadow: '#7736c1'
    },
    beast: {
      color: '#fdb610',
      shadow: '#e37c11'
    },
  },
  filteredCards: [],
  filter: {
    type: 'all',
    part: 'all',
    order: 'descendingAttack'
  }
})

export const mutations = {
  addAll(state, cards){
    state.cards = cards;
  },
  setFilteredCards(state, cards){
    state.filteredCards = cards;
  },
  setFilterType(state, type){
    state.filter.type = type;
  },
  setFilterPart(state, part){
    state.filter.part = part;
  },
  setOrder(state, order){
    state.filter.order = order;
  },

  filterCards(state){
    const cards = [...state.cards];
    state.filteredCards = cards;
    state.filteredCards = Filters.filterCards(state.filter, cards);
  },
  orderCards(state){
    const cards = [...state.filteredCards];
    state.filteredCards = Filters.orderCards(state.filter.order, cards);
  }
}

export const actions = {
  async filterOrder({ commit }, order){
    await commit('setOrder', order);
    await commit('orderCards');
  },
  async filterType({ commit, dispatch }, type){
    await commit('setFilterType', type);
    dispatch('filterCards');
  },
  async filterPart({ commit, dispatch}, part){
    await commit('setFilterPart', part);
    dispatch('filterCards')
  },
  async filterCards({ commit }){
    await commit('filterCards');
    await commit('orderCards')
  }
}

export const getters = {
  getAll : (state) => {
    return state.cards;
  },
  getOne: (state) => (id) => {
    return state.cards.find(card => card.id === id);
  },
  cardExists: (state) => (id) => {
    return state.cards.hasOwnProperty(id);
  },
  getByType: state => type => {
    return Object.values(state.cards).filter(card => card.id.includes(type))
  },
  getFilteredCards: state => {
    return state.filteredCards;
  }
}