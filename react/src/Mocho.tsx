import * as React from 'react'
import { Component } from 'react'
import State from './redux/state'
import * as AppAction from './redux/action'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IMochoProps {
    hoge: number
}

interface IMochoDispatch {
    addNumber: (amount: number) => void
}

export class Mocho extends Component<IMochoProps & IMochoDispatch & RouteComponentProps<{}>> {
    readonly MochoFace = '(o・∇・o)'
    readonly NansuFace = '(＊>△<)'

    render() {
        return (
            <div>
                <p>もちょだよ〜{this.MochoFace}</p>
                <p>{this.NansuFace}＜ナーンナーンっっ</p>
                <p>雨 宮 天</p>
                <p>{this.props.hoge}</p>
                <p><a href='#' onClick={() => this.props.addNumber(1)}>追加する</a></p>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IMochoDispatch {
    return {
        addNumber: (amount) => dispatch(AppAction.add(amount))
    }
}

function mapStateToProps(state: State): IMochoProps {
    return {
        hoge: state.hogehoge
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mocho))
