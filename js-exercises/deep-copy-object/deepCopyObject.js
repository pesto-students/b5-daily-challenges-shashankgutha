const deepCopyObject = (objToCopy,copyDescriptor=false) => {
    if(!(objToCopy !== null && typeof objToCopy === 'object')){
        return objToCopy;
    }
    let clonedObject={};
    for(let key of Object.getOwnPropertyNames(objToCopy)){

        clonedObject[key]=deepCopyObject(objToCopy[key],copyDescriptor)
        if(copyDescriptor){
           let currentDescriptor = Object.getOwnPropertyDescriptor(objToCopy, key);
          // console.log(currentDescriptor);
            Object.defineProperty(clonedObject, key, currentDescriptor);
        }
    }
    return clonedObject;
};

const myObj = {
    subObj: {
      key: 'value',
    },
  };

  Object.defineProperty(myObj,myObj.subObj,{value:{
    key: 'value',
  },configurable:false,writable:false});
  let oobj=deepCopyObject(myObj,true)
console.log(Object.getOwnPropertyDescriptor(oobj.subObj, oobj.subObj.key));
oobj.subObj.key='new val';
console.log(oobj.subObj.key);

module.exports= { deepCopyObject };
