import React, { Component } from 'react'
import Banner from './banner'
export default class index extends Component {
    render() {
        const imgUrl = ["https://res.vmallres.com/uomcdn/CN/cms/202109/EDD6CA5C4F8CEFF58E24905557243E24.jpg.webp",
            "https://res.vmallres.com/uomcdn/CN/cms/202109/1EE866307CC0A3C4C8852D178628797C.jpg.webp",
            "https://res.vmallres.com/uomcdn/CN/cms/202109/A444C808F2128D37E627AF3FA3E32DC0.jpg.webp"
        ]
        return (
            <div><Banner imgUrl={imgUrl} speed={0} step={1} width={1170} height={400} interval={6000} autoplay={true} /></div>
        )
    }
}
