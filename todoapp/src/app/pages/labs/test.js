

class BoxSignal{
    constructor(param1){
        this.property = param1;
    }
    create_box(x){
    let my_box = x;
    return my_box
    }

    read_box(x){
        console.log(x)
    }

    modify(obj){
       if (typeof obj === 'object') {
      obj.value =  obj.value * 5;
    }
  }
}