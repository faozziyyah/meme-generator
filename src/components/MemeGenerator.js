import React, {Component} from "react"
import styles from "../App.Module.css"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    /**
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImgs: memes });
        })
    }

    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */

    handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    
    render() {
        return (
                <div className={styles.container}>
                <form className={styles.memeform} onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        className={styles.input}
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        className={styles.input}
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button className={styles.button}>Gen</button>
                </form>
                <div className={styles.memes}>
                    <img src={this.state.randomImg} alt="" className={styles.img}/>
                    <h2 className={styles.top}>{this.state.topText}</h2>
                    <h2 className={styles.bottom}>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator