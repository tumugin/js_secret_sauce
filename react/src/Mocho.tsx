import * as React from 'react'
import { Component } from 'react'
export default class Mocho extends Component{
    MochoFace = '(o・∇・o)'
    
    render(){
        return(
            <div>
                <p>もちょだよ〜{this.MochoFace}</p>
            </div>
        )
    }
}