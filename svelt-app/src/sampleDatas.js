const responseSample = () => {

//기본제공 데이터 양식
    const datasTemplate = {
        memberId: 'sinbum@kakao.com',
        categoryName: 'foods',
        depth: 0,
        parentNode: 'null',
        currentNode: 'root',
        dateCreated: '20220424',
        dateLastEdited: '20220424',
        desc: '샘플데이터의 설명 입니다.',
        topic: '주제',
        childNodes: [],
    };

//첫번째 차일드 노드 양식
    const childNodeTemplate = {
        parentNode: 'root',
        currentNode: 'child',
        depth: 1,
        dateCreated: '20220424',
        dataLastEdited: '20220424',
        idxLocation: 0,
        topic: '',
        childNodes: [],
    };

//마지막 차일드 노드 양식
    const grandChildNodeTemplate = {
        parentNode: 'child',
        currentNode: 'grandChild',
        depth: 2,
        dateCreated: '20220424',
        dataLastEdited: '20220424',
        idxLocation: 0,
        topic: ''
    };

//주요토픽생성
    let datas = {...datasTemplate};


    let list = [];
    for (let i = 0; i < 9; i++) {
        let childNode = {...childNodeTemplate};

        childNode.idxLocation = childNode.depth + ',' + i
        childNode.topic = i

        if (i === 4) {
            list.push({
                parentNode: 'root',
                currentNode: 'child',
                depth: 1,
                dateCreated: '20220424',
                dataLastEdited: '20220424',
                idxLocation: childNode.idxLocation = childNode.depth + ',' + i,
                topic: i,
            })
            continue
        }

        let subList = [];
        let grandChildNode = {...grandChildNodeTemplate}
        for (let j = 0; j < 9; j++) {

            if (i === 4) {
                subList.push({
                    parentNode: 'child',
                    currentNode: 'grandChild',
                    depth: 2,
                    dateCreated: '20220424',
                    dataLastEdited: '20220424',
                    idxLocation: grandChildNode.depth + ',' + (i + 1) + '-' + (j + 1),
                    topic: (i + 1) + '-' + (j + 1),
                })
                continue
            }

            grandChildNode.idxLocation = grandChildNode.depth + ',' + (i + 1) + '-' + (j + 1);
            grandChildNode.topic = (i + 1) + '-' + (j + 1)
            subList.push(grandChildNode);
            childNode.childNodes.push(grandChildNode);
        }

        childNode.childNodes = [...subList];
        list.push(childNode);

    }

    datas.childNodes = [...list];

    return JSON.stringify(datas);

}

module.exports = responseSample
