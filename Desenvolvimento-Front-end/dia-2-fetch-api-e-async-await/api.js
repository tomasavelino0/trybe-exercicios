const cryptoApiUrl = `https://api.coincap.io/v2/assets`;
const ul = document.getElementById
    ('list-crypto');
    let number22 = 22.232323;

const List10Crypto = async () => {
    try {
        const response = await fetch(cryptoApiUrl);
        const json = await response.json()
        const { data } = json;
        const arrayFilter = data.filter((moeda) => moeda.rank <= 10).forEach(coin => {
            const { name, symbol, vwap24Hr } = coin;
            let li = document.createElement('li')
            li.innerText =`${name} (${symbol}): ${vwap24Hr} dolares.`
            ul.appendChild(li);
        });

    } catch (error) {
        console.log(`Algo deu errado :( \n${error}`);
    }
};
List10Crypto();

const createLi = () => {
    let li = document.createElement('li').innerText = `${name} (${symbol}): ${vwap24Hr} dolares.`
    ul.appendChild(li);
}