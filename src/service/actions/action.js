

export const get_Data = (data) =>{
    let options = {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/players',
        params: {page: '0', per_page: '25'},
        headers: {
          'x-rapidapi-host': 'free-nba.p.rapidapi.com',
          'x-rapidapi-key': '38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e'
        }
      };

    axios.request(options).then(function (response) {
        console.log("in action", response.data.data);
    }).catch(function (error) {
        console.error(error);
    });
    return dispatch({
        type: "GET_DATA",
        data: data,
    })
}