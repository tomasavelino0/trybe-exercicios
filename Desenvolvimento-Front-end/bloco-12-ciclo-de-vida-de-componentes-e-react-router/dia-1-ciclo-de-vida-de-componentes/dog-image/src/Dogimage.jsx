import React from "react";
import Loading from "./components/Loading";

class Dogimage extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            imageDog: '',
        }
    }

    async componentDidMount() {
        const url = 'https://dog.ceo/api/breeds/image/random'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({
            loading: false,
            imageDog: data.message,
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.imageDog.includes('terrier')) {
            console.log(nextState.imageDog)
            return false;
          }
          return true;
    }

    componentDidUpdate() {
    const { imageDog } = this.state;
    localStorage.setItem('dogURL', imageDog);
    const Dogtype = imageDog.split('/')[4];
    alert(Dogtype);
    }


    imgGeneratorClick = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resposta => {
                return resposta.json()
            })
            .then(json => {
                this.setState({
                    imageDog: json.message,
                })
            })
    }


    render() {
        const { loading, imageDog } = this.state;

        return (
            <div>
                {loading ? (<Loading />) : (
                    <img src={imageDog} alt="Cachorro lindo" />
                )}
                <button onClick={this.imgGeneratorClick}>Novo doguinho</button>
            </div>
        )
    }
}

export default Dogimage;
