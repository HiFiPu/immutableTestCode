import { when, makeAutoObservable } from "mobx"
import React from 'react';

class MyResource {
    constructor() {
        makeAutoObservable(this, { dispose: false })
        when(
            // Once...
            () => !this.isVisible,
            // ... then.
            () => this.dispose()
        )
    }

    get isVisible() {
        // 表示此项目是否可见.
    }

    dispose() {
        // 清理一些资源.
    }
}

function index(props) {
    return (
        <div>
            <h1>副作用when....</h1>
        </div>
    );
}

export default index;