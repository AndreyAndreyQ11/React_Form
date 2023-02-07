import { Component } from "react";
import s from "./Form.module.css"



export default class Form extends Component {


    render() {

        return (
            <form >
                <label>
                    имя
                    <input className={s.input} type="text"></input>
                </label>

            </form>
        )

    }
}
