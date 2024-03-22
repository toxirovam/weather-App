const KEY =a8c47af47c650c1eb7c63ac90bf84155


//////request get data///// 
const getdata =async (city) => {
    const base ="https://api.openweathermap.org/data/2.5/weather"
    const query =`?q=${city}&appid=${KEY}`
 
    const req = await fetch(base+query)
    const data =await req.json()

    return data
}

getdata("London").then((data)) => console.log(data);