type menuOption = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: menuOption)=>{

    let menuObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu != ''){
        menuObject[activeMenu] = true;
    }

    return menuObject;
}