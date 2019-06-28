
export const fetchAllPokemon = () => (
  $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
);

export const fetchOnePokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon/:id'
  })
);