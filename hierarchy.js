const employees = [
    {id: 1, name: 'farhana', manager: 2},
    {id: 2, name: 'ryan', manager: 3},
    {id: 3, name: 'yee may', manager: 4},
    {id: 4, name: 'johnson', manager: 0},
    {id: 5, name: 'farica', manager: 4},
    {id: 6, name: 'angelouse', manager: 2},
    {id: 7, name: 'yu han', manager: 6},
    {id: 8, name: 'flora', manager: 6},
    {id: 9, name: 'sagar', manager: 1},
    {id: 10, name: 'thiru', manager: 1},
];

const idMapping = employees.reduce((map, emp, i) => {
    map[emp.id] = i;
    return map;
}, {});
//console.log(idMapping);
let root;
employees.forEach(emp => {
    if(emp.manager === 0){
        root = emp;
        return;
    }
    const manager = employees[idMapping[emp.manager]];
    manager.children = [...(manager.children || []), emp];
});
//console.log(JSON.stringify(root));
function printHierarchy(root, level){
    let spaces = '';
    for(let i=0; i<level; i++){
        spaces += ' ';
    }
    console.log(spaces + root.name);
    if(root.children && root.children.length > 0){
        root.children.forEach(child => {
            printHierarchy(child, level+1);
        });
    }
}

printHierarchy(root, 0);