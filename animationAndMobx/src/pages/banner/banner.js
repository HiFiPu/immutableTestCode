/* eslint-disable react/no-typos */

import React from "react"
import propTypes from "prop-types"
import "./css/banner.less"
export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        let { imgUrl, speed, step, width, height, autoplay } = this.props

        // 克隆数组
        let imgUrlClone = []
        imgUrlClone = imgUrlClone.concat([].concat(imgUrl))
        imgUrlClone.push(imgUrl[0])
        imgUrlClone.unshift(imgUrl[imgUrl.length - 1])
        this.imgUrlClone = imgUrlClone
        this.state = {
            speed,
            step,
            width,
            height
        }
        if (autoplay) {
            this.timer = setInterval(() => {
                this.next()
            }, this.props.interval);
        }
    }

    static propTypes = {
        dataUrl: propTypes.array,
        speed: propTypes.number,
        spep: propTypes.number,
        width: propTypes.number,
        height: propTypes.number,

    }
    static defaultProps = {
        imgUrl: [],
        speed: 200,
        spep: 1,
        width: 1170,
        height: 400,
        autoplay: true
    }
    render() {
        console.log('11111')
        let { width, height, step, speed } = this.state
        let swiperBoxSty = {
            width: `${this.imgUrlClone.length * width}px`,
            left: `${-step * width}px`,
            height: height + "px",
            transition: `all ${speed}ms linear`
        }
        this.swiperBoxSty = swiperBoxSty
        let commom = {
            width: width + "px",
            height: height + "px"
        }
        return <div className="container" style={commom} ref="box" onMouseEnter={this.removeInte} onMouseLeave={this.addInter}>
            <div className="swiper-box" style={swiperBoxSty}>
                {this.imgUrlClone.map((item, index) => {
                    return <div className={`swiper-item ${index==this.state.step?'show':''}`} key={index}><img src={item} alt="" /></div>
                })}

            </div>
            <div className="swiper-arrow">
                <div className="arrowLeft iconfont iconqianjin1" ref="pre" onClick={this.prev}></div>
                <div className="arrowRight iconfont iconqianjin" ref="next" onClick={this.next}></div>
            </div>
            <div className="focus">
                {this.props.imgUrl.map((item, index) => {
                    if (step === this.imgUrlClone.length - 1) {
                        step = 1
                    }
                    if (step === 0) {
                        step = this.imgUrlClone.length - 2
                    }
                    return <div className={index + 1 === step ? "active" : ""} key={index} onClick={()=>this.TClick(index)}></div>
                })}

            </div>
        </div>
    }
    /**
     * 点击指示点
     */
    TClick = (index) =>{
        this.setState({
            step: index+1,
            speed: this.props.speed
        })
    }
    next = () => {
        let { step } = this.state
        if (step >= this.imgUrlClone.length - 1) {
            this.setState({
                step: 1,
                speed: 0
            })
        }
        setTimeout(() => {
            this.setState({
                step: this.state.step + 1,
                speed: this.props.speed
            })
        }, 0)

    }
    prev = () => {
        let { step } = this.state
        if (step <= 0) {
            this.setState({
                step: this.imgUrlClone.length - 2,
                speed: 0
            })
        }
        setTimeout(() => {
            this.setState({
                step: this.state.step - 1,
                speed: this.props.speed
            })
        }, 0)

    }
    removeInte = () => {
        clearInterval(this.timer)
    }
    addInter = () => {
        if (!this.props.autoplay) return
        this.timer = setInterval(() => {
            this.next()
        }, this.props.interval);
    }

}
