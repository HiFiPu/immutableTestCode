import  {observable,action,computed,autorun} from "mobx"
 
class  goodsInfo{
    @observable num = 10;//设置属性可观察
    @observable price = 68;
 
    @action Add(){//定义属性的修改方法
        this.num++;
        console.log(this.num)
    }
    @action  Reduce(){
        this.num--;
    }
    @action asyncAdd(){//定义异步方法
        setTimeout(()=>{
            console.log(this.num);
            this.Add();
        },5000);
    }
    @computed  get total(){//定义计算属性
        return this.num*this.price
    }
}
export default goodsInfo