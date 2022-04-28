import getResponseSample from "../../../sampleDatas.js";


export const SampleData = () => {
    return JSON.parse(getResponseSample());
};

export const MakeMandalList = (obj) => {
    let list = [];
    console.log('obj', obj)
    console.log('childNodes', obj.childNodes.length)

    //리스트가 없거나 존재하지 않으면.
    if (obj.childNodes.length < 0 || !obj.childNodes.length) {
        console.log('에러발생! 데이터가 존재하지 않습니다.')
        alert('객체 데이터가 존재하지 않습니다.')
        return
    }

    if (obj.childNodes.length > 0) {
        let childNodes = obj.childNodes;

        childNodes.forEach((each, index) => {

            // if (index === 4) {
            //     //중간자리에 객체 끼워넣기. 4번째에는 2번 리스트 추가.
            //     list.push({
            //         currentNode: obj.currentNode,
            //         dataLastEdited: obj.dataLastEdited,
            //         dateCreated: obj.dateCreated,
            //         depth: obj.depth,
            //         idxLocation: obj.idxLocation,
            //         parentNode: obj.parentNode,
            //         topic: 0
            //     })
            // }
            list.push(each);

        });


        return list;

    }


}
