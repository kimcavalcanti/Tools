var arr = [
    {
        "name": "Bar",
        "parentId": null,
        "id": 1
    },
    {
        "id": 2,
        "name": "Beer",
        "parentId": 1
    },
    {
        "id": 3,
        "name": "Beef",
        "parentId": 2
    },
    {
        "id": 4,
        "name": "Body",
        "parentId": 2
    },
    {
        "id": 5,
        "name": "Boost",
        "parentId": null
    },
    {
        "id": 6,
        "name": "Blink",
        "parentId": 5
    },
    {
        "id": 7,
        "name": "Box",
        "parentId": 5
    },
    {
        "name": "Beat",
        "parentId": null,
        "id": 8
    },
    {
        "name": "Bastile",
        "parentId": null,
        "id": 9
    }
]

const parseFlatIntoNested = (arr, parent) => {
    var out = []
    arr.map(item => {
        if(item.parentId === parent) {
            let childNodes = parseFlatIntoNested(arr, item.id);
            if (childNodes.length) {
                item.childNodes = childNodes;
            }
            out.push(item);
        }
    });
    return out;
};

console.log(JSON.stringify(parseFlatIntoNested(arr, null)));